import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositarComponent } from './depositar.component';

describe('DepositarComponent', () => {
  let component: DepositarComponent;
  let fixture: ComponentFixture<DepositarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositarComponent]
    });
    fixture = TestBed.createComponent(DepositarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
