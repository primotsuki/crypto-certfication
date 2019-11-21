pragma solidity ^0.5.0;


contract UserCertificate {

  struct Certificate {
    address issuer;
    string ipfHash;
  }

  address private owner;
  uint public price;
  mapping (address => Certificate[]) private userCertificates;
  mapping (string => bool) private certificates;

  modifier onlyOwner {
    require(msg.sender == owner, 'only allowed for owner');
    _;
  }
  modifier costs(uint _price) {
    if(msg.value >= _price){
      _;
    }
  }

  function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
    return true;
  }

  event CertificateIssued(address indexed _from, address indexed _to, string _ipfsHash);
  event CertificateRevoked(address indexed _from, address indexed _to, string _ipfsHash);

  constructor() public {
    owner = msg.sender;
    price = 0;
  }
  function setPrice(uint _price) public onlyOwner {
    price = _price;
  }

  function withdrawFounds(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance, 'amount is bigger than balance');
    owner.transfer(amount);
    return true;
  }

  function certificateExists(string memory ipfsHash) public view returns(bool) {
    if(certificates[ipfsHash]==true) {
      return true;
    } else {
      return false;
    }
  }
  function addCertificate(address user, string  memory ipfsHash) public payable costs(price) {
    require (msg.sender != user, 'cannot certificate your self');
    require(!certificateExists(ipfsHash), 'certificate already exists');

    userCertificates[msg.sender].push(Certificate(user,ipfsHash));
    certificates[ipfsHash] = true;

    Certificate(msg.sender, user, ipfsHash);
  }
  function revokeCertificate(address user, string memory ipfsHash) public {
    require(certificatesExists(ipfsHash), 'certificate does not exist');
    Certificate[] storage certs = userCertificates[user];
    bool found = false;
    uint i = 0;
    while (!found && i<certs.length) {
			found = (stringsEqual(certs[i].ipfsHash, ipfsHash));
			i++;
		}

		require(found, 'no found');//exists
		require(certs[i-1].issuer == msg.sender || msg.sender == owner, ' certificate not found');//being revoked for same issuer or owner

		delete certs[i-1];
		if (certs.length > 1) {
			certs[i-1] = certs[certs.length-1];//fill the gap
		}

		certs.length--;
		certificates[ipfsHash] = false;

		CertificateRevoked(msg.sender, user, ipfsHash);
  }
  //Return the number of certificates associated to user
	function getNumberCertificatesUser(address user) public constant returns (uint) {
		return userCertificates[user].length;
	}

	//Returns certificate for user in specific index position. This is neccesary because currently it is not possible to return array of strings
	function getUserCertificateAtIndex(address user, uint256 index) public constant returns (address, string) {
		require(userCertificates[user].length>index);

		Certificate storage cert = userCertificates[user][index];
		return (cert.issuer, cert.ipfsHash);
	}
}  
}
