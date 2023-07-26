import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservenowComponent } from './reservenow.component';

describe('ReservenowComponent', () => {
  let component: ReservenowComponent;
  let fixture: ComponentFixture<ReservenowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservenowComponent]
    });
    fixture = TestBed.createComponent(ReservenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
