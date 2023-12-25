import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';

import { AuthModule } from './auth/auth.module';
import authConfig from './auth/config/auth.config';
import { ThrottlerService } from './config/services/throttler.service';
import { ContainerModule } from './containers/container.module';
import { GroceriesModule } from './groceries/groceries.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useClass: ThrottlerService,
    }),
    GroceriesModule,
    UsersModule,
    AuthModule,
    ConfigModule,
    ContainerModule,
    RecipesModule,
  ],
})
export class AppModule {}
