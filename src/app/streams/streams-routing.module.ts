import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { GameCategoriesComponent } from './game-categories/game-categories.component';
import { StreamsAllComponent } from './streams-all/streams-all.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {}
