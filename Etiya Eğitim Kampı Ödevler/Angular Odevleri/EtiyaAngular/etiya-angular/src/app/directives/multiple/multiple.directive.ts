import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class MultipleDirective {

  @Input() appMultipleOf!: Array<any>;
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  @Input() set appMultiple(value : number ){
    this.container.clear();
    
    for (let index = 0; index < value; index++) {      
      this.container.createEmbeddedView(this.template)
    }
  }

}
