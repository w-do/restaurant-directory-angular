import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCuisinesDialogComponent } from './manage-cuisines-dialog.component';

describe('ManageCuisinesDialogComponent', () => {
  let component: ManageCuisinesDialogComponent;
  let fixture: ComponentFixture<ManageCuisinesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCuisinesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCuisinesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
