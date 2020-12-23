import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';  
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalComponent } from './personal/personal.component';
import { InformationComponent } from './information/information.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { FactsComponent } from './facts/facts.component';
import { ChooseComponent } from './choose/choose.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, PersonalComponent, InformationComponent, IntroComponent, ServicesComponent, FactsComponent, ChooseComponent, PortafolioComponent, TestimonialsComponent, ContactComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CarouselModule,
    OwlModule
  ],
  exports: [ReactiveFormsModule, NavbarComponent, FooterComponent, PersonalComponent, InformationComponent, IntroComponent, ServicesComponent, FactsComponent, ChooseComponent, PortafolioComponent, TestimonialsComponent, ContactComponent],
})
export class ComponentsModule { }
