import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {SandboxComponent} from './components/Sandbox/sandbox.component';
import { NewcomponentComponent } from './components/newcomponent/newcomponent.component';
import { DataService } from './services/data.service'


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
