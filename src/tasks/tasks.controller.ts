import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity'

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Task {
        return this.tasksService.findOne(id);
    }

    @Post()
    create(@Body() createTaskDto: Partial<Task>): Task {
        return this.tasksService.create(createTaskDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateTaskDto: Partial<Task>): Task {
        return this.tasksService.update(id, updateTaskDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): void {
        this.tasksService.delete(id);
    }
}
