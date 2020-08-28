import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkFileViewComponent } from './bulk-file-view.component';

describe('BulkFileViewComponent', () => {
  let component: BulkFileViewComponent;
  let fixture: ComponentFixture<BulkFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
