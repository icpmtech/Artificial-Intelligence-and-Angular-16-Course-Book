import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatbotService } from './dialogflow.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatInterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
