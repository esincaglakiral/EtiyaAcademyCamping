import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {CreateFakeArrayPipe} from './pipes/create-fake-array.pipe';
import {StorageModule} from './storage/storage.module';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {LocalStorageService} from './storage/services/local-storage.service';
import {StorageService} from './storage/services/storageService';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';

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
  declarations: [CreateFakeArrayPipe, LoadingPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ],
  exports: [CreateFakeArrayPipe, LoadingPageComponent],

})
export class CoreModule {}
