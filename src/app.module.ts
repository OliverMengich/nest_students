import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
