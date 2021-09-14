import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
  selector:'[appIf]'
})
export class AppIf{
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef,
  ){}

  @Input()
  set appIf(condition:boolean){
     if(condition){
       this.viewContainerRef.createEmbeddedView(this.templateRef);
     }else{
       this.viewContainerRef.clear();
     }
  }
}