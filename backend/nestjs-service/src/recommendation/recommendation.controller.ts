import { Body, Controller, Post } from "@nestjs/common";
import { kafkaService } from "src/kafka/kafka.service";


@Controller('recommendations')
export class RecommendationController{
    constructor(private readonly kafkaService: kafkaService){}

    @Post()
    async recommend(@Body() body: any){
        await this.kafkaService.sendMessage('recommendations', JSON.stringify(body));
        return{message:'추천 요청 전송'}
    }
}