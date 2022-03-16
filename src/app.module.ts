import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot('mongodb://pilput:pilput31@localhost:27017', {
      dbName: 'nestapi',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
