import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './storage/services/storageService';
import { AuthModule } from './auth/auth.module';

export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000'],
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule,
  ],
  providers : [
    {provide: HTTP_INTERCEPTORS, useClass : LoadingInterceptor, multi : true}
  ]
})
export class CoreModule { }
