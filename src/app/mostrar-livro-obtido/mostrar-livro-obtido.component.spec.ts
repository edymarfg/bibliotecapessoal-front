import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLivroObtidoComponent } from './mostrar-livro-obtido.component';

describe('MostrarLivroObtidoComponent', () => {
  let component: MostrarLivroObtidoComponent;
  let fixture: ComponentFixture<MostrarLivroObtidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLivroObtidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLivroObtidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
