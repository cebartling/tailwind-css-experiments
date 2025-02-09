import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesController } from './places.controller';
import { GooglePlacesService } from './google-places.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes it available globally
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`, // Loads files like .env.development.local
        `.env.${process.env.NODE_ENV}`, // Loads files like .env.development
        '.env.local', // Loads .env.local
      ],
      ignoreEnvFile: process.env.NODE_ENV === 'production', // Ignores .env files in production
    }),
  ],
  controllers: [AppController, PlacesController],
  providers: [AppService, GooglePlacesService],
})
export class AppModule {}
