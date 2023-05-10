import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainOneComponent } from './pain-one.component';

describe('PainOneComponent', () => {
  let component: PainOneComponent;
  let fixture: ComponentFixture<PainOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainOneComponent]
    });
    fixture = TestBed.createComponent(PainOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
