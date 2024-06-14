import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SeedService } from './seed.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // Enable CORS
  await app.listen(3000);

  //const seedService = app.get(SeedService);
  //await seedService.seed(); // Seed the database
}
bootstrap();

