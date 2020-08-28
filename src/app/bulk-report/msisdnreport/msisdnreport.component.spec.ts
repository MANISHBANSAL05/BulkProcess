import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSISDNReportComponent } from './msisdnreport.component';

describe('MSISDNReportComponent', () => {
  let component: MSISDNReportComponent;
  let fixture: ComponentFixture<MSISDNReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSISDNReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSISDNReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
