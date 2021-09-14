import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


@Directive({
  selector:'[appTitle]'
})
export class TitleDirective{
    constructor(
      private elementRef:ElementRef<HTMLElement>,
      private renderer:Renderer2,
    ){}

    @Input() set appTitle(color:string){
      this.renderer.setStyle(this.elementRef.nativeElement,'color',color);
    }
}