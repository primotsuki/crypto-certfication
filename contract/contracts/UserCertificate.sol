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
  event CertificateRevoked(address indexed _from, adrress indexed _to, string _ipfsHash);

  constructor() public {
    owner = msg.sender;
    price = 0;
  }
  function setPrice(uint _price) public onlyOwner {
    price = _price;
  }

}
