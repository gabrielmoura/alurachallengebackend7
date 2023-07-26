import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepoimentosModule } from './depoimentos/depoimentos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './conf/postgres.service';
import { ConfigModule } from '@nestjs/config';
import { DepoimentoHomeModule } from './depoimento-home/depoimento-home.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    DepoimentosModule,
    DepoimentoHomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
