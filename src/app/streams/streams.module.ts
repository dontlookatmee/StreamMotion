import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { StreamerMiniComponent } from './streamer-mini/streamer-mini.component';
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameStreamsComponent } from './game-streams/game-streams.component';
import { StreamFrameComponent } from './stream-frame/stream-frame.component';


@NgModule({
  declarations: [StreamsHomeComponent, SidePanelComponent, StreamerMiniComponent, GamesComponent, GameCardComponent, GameStreamsComponent, StreamFrameComponent],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
