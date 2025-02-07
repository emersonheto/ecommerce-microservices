import { HealthStatus } from '../../domain/entities/health-status.entity';
export interface IHealtCheckRepository {
    checkServiceHealth(serviceUrl: string): Promise<HealthStatus>;
}

