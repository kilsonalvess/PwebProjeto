import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeLoginComponent } from './tela-de-login.component';

describe('TelaDeLoginComponent', () => {
  let component: TelaDeLoginComponent;
  let fixture: ComponentFixture<TelaDeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaDeLoginComponent]
    });
    fixture = TestBed.createComponent(TelaDeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
