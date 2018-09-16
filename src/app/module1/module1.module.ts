import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1RoutingModule } from './module1-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

import { HomeComponent } from './home/home.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ListComponent } from './list/list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    SharedModuleModule
  ],
  declarations: [HomeComponent, ListElementComponent, ListComponent, WrapperComponent, ContentComponent]
})
export class Module1Module { }
