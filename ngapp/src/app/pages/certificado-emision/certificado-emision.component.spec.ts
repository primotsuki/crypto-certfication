import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoEmisionComponent } from './certificado-emision.component';

describe('CertificadoEmisionComponent', () => {
  let component: CertificadoEmisionComponent;
  let fixture: ComponentFixture<CertificadoEmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoEmisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoEmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
