import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks/tasks.entity';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async seed() {
    const tasks = [
      { title: 'Task 1', description: 'Description 1', done: false },
      { title: 'Task 2', description: 'Description 2', done: true },
    ];

    for (const task of tasks) {
      const newTask = this.taskRepository.create(task);
      await this.taskRepository.save(newTask);
      this.logger.log(`Seeded task: ${newTask.title}`);
    }

    this.logger.log('Seeding complete');
  }
}


