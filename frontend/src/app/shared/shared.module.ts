import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseComponent } from './close/close.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CloseComponent],
  exports: [CloseComponent]
})
export class SharedModule { }
