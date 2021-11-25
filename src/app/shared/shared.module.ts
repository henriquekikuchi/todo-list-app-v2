import { DirectiveModule } from './../directive/directive.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    DirectiveModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class SharedModule { }
