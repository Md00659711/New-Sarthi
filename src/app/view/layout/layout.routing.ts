import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import { AuthenticationGuard } from "src/app/authguard/authentication.guard";

const route: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate:[AuthenticationGuard],
        canActivateChild:[AuthenticationGuard],    
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class LayoutRouting { }