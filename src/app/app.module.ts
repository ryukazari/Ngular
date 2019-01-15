import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { InitComponent } from './component/init/init.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    InitComponent,
    MenubarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
