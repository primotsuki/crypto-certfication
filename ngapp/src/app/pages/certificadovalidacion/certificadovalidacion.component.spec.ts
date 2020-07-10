import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadovalidacionComponent } from './certificadovalidacion.component';

describe('CertificadovalidacionComponent', () => {
  let component: CertificadovalidacionComponent;
  let fixture: ComponentFixture<CertificadovalidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadovalidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadovalidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
