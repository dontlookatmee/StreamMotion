import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
