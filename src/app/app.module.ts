import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { SuccessPageComponent } from './success-page/success-page.component';
import { CapcthaPageComponent } from './capctha-page/capctha-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessPageComponent,
    CapcthaPageComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  AppRoutingModule,
  RecaptchaModule,
  RecaptchaFormsModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: "6Lcu5lEjAAAAACfl6Z8EKHQXttzy8LxaGRLIV1eZ",
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
