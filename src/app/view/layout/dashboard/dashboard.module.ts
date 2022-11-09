import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
    declarations:[DashboardComponent],
    imports: [
        CommonModule,
        DashboardRouting   
    ],

})
export class DashboardModule { }  