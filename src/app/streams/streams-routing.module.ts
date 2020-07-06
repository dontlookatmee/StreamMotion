import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { GameCategoriesComponent } from './game-categories/game-categories.component';
import { StreamsAllComponent } from './streams-all/streams-all.component';
import { GameStreamsComponent } from './game-categories/game-streams/game-streams.component';

const routes: Routes = [
  {
    path: '',
    component: StreamsHomeComponent,
    children: [
      {
        path: '',
        component: GameCategoriesComponent,
      },
      {
        path: 'all',
        component: StreamsAllComponent,
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
