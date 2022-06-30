import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLivroDesejoComponent } from './mostrar-livro-desejo.component';

describe('MostrarLivroDesejoComponent', () => {
  let component: MostrarLivroDesejoComponent;
  let fixture: ComponentFixture<MostrarLivroDesejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLivroDesejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLivroDesejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
