import { Injectable } from "@nestjs/common";
import { CollectMetricsUseCase } from '../../application/use-cases/collect-metrics.use-case';
import { Metric } from "../../domain/entities/metric.entity";

@Injectable()
export class MetricsService{
    constructor( private readonly collectMetricsUseCase : CollectMetricsUseCase ) {}
    async getMetrics() : Promise<Metric[]> {
        return this.collectMetricsUseCase.execute();
    }
}