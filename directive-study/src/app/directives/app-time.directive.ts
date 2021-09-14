import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[appTime]'
})
export class AppTime{

  constructor(
    private templeRef:TemplateRef<any>,
    private viewContainerRef:ViewContainerRef,
  ){}

  @Input('appTime') set render(times:number){
    this.viewContainerRef.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templeRef,{
        index:i,
      });  
    }
  }
}