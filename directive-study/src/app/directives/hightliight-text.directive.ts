import { Directive, ElementRef, OnInit, ViewContainerRef } from "@angular/core";

// without selector: '[highlight]' it is custom component
@Directive({
  selector:'highlight'
})
export class HighlightTextDirective implements OnInit{

  constructor(
    private elementRef:ElementRef<HTMLElement>,
  ){}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.color="white";
    this.elementRef.nativeElement.style.padding='10px'
  }


}