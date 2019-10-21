import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCityDialogComponent } from './manage-city-dialog.component';

describe('ManageCityDialogComponent', () => {
  let component: ManageCityDialogComponent;
  let fixture: ComponentFixture<ManageCityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
