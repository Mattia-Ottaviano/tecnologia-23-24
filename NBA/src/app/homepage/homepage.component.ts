import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Squadre } from '../models/teams.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  obs!:Observable<Squadre>
  data!:Squadre

  constructor(public api: ApiService) {
    this.obs = this.api.getTeams() //?per_page=100 come specificato nella documentazione serve a far vedere più elementi per ogni pagina
    this.obs.subscribe(this.dosomething)

  }

  dosomething = (data: Squadre) => {
    this.data = data;
    console.log(this.data)
  }
}
