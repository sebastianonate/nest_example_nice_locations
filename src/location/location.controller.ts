import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

interface ILocationListDto{

    locations:string[];
}

@Controller('location')
export class LocationController {
    
    constructor(private readonly locationService:LocationService) {
        
    }
    
    @Get()
    listLocation():ILocationListDto{
        const locations=this.locationService.list();
        return { locations };
    }
}
