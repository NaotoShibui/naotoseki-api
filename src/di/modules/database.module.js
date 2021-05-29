import { Module } from '@nestjs/common';
import { databaseProviders } from '../providers/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
// @ts-ignore
export class DatabaseModule {}