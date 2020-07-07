import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { GameCardComponent } from './game-categories/game-card/game-card.component';
import { StreamerMiniComponent } from './side-panel/streamer-mini/streamer-mini.component';
import { GameCategoriesComponent } from './game-categories/game-categories.component';
import { StreamsAllComponent } from './streams-all/streams-all.component';
import { GameStreamsComponent } from './game-categories/game-streams/game-streams.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StreamsHomeComponent,
    SidePanelComponent,
    GameCardComponent,
    StreamerMiniComponent,
    GameCategoriesComponent,
    StreamsAllComponent,
    GameStreamsComponent,
  ],
  imports: [
    CommonModule,
    StreamsRoutingModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class StreamsModule {}
