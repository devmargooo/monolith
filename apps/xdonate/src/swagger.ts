import { Logger } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const SWAGGER_PREFIX = 'swagger';

export function setupSwagger(app: INestApplication, port: string) {
  const config = new DocumentBuilder()
    .setTitle('xDonate')
    .setDescription('xDonate')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document);

  Logger.log(
    `Swagger is running on: http://localhost:${port}/${SWAGGER_PREFIX}`
  );
}
