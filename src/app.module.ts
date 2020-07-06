import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { HbsModule } from './hbs/hbs.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CourseModule,
    HbsModule,
  ],
})
export class AppModule {}
