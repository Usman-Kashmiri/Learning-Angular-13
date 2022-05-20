import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[myTheme]'
})
export class CustomBgDirectivesDirective implements AfterViewInit {
  @Input() tsize: string;
  @Input() tcolor: string;
  @Input() bcolor: string;
  constructor(private elRef: ElementRef) {
    this.tcolor = '';
    this.bcolor = '';
    this.tsize = '';
  }
  ngAfterViewInit(): void {
    this.tcolor = this.tcolor || 'green';
	  this.bcolor = this.bcolor || 'cyan';
	  this.tsize = this.tsize || '1.5rem';
    this.elRef.nativeElement.style.color = this.tcolor;
    this.elRef.nativeElement.style.backgroundColor = this.bcolor;
    this.elRef.nativeElement.style.fontSize = this.tsize;
  }
}
