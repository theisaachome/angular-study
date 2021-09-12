import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerAndExponentComponent } from './power-and-exponent.component';

describe('PowerAndExponentComponent', () => {
  let component: PowerAndExponentComponent;
  let fixture: ComponentFixture<PowerAndExponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerAndExponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerAndExponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
