import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongitudinalViewerComponent } from './longitudinal-viewer/longitudinal-viewer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatExpansionModule} from '@angular/material';
import { PlotlyModule} from 'angular-plotly.js';
// import {MatCardModule} from '@angular/material';
// import {MatCardModule} from '@angular/material/typings/card';
// import {MatCardModule} from '@angular/material/typings/esm5/card';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LongitudinalViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 //   MatExpansionModule,
    PlotlyModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
