import { NgModule } from '@angular/core';
import { PrioritizedTodosPipe } from './prioritized-todos/prioritized-todos';
@NgModule({
	declarations: [PrioritizedTodosPipe],
	imports: [],
	exports: [PrioritizedTodosPipe]
})
export class PipesModule {}
