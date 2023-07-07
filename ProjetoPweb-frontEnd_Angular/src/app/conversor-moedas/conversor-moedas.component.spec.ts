import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorMoedasComponent } from './conversor-moedas.component';

describe('ConversorMoedasComponent', () => {
  let component: ConversorMoedasComponent;
  let fixture: ComponentFixture<ConversorMoedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversorMoedasComponent]
    });
    fixture = TestBed.createComponent(ConversorMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
