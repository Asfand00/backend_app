// tasks.service.ts

import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { Task } from './tasks.interface';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description 1', done: false },
        { id: 2, title: 'Task 2', description: 'Description 2', done: true },
    ];
    private nextId = 3;
    private readonly logger = new Logger(TasksService.name);

    findAll(): Task[] {
        this.logger.log('Fetching all tasks');
        return this.tasks;
    }

    findOne(id: number): Task {
        this.logger.log(`Fetching task with ID ${id}`);
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    create(task: Partial<Task>): Task {
        this.logger.log(`Creating task: ${JSON.stringify(task)}`);
        const newTask = { ...task, id: this.nextId++, done: false } as Task;
        this.tasks.push(newTask);
        return newTask;
    }

    update(id: number, updateTaskDto: Partial<Task>): Task {
        this.logger.log(`Updating task with ID ${id}: ${JSON.stringify(updateTaskDto)}`);
        const task = this.findOne(id);
        Object.assign(task, updateTaskDto);
        return task;
    }

    delete(id: number): void {
        this.logger.log(`Deleting task with ID ${id}`);
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        this.tasks.splice(index, 1);
    }
}

