import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content/content.component';
const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'ngchange-io', component: ListComponent },
    { path: 'ng-content', component: ContentComponent },
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class Module1RoutingModule {}
