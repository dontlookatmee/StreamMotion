import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { GamesComponent } from './games/games.component';
import { GameStreamsComponent } from './game-streams/game-streams.component';

const routes: Routes = [
  {
    path: '',
    component: StreamsHomeComponent,
    children: [
      {
        path: '',
        component: GamesComponent,
      },
      {
        path: ':id',
        component: GameStreamsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {}
