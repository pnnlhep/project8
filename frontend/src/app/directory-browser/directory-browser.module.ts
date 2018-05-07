import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { DirectoryBrowserService } from './services/directory-browser.service';
import { DirectoryBrowserComponent } from './directory-browser.component';
import { FileExtensionFilterComponent } from './file-extension-filter/file-extension-filter.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [DirectoryBrowserComponent, FileExtensionFilterComponent, FilterResultComponent, FileViewerComponent],
  exports: [DirectoryBrowserComponent],
  providers: [DirectoryBrowserService]
})
export class DirectoryBrowserModule {

  constructor(@Optional() @SkipSelf() parentModule: DirectoryBrowserModule) {
    if (parentModule)
      throw new Error('FileBrowserModule is already loaded. Import it in the AppModule only');
  }

  static forRoot(): ModuleWithProviders {
    return {
      providers: [DirectoryBrowserService],
      ngModule: DirectoryBrowserModule
    };
  }
}
