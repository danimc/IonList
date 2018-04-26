import { NgModule } from '@angular/core';
import { PrioritizedTodosPipe } from './prioritized-todos/prioritized-todos';
import { DoneTodosPipe } from './done-todos/done-todos';
@NgModule({
	declarations: [PrioritizedTodosPipe,
    DoneTodosPipe],
	imports: [],
	exports: [PrioritizedTodosPipe,
    DoneTodosPipe]
})
export class PipesModule {}
