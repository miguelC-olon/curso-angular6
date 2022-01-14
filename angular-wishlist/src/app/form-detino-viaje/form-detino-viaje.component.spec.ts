import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetinoViajeComponent } from './form-detino-viaje.component';

describe('FormDetinoViajeComponent', () => {
  let component: FormDetinoViajeComponent;
  let fixture: ComponentFixture<FormDetinoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetinoViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetinoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
