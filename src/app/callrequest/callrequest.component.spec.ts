import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallrequestComponent } from './callrequest.component';

describe('CallrequestComponent', () => {
  let component: CallrequestComponent;
  let fixture: ComponentFixture<CallrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallrequestComponent]
    });
    fixture = TestBed.createComponent(CallrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
