import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroObtidoComponent } from './livro-obtido.component';

describe('LivroObtidoComponent', () => {
  let component: LivroObtidoComponent;
  let fixture: ComponentFixture<LivroObtidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroObtidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroObtidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
