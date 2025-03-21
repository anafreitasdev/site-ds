import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicButtonComponent } from './magic-button.component';

describe('MagicButtonComponent', () => {
  let component: MagicButtonComponent;
  let fixture: ComponentFixture<MagicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
