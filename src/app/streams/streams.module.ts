import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { StreamerMiniComponent } from './streamer-mini/streamer-mini.component';
import { GamesComponent } from './games/games.component';
import { GameCardComponent } from './game-card/game-card.component';


@NgModule({
  declarations: [StreamsHomeComponent, SidePanelComponent, StreamerMiniComponent, GamesComponent, GameCardComponent],
  imports: [
    CommonModule,
    StreamsRoutingModule
  ]
})
export class StreamsModule { }
