import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDirectives } from './ng-directives';

describe('NgDirectives', () => {
  let component: NgDirectives;
  let fixture: ComponentFixture<NgDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(NgDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
