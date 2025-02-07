import { Metric } from '../../domain/entities/metric.entity';
export interface IMetricsRepository {
    collectMetrics(): Promise<Metric[]>;
}