import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor(private activedR: ActivatedRoute, private heroesS: HeroesService) {
    this.activedR.params.subscribe(data => {
      this.heroe = this.heroesS.getHeroe(data.id);
    });
  }


  ngOnInit(): void {
  }

}
