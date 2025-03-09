import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeButtonComponent } from './poke-button.component';

describe('PokeButtonComponent', () => {
  let component: PokeButtonComponent;
  let fixture: ComponentFixture<PokeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
