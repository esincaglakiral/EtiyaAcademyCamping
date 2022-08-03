import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickProductCard]'
})
export class ClickProductCardDirective {
  @Input() inOnClick:boolean = true;

  constructor(private elementRef:ElementRef) { }

  @HostListener('click',) onClick(){
    if(this.inOnClick) return;
    this.elementRef.nativeElement.style.opacity = 0.7;

  }

  @HostListener('dblclick',) onDblClick(){
    this.elementRef.nativeElement.style.opacity = 1;
  }

}