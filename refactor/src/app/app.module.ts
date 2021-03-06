import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes'
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    UsersModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
