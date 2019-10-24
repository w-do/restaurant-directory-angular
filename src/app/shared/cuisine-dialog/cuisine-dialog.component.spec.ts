import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineDialogComponent } from './cuisine-dialog.component';

describe('AddCuisineDialogComponent', () => {
  let component: CuisineDialogComponent;
  let fixture: ComponentFixture<CuisineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
