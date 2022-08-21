import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {CreateFakeArrayPipe} from './pipes/create-fake-array.pipe';
import {LoadingOverlayComponent} from './components/loading-overlay/loading-overlay.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoadingInterceptor} from './interceptors/loading-interceptor/loading-interceptor.interceptor';
import {StorageModule} from './storage/storage.module';
import {LoginComponent} from './auth/pages/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {LocalStorageService} from './storage/services/local-storage.service';
import {StorageService} from './storage/services/storageService';

export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000'],
  };
}

@NgModule({
  declarations: [CreateFakeArrayPipe, LoadingOverlayComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StorageModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ],
  exports: [CreateFakeArrayPipe, LoadingOverlayComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
  ],
})
export class CoreModule {}
