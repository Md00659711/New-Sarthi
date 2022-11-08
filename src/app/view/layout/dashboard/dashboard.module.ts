import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { VoterListComponent } from './voter-list/voter-list.component';
@NgModule({
    declarations:[DashboardComponent, VoterListComponent],
    imports: [
        CommonModule,
        DashboardRouting   
    ],

})
export class DashboardModule { }  