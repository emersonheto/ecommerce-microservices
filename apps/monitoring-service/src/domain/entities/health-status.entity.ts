export class HealthStatus {
    constructor(
        public service : string,
        public status : 'UP' | 'DOWN',
        public lastChecked : Date,
        
    ) {}
}