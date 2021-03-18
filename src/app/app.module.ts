import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxSummernoteModule} from 'ngx-summernote';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SummernoteDirective} from './summernote.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummernoteDirective
  ],
  imports: [
    BrowserModule,
    NgxSummernoteModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
