import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLivroObtidoComponent } from './cadastrar-livro-obtido.component';

describe('CadastrarLivroObtidoComponent', () => {
  let component: CadastrarLivroObtidoComponent;
  let fixture: ComponentFixture<CadastrarLivroObtidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLivroObtidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLivroObtidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
