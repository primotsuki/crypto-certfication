import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosInstitucionComponent } from './certificados-institucion.component';

describe('MisCertificadosComponent', () => {
  let component: CertificadosInstitucionComponent;
  let fixture: ComponentFixture<CertificadosInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadosInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
