import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoRevocacionComponent } from './certificado-revocacion.component';

describe('CertificadoRevocacionComponent', () => {
  let component: CertificadoRevocacionComponent;
  let fixture: ComponentFixture<CertificadoRevocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoRevocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoRevocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
