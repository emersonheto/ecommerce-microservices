import { Metric } from "../../domain/entities/metric.entity";
import { IMetricsRepository } from "../interfaces/metric-repository.interface";

export class CollectMetricsUseCase {
    constructor(private readonly metricsRepository: IMetricsRepository) {}

    async execute(): Promise<Metric[]> {
        return this.metricsRepository.collectMetrics();
    }
}