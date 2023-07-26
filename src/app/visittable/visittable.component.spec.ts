import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisittableComponent } from './visittable.component';

describe('VisittableComponent', () => {
  let component: VisittableComponent;
  let fixture: ComponentFixture<VisittableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisittableComponent]
    });
    fixture = TestBed.createComponent(VisittableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
