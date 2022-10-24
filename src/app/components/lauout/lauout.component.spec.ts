import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauoutComponent } from './lauout.component';

describe('LauoutComponent', () => {
  let component: LauoutComponent;
  let fixture: ComponentFixture<LauoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LauoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
