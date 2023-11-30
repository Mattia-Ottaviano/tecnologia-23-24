import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from '../models/teams.model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  obs!:Observable<Teams>
  data!: Teams

  constructor(public api: ApiService, public route:ActivatedRoute) {
    this.route.params.subscribe(p=>{
      this.obs = this.api.getTeam(p["id"])
      this.obs.subscribe(this.dosomething)
    })
  }

  dosomething = (data: Teams) => {
    this.data = data;
    console.log(this.data)
  }
}
