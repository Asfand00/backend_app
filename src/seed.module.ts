/*import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { Task } from './tasks/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [SeedService],
  exports: [SeedService]
})
export class SeedModule implements OnModuleInit {
  constructor(private readonly seedService: SeedService) {}

  async onModuleInit() {
    try {
      await this.seedService.seed();
      console.log('Data seeding successful');
    } catch (error) {
      console.error('Failed to seed data', error);
    }
  }
}*/
