import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDesejoComponent } from './livro-desejo.component';

describe('LivroDesejoComponent', () => {
  let component: LivroDesejoComponent;
  let fixture: ComponentFixture<LivroDesejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroDesejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDesejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
