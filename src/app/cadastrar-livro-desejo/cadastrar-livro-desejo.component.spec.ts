import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLivroDesejoComponent } from './cadastrar-livro-desejo.component';

describe('CadastrarLivroDesejoComponent', () => {
  let component: CadastrarLivroDesejoComponent;
  let fixture: ComponentFixture<CadastrarLivroDesejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLivroDesejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLivroDesejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
