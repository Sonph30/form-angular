import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginloguotComponent } from './loginloguot.component';

describe('LoginloguotComponent', () => {
  let component: LoginloguotComponent;
  let fixture: ComponentFixture<LoginloguotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginloguotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginloguotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
