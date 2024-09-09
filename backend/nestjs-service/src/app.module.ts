import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { RecommendationController } from './recommendation/recommendation.controller';

@Module({
  imports: [KafkaModule],
  controllers: [AppController, RecommendationController],
  providers: [AppService],
})
export class AppModule {}
