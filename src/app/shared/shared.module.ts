import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, IframeComponent],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent, IframeComponent],
})
export class SharedModule {}
