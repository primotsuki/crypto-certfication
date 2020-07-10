import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCertificadoComponent } from './ver-certificado.component';

describe('VerCertificadoComponent', () => {
  let component: VerCertificadoComponent;
  let fixture: ComponentFixture<VerCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
