import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfStatements } from './if-statements';

describe('IfStatements', () => {
  let component: IfStatements;
  let fixture: ComponentFixture<IfStatements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfStatements],
    }).compileComponents();

    fixture = TestBed.createComponent(IfStatements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
