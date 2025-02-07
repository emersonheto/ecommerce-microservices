import { HealthStatus } from "../../domain/entities/health-status.entity";
import { IHealtCheckRepository } from "../interfaces/health-check.interface";

export class GetHealthStatusUseCase {
    constructor(private readonly healthCheckRepository: IHealtCheckRepository) {}

    async execute(serviceUrl: string) : Promise<HealthStatus> {
        return this.healthCheckRepository.checkServiceHealth(serviceUrl);
    }
}