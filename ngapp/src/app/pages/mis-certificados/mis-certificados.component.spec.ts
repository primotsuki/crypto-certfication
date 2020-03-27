import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSolicitudesComponent } from './mis-certificados.component';

describe('MisCertificadosComponent', () => {
  let component: MisSolicitudesComponent;
  let fixture: ComponentFixture<MisSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
