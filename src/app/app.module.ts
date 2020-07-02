import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitchInterceptor } from './interceptors/twitch.interceptor';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TwitchInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
