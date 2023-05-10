import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainAllComponent } from './pain-all.component';

describe('PainAllComponent', () => {
  let component: PainAllComponent;
  let fixture: ComponentFixture<PainAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainAllComponent]
    });
    fixture = TestBed.createComponent(PainAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
