import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MyserviceService} from './myservice.service'
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import {HttpModule} from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewComponentComponent
      }
   ]),
   HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
