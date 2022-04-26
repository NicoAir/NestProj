import { Controller, Delete, Get, Post, Put} from '@nestjs/common';

@Controller('todo')
export class TodoController {

    @Get()
    getTodos(
    ) {
        console.log('Récuperer la liste des todos');
        return 'List des TODOS';
    }

    @Post()
    postTodos() {
        console.log('Ajouter un Todo à la liste des todos');
        return 'Add TODO';
    }

    @Delete()
    deleteTodo(){
        console.log('Supprimer un Todo de la liste des todos');
        return 'Delete TODO'
    }

    @Put()
    putTodo(){
        console.log('Modifier un Todo de la liste des todos')
        return 'Update TODO'
    }
}
