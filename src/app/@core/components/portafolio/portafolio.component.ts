import { Component, OnInit } from '@angular/core';
import { IStudyCard } from '../../interfaces/study.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  studyCard: IStudyCard[] = [];

  constructor() { 
    this.studyCard = [
      {
        src: './assets/images/portfolio/SDIO.png',
        title: 'Estrategias de Negocios',
        href: 'https://b2bsdio.valtx.pe/SDIO/Seguridad/Login',
        description: 'Solución completa para la empresa Telefonica del Perú, utilizando .net Framework y diseño MVC con AngularJs en arquitectura N Capas.'
      },
      {
        src: './assets/images/portfolio/InnovacionesJD.jpg',
        title: 'Diseño Web',
        href: 'https://www.innovacionesjd.com',
        description: 'Pagina Web utilizando Angular 10 con integracion a Firebase, Google Maps y servicio de Busqueda de dominios en PHP.'
      },
      {
        src: './assets/images/seo-img/case-study3.jpg',
        title: 'Web Development',
        href: '#',
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.'
      },
      {
        src: './assets/images/seo-img/case-study4.jpg',
        title: 'App Development',
        href: '#',
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.'
      },
      {
        src: './assets/images/seo-img/case-study5.jpg',
        title: 'Digital Marketing',
        href: '#',
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.'
      },
      {
        src: './assets/images/seo-img/case-study6.jpg',
        title: 'App Design',
        href: '#',
        description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the.'
      }
    ]
  }

  ngOnInit(): void {
  }

}
