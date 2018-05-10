export class TodoModel{
    constructor(
        public description:string,
        public listId: number ,
        public isImportant:boolean = false,
        public isDone:boolean = false,
        public id:number = 0
    ){}

    static clone( todo: TodoModel) {
        return new TodoModel(todo.description, todo.listId, todo.isImportant, todo.isDone, todo.id);
    }

    static fromJson(data:any) {
        console.log("datos = ", data);
        if(!data.description || ! data.id || ! data.listId){
            throw(new Error("Argumento invalido: la estructura del argumento no corresponde con este modelo de datos"));
        }

        return new TodoModel(data.description, data.listId, data.isImportant,data.isDone, data.id);
    }
}