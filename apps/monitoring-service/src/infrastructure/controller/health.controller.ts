import { Controller, Get, Query } from "@nestjs/common";
import { HealthService } from "../services/health.service";
import { HealthStatus } from '../../domain/entities/health-status.entity';

@Controller('health')
export class HealthController {
    constructor( private readonly healthService: HealthService) {}

    @Get()
    async checkHealth(@Query('serviceUrl') serviceUrl: string) : Promise<HealthStatus> {
        return this.healthService.checkService(serviceUrl);
    }
}