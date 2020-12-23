import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  cliente: any = [];
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];
  
  SlideOptions = { 
    items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
	};  
  // CarouselOptions = { items: 3, dots: true, nav: true, autoplay: true, navText: [
  //   "<i class='las la-long-arrow-alt-left'></i>",
  //   "<i class='las la-long-arrow-alt-right'></i>"
  // ] };  

  constructor() { }

  ngOnInit(): void {
    this.cliente = [
      {
        id: '1',
        img: './assets/images/seo-img/client1.jpg',
        nombre: 'Yannina Ruiz',
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
      },
      {
        id: '2',
        img: './assets/images/seo-img/client2.jpg',
        nombre: 'Nelson Abellanedar',
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
      },
      {
        id: '3',
        img: './assets/images/seo-img/client3.jpg',
        nombre: 'Oscar Gomez',
        comentario: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
      }
    ]
  }

}
