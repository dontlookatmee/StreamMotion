import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {
    path: '',
    component: StreamsHomeComponent,
    children: [
      {
        path: '',
        component: GamesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {}
