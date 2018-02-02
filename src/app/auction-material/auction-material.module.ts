import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatOptionModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatInputModule,
    MatSelectModule, MatOptionModule, MatCardModule, BrowserAnimationsModule]
})
export class AuctionMaterialModule {
}
