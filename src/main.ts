import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(PORT, () =>
    console.log(`nestjs-api-example start on: ${PORT}`),
  );
}
bootstrap();
