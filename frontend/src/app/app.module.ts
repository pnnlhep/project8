import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { DirectoryBrowserModule } from './directory-browser/directory-browser.module';
import { AppComponent } from './app.component';
import { WaitComponent } from './wait/wait.component';
// import { parentReducer } from './root-reducers';
// import { INITIAL_STATE } from './models/app-state';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WaitComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule,
    SharedModule,
    HttpModule,
    DirectoryBrowserModule.forRoot(),
    AppRoutingModule
    // StoreModule.forRoot(parentReducer, { initialState: INITIAL_STATE }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
