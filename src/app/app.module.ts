import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ListsPage } from '../pages/lists/lists';
import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { AddTaskModalPage } from '../pages/add-task-modal/add-task-modal';
import { TodoServiceProvider } from '../shared/todo-service';
import { IonicStorageModule } from '@ionic/storage';
import { PrioritizedTodosPipe } from '../pipes/prioritized-todos/prioritized-todos';
import { DoneTodosPipe } from '../pipes/done-todos/done-todos';
import { ListServiceProvider } from '../shared/list-service';


@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    ListsPage,
    DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider,
    ListServiceProvider
  ]
})
export class AppModule {}
