import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCitiesDialogComponent } from './manage-cities-dialog.component';

describe('ManageCityDialogComponent', () => {
  let component: ManageCitiesDialogComponent;
  let fixture: ComponentFixture<ManageCitiesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCitiesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCitiesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
