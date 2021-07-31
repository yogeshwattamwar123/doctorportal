import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './common-components/sign-in/sign-in.component';
import { SignUpComponent } from './common-components/sign-up/sign-up.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { CommonPannelComponent } from './common-components/common-pannel/common-pannel.component';
import { ContentComponent } from './common-components/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidationsService } from './services/validations.service';
import { LeftPannelComponent } from './common-components/left-pannel/left-pannel.component';
import { RightPannelComponent } from './common-components/right-pannel/right-pannel.component';
import { AddnewpatientsComponent } from './web-components/addnewpatients/addnewpatients.component';
import { PatientsDetailsComponent } from './web-components/patients-details/patients-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    CommonPannelComponent,
    ContentComponent,
    LeftPannelComponent,
    RightPannelComponent,
    AddnewpatientsComponent,
    PatientsDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [ValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
