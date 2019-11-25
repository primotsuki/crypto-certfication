import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PagesService} from '../pages.service';
import {NbToastrService, NbGlobalPhysicalPosition} from '@nebular/theme';
import {WEB3} from '../../core/web3';
import Web3 from 'web3';
import contract from 'truffle-contract';
import { on } from 'cluster';
const certification_artifacts = require('../../../../../contract/build/contracts/UserCertificatesAbi.json');
@Component({
  selector: 'app-certificado-emision',
  templateUrl: './certificado-emision.component.html',
  styleUrls: ['./certificado-emision.component.scss']
})
export class CertificadoEmisionComponent implements OnInit {

  CertForm: FormGroup;
  submitted = false;
  error: any;
  solicitud_id: number;
  contractAdress: string = '0xAD720c3045a492c27b76696F9C3137801dA572eF';
  myAdress: string = '';
  certificationIssuedEvent: any;
  certification: any;
  transactionHash: string;
  event: string;
  certificado_id: number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pagesService: PagesService,
    private toastService: NbToastrService,
    @Inject(WEB3) private web3: Web3
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.solicitud_id = params.id;
      this.CertForm = this.formBuilder.group({
        titulo_curso: ['', Validators.required],
        fecha_emision: ['', Validators.required],
        alumno_id: [params.user_id],
        alumno_nombre: ['', Validators.required],
        alumno_dni: ['', Validators.required],
        institucion_id: [''],
        institucion_nombre: ['', Validators.required],
        tipo_solicitud_id: [1],
        wallet: ['', Validators.required],
        solicitud_id: [params.solicitud_id]
      });
      this.get_datos_persona();
    });
    if(this.web3.givenProvider.isMetaMask){
      await this.web3.givenProvider.enable();
    }
    const accounts = await this.web3.eth.getAccounts();
    this.myAdress = accounts[0];
    this.setContract();
  }
  get f() {return this.CertForm.controls;}
  get_datos_persona() {
    this.pagesService.getDatosUsuario(this.f.alumno_id.value).subscribe(data=>{
      console.log(data);
      this.f.institucion_nombre.setValue(data.data.instituciones[0].nombre);
      this.f.institucion_id.setValue(data.data.instituciones[0].id);
      this.f.alumno_nombre.setValue(`${data.data.nombre} ${data.data.apellido_paterno} ${data.data.apellido_materno}`)
    });
  }
  setContract() {
    this.certification  = new this.web3.eth.Contract(certification_artifacts, this.contractAdress);
  }
  sign_Hash(ipfsHash: string) {
    this.certification.methods.addCertificate('0x4894bD582F1A6AD80A71BBe6D739182AA269DedB',ipfsHash)
    .send({from: this.myAdress,
          value: '1000'})
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  OnSubmit() {
    this.submitted = true;
    if (this.CertForm.invalid) {
      return;
    } else {
      const certificado = {
        titulo_curso: this.f.titulo_curso.value,
        fecha_emision: this.f.fecha_emision.value,
        alumno_id: this.f.alumno_id.value,
        alumno_nombre: this.f.alumno_nombre.value,
        alumno_dni: this.f.alumno_dni.value,
        institucion_id: this.f.institucion_id.value,
        institucion_nombre: this.f.institucion_nombre.value,
        tipo_solicitud_id: this.f.tipo_solicitud_id.value,
        wallet: this.f.wallet.value,
        solicitud_id: this.f.solicitud_id.value
      }
      this.pagesService.createCertificate(certificado).subscribe(data=>{
        console.log(data);
        this.sign_Hash(data.data.certificate_hash);
      })
    }
  }

}
