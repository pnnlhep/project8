import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectoryBrowserComponent } from './directory-browser/directory-browser.component';

const ROUTES: Routes = [
  {
    path: 'directory/listings',
    component: DirectoryBrowserComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
