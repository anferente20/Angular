import { Component, OnInit } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroeInterface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroes: HeroeInterface[] = [];
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}
