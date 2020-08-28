import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkFileListComponent } from './bulk-file-list.component';

describe('BulkFileListComponent', () => {
  let component: BulkFileListComponent;
  let fixture: ComponentFixture<BulkFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
