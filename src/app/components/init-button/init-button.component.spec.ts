import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitButtonComponent } from './init-button.component';

describe('InitButtonComponent', () => {
  let component: InitButtonComponent;
  let fixture: ComponentFixture<InitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
