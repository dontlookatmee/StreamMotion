import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}
