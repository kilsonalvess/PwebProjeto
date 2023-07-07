import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUsuarioComponent } from './criar-usuario.component';

describe('CriarUsuarioComponent', () => {
  let component: CriarUsuarioComponent;
  let fixture: ComponentFixture<CriarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarUsuarioComponent]
    });
    fixture = TestBed.createComponent(CriarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
