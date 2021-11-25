import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.backgroundColor = "#c159b69e";

   }

}
