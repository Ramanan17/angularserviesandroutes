import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {SandboxComponent} from './components/Sandbox/sandbox.component';
import {RouterModule,Routes} from '@angular/router';
import { DataService } from './services/data.service'
import {HttpModule} from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from './components/user-details/user-details.component'

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user/:id',component:UserDetailsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    UserDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
