import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GamesService} from '../../services/games.service'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];
  
  constructor(private gamesService: GamesService) { }

  ngOnInit(){
   this.gamesService.getGames().subscribe(
     res => {
    this.games = res; 
    console.log(res)
    },
     err=> console.error(err)
   ) 
  }

}
