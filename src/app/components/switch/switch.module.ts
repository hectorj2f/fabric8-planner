import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SwitchComponent
  ],
  providers: [],
  exports: [SwitchComponent]
})
export class SwitchModule { }
