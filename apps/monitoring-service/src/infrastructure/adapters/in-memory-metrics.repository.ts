import { DatabaseSync } from "node:sqlite";
import { IMetricsRepository } from "../../application/interfaces/metric-repository.interface";
import { Metric } from "../../domain/entities/metric.entity";

export class InMemoryMetricsRepository implements IMetricsRepository{
   private metrics : Record<string, number> = {
        http_requests_total: 0,
        memory_usage_mb: Math.floor(Math.random() * 512),
        cpu_usage_percentage: parseFloat((Math.random() * 100).toFixed(2)),
        database_latency_ms: Math.floor(Math.random() * 500),


    }


    // el record hace referencia a un objeto que tiene como llave un string y como valor un number

    async collectMetrics(): Promise<Metric[]> {
        this.metrics.http_requests_total++;
        return Object.keys(this.metrics).map(
            key => new Metric(key, this.metrics[key])
        );
    }
}