import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AuthGuardService } from './shared/auth-guard.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentBubbleSortComponent } from './content-bubble-sort/content-bubble-sort.component';
import { ContentQuickSortComponent } from './content-quick-sort/content-quick-sort.component';
import { ContentCoctailSortComponent } from './content-coctail-sort/content-coctail-sort.component';
import { ContentMergeSortComponent } from './content-merge-sort/content-merge-sort.component';
import { ContentInsertSortComponent } from './content-insert-sort/content-insert-sort.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders} from "./routing";
//import {AuthService} from "./auth.service";




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentBubbleSortComponent,
    ContentQuickSortComponent,
    ContentCoctailSortComponent,
    ContentMergeSortComponent,
    ContentInsertSortComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [AuthGuardService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
