import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // ele instance of ElementRef class
  constructor(private ele: ElementRef) {
    console.log(ele.nativeElement)
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,130%)'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
