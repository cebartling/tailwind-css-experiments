import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigins, // Allow specific origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true, // Allow cookies and authorization headers
    optionsSuccessStatus: 204, // Some legacy browsers choke on 204
  });
  logger.log(`CORS enabled for ${allowedOrigins}`);
  await app.listen(3000);
  logger.log(`Server is running on http://localhost:3000`);
}

bootstrap();
