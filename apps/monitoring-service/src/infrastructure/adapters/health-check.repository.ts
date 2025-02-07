import { IHealtCheckRepository } from "../../application/interfaces/health-check.interface";
import { HealthStatus } from "../../domain/entities/health-status.entity";

export class HealthCheckRepository implements IHealtCheckRepository{
    async checkServiceHealth(serviceUrl: string): Promise<HealthStatus>
    {
        try {
            await fetch(serviceUrl);           
            return new HealthStatus(serviceUrl, 'UP', new Date());
        } catch (error) {
            return new HealthStatus(serviceUrl, 'DOWN', new Date());
        }
    }

}