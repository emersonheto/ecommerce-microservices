import { Module } from '@nestjs/common';
import { MetricsService } from './infrastructure/services/metrics.service';
import { CollectMetricsUseCase } from './application/use-cases/collect-metrics.use-case';
import { HealthService } from './infrastructure/services/health.service';
import { PrometheusMetricsRepository } from './infrastructure/adapters/prometheus-metrics.repository';
import { GetHealthStatusUseCase } from './application/use-cases/get-health-status.use-case';
import { HealthCheckRepository } from './infrastructure/adapters/health-check.repository';
import { HealthController } from './infrastructure/controller/health.controller';
import { MetricsController } from './infrastructure/controller/metrics.controller';
import { InMemoryMetricsRepository } from './infrastructure/adapters/in-memory-metrics.repository';


@Module({
  imports: [],
  controllers: [
    HealthController,
    MetricsController
  ],
  providers: [
    MetricsService,
    HealthService, 
    {
      provide: CollectMetricsUseCase,
      useFactory : () => new CollectMetricsUseCase(new InMemoryMetricsRepository)
    },
    {
      provide: GetHealthStatusUseCase,
      useFactory : () => new GetHealthStatusUseCase(new HealthCheckRepository)
    }

  ],
})
export class MonitoringServiceModule {}
