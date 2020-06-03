import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cursos = [
    {nombre : 'Angular', estado: false, img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'},
    {nombre : 'Java', estado: false, img : 'https://i.blogs.es/e7b69c/java_logo/1366_2000.png'},
    {nombre : 'Python', estado: false, img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'}
  ];
  inscrito = false;
  constructor() { }
  inscribirse(): void{
    if (this.inscrito === false) {
      this.inscrito = true;
    } else {
      this.inscrito = false;
    }
  }
  ngOnInit(): void {
  }

}
