import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesUpdateComponent } from './services-update.component';

describe('ServicesUpdateComponent', () => {
  let component: ServicesUpdateComponent;
  let fixture: ComponentFixture<ServicesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
