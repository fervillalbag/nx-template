import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ValidationError } from 'class-validator';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const globalPrefix = 'graphql';
  const port = process.env.PORT || 3333;

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (errors: ValidationError[]) => {
        const errorsMessages = errors.map((error) =>
          Object.values(error.constraints)
        );
        return new BadRequestException(errorsMessages.toString());
      },
      forbidUnknownValues: false,
    })
  );
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphiql`);
}

bootstrap();
