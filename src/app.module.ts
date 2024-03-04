import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hiteshadingankar:4eihHuSy2njbCoXB@cluster0.lm9fzoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: "People_Plus_V1_Db" }), CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
