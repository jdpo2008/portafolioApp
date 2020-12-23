import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';


@NgModule({
  declarations: [ScrollSpyDirective],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [ComponentsModule, ScrollSpyDirective]
})
export class CoreModule { }
