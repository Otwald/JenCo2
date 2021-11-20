import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeblocksComponent } from './timeblocks.component';

describe('TimeblocksComponent', () => {
  let component: TimeblocksComponent;
  let fixture: ComponentFixture<TimeblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeblocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
