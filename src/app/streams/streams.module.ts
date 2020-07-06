import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsRoutingModule } from './streams-routing.module';
import { StreamsHomeComponent } from './streams-home/streams-home.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { GameCardComponent } from './game-categories/game-card/game-card.component';
import { StreamerMiniComponent } from './side-panel/streamer-mini/streamer-mini.component';
import { GameCategoriesComponent } from './game-categories/game-categories.component';
import { StreamsAllComponent } from './streams-all/streams-all.component';
import { RenderGameImagePipe } from './pipes/render-game-image.pipe';

@NgModule({
  declarations: [
    StreamsHomeComponent,
    SidePanelComponent,
    GameCardComponent,
    StreamerMiniComponent,
    GameCategoriesComponent,
    StreamsAllComponent,
    RenderGameImagePipe,
  ],
  imports: [CommonModule, StreamsRoutingModule],
})
export class StreamsModule {}
