import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsHomeComponent } from './streams-home/streams-home.component';

const routes: Routes = [
  {
    path: '',
    component: StreamsHomeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamsRoutingModule {}
