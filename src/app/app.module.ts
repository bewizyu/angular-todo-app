import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodosContainerComponent} from './todo/components/todos-container/todos-container.component';
import {NgMatModule} from './ng-mat-module/ng-mat.module';
import {TodosListComponent} from './todo/components/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/components/todos-item/todos-item.component';
import { TodosFormComponent } from './todo/components/todos-form/todos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosContainerComponent,
    TodosListComponent,
    TodosItemComponent,
    TodosFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMatModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
