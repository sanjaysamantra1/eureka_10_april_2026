import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo } from './math-demo';

describe('MathDemo', () => {
  let component: MathDemo;
  let fixture: ComponentFixture<MathDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MathDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify add function', () => {
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(10, -20)).toBe(-10);
  });

  it('should verify isEven function', () => {
    expect(component.isEVen(4)).toBe(true);
    expect(component.isEVen(5)).toBe(false);
  });

});
