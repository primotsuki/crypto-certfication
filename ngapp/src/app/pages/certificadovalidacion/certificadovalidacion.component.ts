import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  CertForm: FormGroup;
  submitted = false;
  error: any;
  contractAdress: string = '0xAD720c3045a492c27b76696F9C3137801dA572eF';
  myAdress: string = '';
  certificationIssuedEvent: any;
  certification: any;
  event: string;
  certificado_id: number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private pagesService: PagesService,
    private toastService: NbToastrService,
    @Inject(WEB3) private web3: Web3
  ) { }

  async ngOnInit() {
    this.CertForm = this.formBuilder.group({
      student_address: [''],
      issuer_address: [''],
      transaction_hash: [''],
      ipfs_hash: ['']
    });
    if(this.web3.givenProvider.isMetaMAsk){
      await this.web3.givenProvider.enable();
    }
    const accounts = await this.web3.eth.getAccounts();
    this.myAdress = accounts[0];
    this.setContract();
  }
  setContract() {
    this.certification  = new this.web3.eth.Contract(certification_artifacts, this.contractAdress);
  }
}
