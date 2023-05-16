import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainCreateComponent } from './pain-create.component';

describe('PainCreateComponent', () => {
  let component: PainCreateComponent;
  let fixture: ComponentFixture<PainCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainCreateComponent]
    });
    fixture = TestBed.createComponent(PainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
