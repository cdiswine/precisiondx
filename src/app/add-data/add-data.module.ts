import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddDataService } from './add-data.service';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const appRoutes: Routes = [
  { path: 'add-data', component: AddDataComponent, data: { page: 'add-data' } },
];

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
     DropzoneModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AddDataComponent,
  ],
  declarations: [AddDataComponent],
  providers: [
    AddDataService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class AddDataModule {}
