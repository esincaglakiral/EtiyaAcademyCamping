import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { CoreModule } from './core/core.module';
import { StorageModule } from './core/storage/storage.module';
import { AuthModule } from './core/auth/auth.module';
import { LoadingInterceptor } from './core/interceptors/loading/loading.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    // AuthModule,
    // StorageModule,
    

    
  ],
  providers: [MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
