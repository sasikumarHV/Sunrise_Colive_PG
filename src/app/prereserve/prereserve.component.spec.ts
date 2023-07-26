import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrereserveComponent } from './prereserve.component';

describe('PrereserveComponent', () => {
  let component: PrereserveComponent;
  let fixture: ComponentFixture<PrereserveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrereserveComponent]
    });
    fixture = TestBed.createComponent(PrereserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
