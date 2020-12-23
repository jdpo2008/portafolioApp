import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../@core/core.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [CoreModule]
})
export class PagesModule { }
