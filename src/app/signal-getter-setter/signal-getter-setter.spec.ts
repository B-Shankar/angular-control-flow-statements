import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalGetterSetter } from './signal-getter-setter';

describe('SignalGetterSetter', () => {
  let component: SignalGetterSetter;
  let fixture: ComponentFixture<SignalGetterSetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalGetterSetter],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalGetterSetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
