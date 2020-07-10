import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../pages.service';
import {NbToastrService, NbGlobalPhysicalPosition} from '@nebular/theme';
import {WEB3} from '../../core/web3';
import Web3 from 'web3';
const certification_artifacts = require('../../../../../contract/build/contracts/UserCertificatesAbi.json');

@Component({
  selector: 'app-certificadovalidacion',
  templateUrl: './certificadovalidacion.component.html',
  styleUrls: ['./certificadovalidacion.component.scss']
})
export class CertificadovalidacionComponent implements OnInit {

  hash:string = '';
  submitted = false;
  error: any;
  valid: boolean = false;
  contractAdress: string = '0xAD720c3045a492c27b76696F9C3137801dA572eF';
  myAdress: string = '';
  certificationIssuedEvent: any;
  certification: any;
  event: string;
  certificado_id: number;
  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private toastService: NbToastrService,
    @Inject(WEB3) private web3: Web3
  ) { }

  async ngOnInit() {
    if(this.web3.givenProvider.isMetaMAsk){
      await this.web3.givenProvider.enable();
    }
    const accounts = await this.web3.eth.getAccounts();
    this.myAdress = accounts[0];
    this.setContract();
    this.valid = false;
  }
  setContract() {
    this.certification  = new this.web3.eth.Contract(certification_artifacts, this.contractAdress);
  }
  ValidarHash() {
    this.submitted= true;
    this.pagesService.ValidarCertificado(this.hash)
    .subscribe(data=>{
      if(data.data.length>0)
        this.valid = true;
        console.log(this.submitted, this.valid);
    })
  }
  certificateHash() {
    console.log(this.myAdress);
    this.certification.methods.certificateExists(this.hash)
    .send({from: this.myAdress,
          value: '1000'})
    .then(res=>{
      console.log(res);
    })
  }
}
