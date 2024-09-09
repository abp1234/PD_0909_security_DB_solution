import { Injectable } from "@nestjs/common";
import { Kafka } from "kafkajs";


@Injectable()
export class kafkaService{
    private readonly kafka =new Kafka({
        brokers:['localhost:9092'],
    });
    private readonly producer = this.kafka.producer();

    async sendMessage(topic: string, message: string){
        await this.producer.connect();
        await this.producer.send({
            topic:topic,
            messages:[{value:message}],
        });
        await this.producer.disconnect();
    }
}