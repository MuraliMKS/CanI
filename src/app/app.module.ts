import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LivePageModule } from './live-page/live-page.module';
import {LivePageComponent} from './live-page/live-page.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: AppComponent},
      {path: 'live', component: LivePageComponent}
      ]),
    LivePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
