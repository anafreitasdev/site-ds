import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesPageComponent } from './principles-page.component';

describe('PrinciplesPageComponent', () => {
  let component: PrinciplesPageComponent;
  let fixture: ComponentFixture<PrinciplesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrinciplesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrinciplesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
