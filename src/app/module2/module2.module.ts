import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HomeComponent } from './home/home.component';

import { Module2RoutingModule } from './module2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    Module2RoutingModule,
    // BrowserAnimationsModule
  ],
  declarations: [HomeComponent]
})
export class Module2Module { }
