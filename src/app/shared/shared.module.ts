import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';
import { SafeUrlPipe } from './safe-url/safe-url.pipe';
import { StreamCardComponent } from './stream-card/stream-card.component';
import { ImageRenderPipe } from './pipes/ImageRender/image-render.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    IframeComponent,
    SafeUrlPipe,
    StreamCardComponent,
    ImageRenderPipe,
  ],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    InputComponent,
    IframeComponent,
    SafeUrlPipe,
    StreamCardComponent,
    ImageRenderPipe,
  ],
})
export class SharedModule {}
