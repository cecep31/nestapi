import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot('mongodb://pilput:pilput31@localhost'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
