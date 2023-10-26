import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecurrentNeuralNetworkComponent } from './recurrent-neural-network/recurrent-neural-network.component';

@NgModule({
  declarations: [
    AppComponent,
    RecurrentNeuralNetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
