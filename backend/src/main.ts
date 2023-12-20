import * as csurf from 'csurf';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import helmet from 'helmet';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  app.use(csurf());
}
bootstrap();
