import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyFormComponent } from './verify-form.component';

describe('VerifyFormComponent', () => {
  let component: VerifyFormComponent;
  let fixture: ComponentFixture<VerifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
