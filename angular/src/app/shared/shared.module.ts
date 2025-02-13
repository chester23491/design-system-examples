import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  BalButtonModule,
  BalCardModule,
  BalCheckboxModule,
  BalDatepickerModule,
  BalFieldModule,
  BalFooterModule,
  BalHeadingModule,
  BalInputModule,
  BalLogoModule,
  BalNavbarModule,
  BalRadioModule,
  BalSelectModule,
  BalStageModule, BalTabsModule,
  BalToastModule,
} from '@baloise/design-system-components-angular';

const commonModules = [
  /**
   * Angular Modules
   */
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  /**
   * Design System Modules
   */
  BalFieldModule,
  BalInputModule,
  BalSelectModule,
  BalHeadingModule,
  BalButtonModule,
  BalFooterModule,
  BalNavbarModule,
  BalLogoModule,
  BalStageModule,
  BalCardModule,
  BalToastModule,
  BalCheckboxModule,
  BalRadioModule,
  BalDatepickerModule,
  BalTabsModule
];

@NgModule({
  declarations: [],
  imports: [...commonModules],
  exports: [...commonModules],
})
export class SharedModule {
}
