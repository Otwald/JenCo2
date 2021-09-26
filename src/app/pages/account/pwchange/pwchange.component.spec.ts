import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwchangeComponent } from './pwchange.component';

describe('PwchangeComponent', () => {
  let component: PwchangeComponent;
  let fixture: ComponentFixture<PwchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
