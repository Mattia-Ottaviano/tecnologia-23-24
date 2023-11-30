import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "team/:id", component: PlayerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
