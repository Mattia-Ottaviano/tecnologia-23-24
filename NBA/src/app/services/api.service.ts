import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Squadre, Teams } from '../models/teams.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  baseurl: string= "https://www.balldontlie.io/api/v1/"
  getTeams(){
    return this.http.get<Squadre>(this.baseurl+"teams?per_page=100")
  }

  getTeam(id: number){
    return this.http.get<Teams>(this.baseurl + "teams/"+ id)

  }
  
}
