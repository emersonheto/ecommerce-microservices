import { Counter } from "prom-client";
import { IMetricsRepository } from "../../application/interfaces/metric-repository.interface";
import { Metric } from "../../domain/entities/metric.entity";

export class PrometheusMetricsRepository implements IMetricsRepository{
    private httpRequestCounter = new Counter ({
        name: 'http_requests_total',
        help: 'Total number of http requests',
    }); 

    async collectMetrics(): Promise<Metric[]> {
        this.httpRequestCounter.inc();
        // pendiente 

        const counterMetrics = await this.httpRequestCounter.get();
        const counterValue = counterMetrics.values[0].value;
        return [
            new Metric('http_request_total',counterValue, 'Total number of http requests')
        ]
    }
}

