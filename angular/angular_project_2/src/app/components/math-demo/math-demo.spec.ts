import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo } from './math-demo';

describe('MathDemo', () => {
  let component: MathDemo;
  let fixture: ComponentFixture<MathDemo>;
  let time;

  beforeAll(() => {
    time = new Date().toLocaleTimeString();
    console.log('Before All...'); // called only once, initialize variable once
  });

  beforeEach(async () => {
    console.log('Before Each...'); // before Every it()
    await TestBed.configureTestingModule({
      imports: [MathDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MathDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    console.log('After Each...'); // after every it()
  });

  afterAll(() => {
    console.log('After All'); // once, after all the it() are executed
  });

  it('should create', () => {
    console.log('It-1');
    expect(component).toBeTruthy();
  });

  it('should verify add function', () => {
    console.log('It-2');
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(10, -20)).toBe(-10);
  });

  it('should verify isEven function', () => {
    console.log('It-3');
    expect(component.isEVen(4)).toBe(true);
    expect(component.isEVen(4)).not.toBe(false);

    expect(component.isEVen(5)).toBe(false);
    expect(component.isEVen(5)).not.toBe(true);
  });

  it('should verify sumOfDigits function', () => {
    console.log('It-4');
    expect(component.sumOfDigits(125)).toBe(8);
  });
});
