import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/tasks.entity';
import { TasksModule } from './tasks/tasks.module';
//import { SeedModule } from './seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Task],
      synchronize: true,
    }),
    TasksModule,
    //SeedModule,
  ],
})
export class AppModule {}
