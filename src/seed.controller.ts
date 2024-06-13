import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  async seedData() {
    try {
      await this.seedService.seed();
      return { message: 'Data seeding successful' };
    } catch (error) {
      return { error: 'Failed to seed data', details: error.message };
    }
  }
}
