import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuldAddComponent } from './buld-add.component';

describe('BuldAddComponent', () => {
  let component: BuldAddComponent;
  let fixture: ComponentFixture<BuldAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuldAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuldAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
