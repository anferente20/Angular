import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cursos = [
    {nombre : 'Angular', img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'},
    {nombre : 'Java', img : 'https://i.blogs.es/e7b69c/java_logo/1366_2000.png'},
    {nombre : 'Python', img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
