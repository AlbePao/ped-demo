import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [CommonModule, SharedModule],
})
export class BookingModule {}
