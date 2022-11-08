import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { LayoutRouting } from './layout.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
@NgModule({
    declarations:[LayoutComponent,HeaderComponent,SidebarComponent, SearchComponent],
    imports: [
        CommonModule,
        LayoutRouting,
        
    
    ],

})
export class LayoutModule { }  