import { Component, OnInit } from '@angular/core';
import { HeroesService} from '../../services/heroes.service';
import { HeroeInterface } from '../interfaces/heroeInterface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // Defino una variable de tipo heroesInterface
  heroes: HeroeInterface[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}
