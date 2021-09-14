import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector:'[appButton]'
})
export  class AppButtonDirective{

  constructor(
    private elementRef:ElementRef<HTMLElement>
  ){}

  
}