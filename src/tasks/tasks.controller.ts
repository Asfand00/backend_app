import { Controller, Get, Post, Body, Param, Put, Delete, Logger } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
    private readonly logger = new Logger(TasksController.name);

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll(): Task[] {
        this.logger.log('findAll endpoint triggered');
        return this.tasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Task {
        this.logger.log(`findOne endpoint triggered with id ${id}`);
        return this.tasksService.findOne(+id);
    }

    @Post()
    create(@Body() createTaskDto: Partial<Task>): Task {
        this.logger.log('create endpoint triggered');
        return this.tasksService.create(createTaskDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateTaskDto: Partial<Task>): Task {
        this.logger.log(`update endpoint triggered with id ${id}`);
        return this.tasksService.update(+id, updateTaskDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): void {
        this.logger.log(`delete endpoint triggered with id ${id}`);
        this.tasksService.delete(+id);
    }
}
