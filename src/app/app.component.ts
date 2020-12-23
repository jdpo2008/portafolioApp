import { Component, HostListener, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private wowService: NgwWowService) {
  }
  title = 'portafolioApp';

  @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        //const scrollTop = event.target.scrollTop;
        //const parentOffset = event.target.offsetTop;
        
    }

  ngOnInit(): void {
    //this.wowService.init();
  }

  onSectionChange(event: any) {
    console.log(event)
  }

}
