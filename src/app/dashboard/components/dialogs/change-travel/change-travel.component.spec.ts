import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTravelComponent } from './change-travel.component';

describe('ChangeTravelComponent', () => {
  let component: ChangeTravelComponent;
  let fixture: ComponentFixture<ChangeTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
