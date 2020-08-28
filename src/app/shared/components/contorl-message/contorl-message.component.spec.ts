import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContorlMessageComponent } from './contorl-message.component';

describe('ContorlMessageComponent', () => {
  let component: ContorlMessageComponent;
  let fixture: ComponentFixture<ContorlMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContorlMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContorlMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
