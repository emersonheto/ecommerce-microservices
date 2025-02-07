import { Injectable } from "@nestjs/common";
import { GetHealthStatusUseCase } from '../../application/use-cases/get-health-status.use-case';
import { HealthStatus } from "../../domain/entities/health-status.entity";

@Injectable()
export class HealthService{
    constructor(private readonly GetHealthStatusUseCase: GetHealthStatusUseCase) {}
    async checkService (serviceUrl:string) : Promise<HealthStatus> {
        return this.GetHealthStatusUseCase.execute(serviceUrl);
    }

}