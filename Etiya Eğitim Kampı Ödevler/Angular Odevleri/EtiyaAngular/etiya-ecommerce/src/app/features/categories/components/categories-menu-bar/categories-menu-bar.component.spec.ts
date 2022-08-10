import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMenuBarComponent } from './categories-menu-bar.component';

describe('CategoriesMenuBarComponent', () => {
  let component: CategoriesMenuBarComponent;
  let fixture: ComponentFixture<CategoriesMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
