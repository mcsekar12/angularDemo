import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'lazy-view',
  template: `<h3>i'm lazy</h3>`
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'lazy' });
  }
}