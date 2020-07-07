import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';
import { SafeUrlPipe } from './safe-url/safe-url.pipe';
import { StreamCardComponent } from './stream-card/stream-card.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, IframeComponent, SafeUrlPipe, StreamCardComponent],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent, IframeComponent, SafeUrlPipe],
})
export class SharedModule {}
