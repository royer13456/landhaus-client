import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TortasFormComponent } from './components/tortas-form/tortas-form.component';
import { TortasListComponent } from './components/tortas-list/tortas-list.component';

import { TortasService }  from  './services/tortas.service';
import { FiltroTortasPipe } from './pipes/filtro-tortas.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TortasFormComponent,
    TortasListComponent,
    FiltroTortasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    TortasService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
