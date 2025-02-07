import { Controller, Get } from "@nestjs/common";
import { MetricsService } from "../services/metrics.service";
import { Metric } from "../../domain/entities/metric.entity";

@Controller('metrics')
export class MetricsController {
    constructor( private readonly metricsService: MetricsService) {}

    @Get()
    async getMetrics(): Promise<Metric[]> 
    {
        return this.metricsService.getMetrics();
    }
}