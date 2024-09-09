import { Module } from "@nestjs/common";
import { kafkaService } from "./kafka.service";

@Module({
    providers:[kafkaService],
    exports:[kafkaService],
})
export class KafkaModule{}