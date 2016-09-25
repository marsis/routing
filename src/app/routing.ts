import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from "./shared/auth-guard.service";


import {HomeComponent} from "./home/home.component";
import {ContentBubbleSortComponent} from "./content-bubble-sort/content-bubble-sort.component";
import {ContentQuickSortComponent} from "./content-quick-sort/content-quick-sort.component";
import {ContentCoctailSortComponent} from "./content-coctail-sort/content-coctail-sort.component";
import {ContentMergeSortComponent} from "./content-merge-sort/content-merge-sort.component";
import {ContentInsertSortComponent} from "./content-insert-sort/content-insert-sort.component";





const  routes= [
    { path: '',  redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'bubble-sort', component: ContentBubbleSortComponent,canActivate: [AuthGuardService]},
    { path: 'quick-sort', component:ContentQuickSortComponent, canActivate: [AuthGuardService] },
    { path: 'coctail-sort', component: ContentCoctailSortComponent, canActivate: [AuthGuardService]},
    { path: 'merge-sort', component: ContentMergeSortComponent, canActivate: [AuthGuardService]},
    { path: 'insert-sort', component: ContentInsertSortComponent, canActivate: [AuthGuardService]},

]

export const appRoutingProviders: any = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);