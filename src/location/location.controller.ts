import { Controller, Get } from '@nestjs/common';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { LocationListDto } from './location-list.dto';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';
import { LocationService } from './location.service';



@Controller()
export class LocationController {
    
    constructor(
        private readonly locationService:LocationService,
        private readonly mappingRegisterService:MappingRegistryService
    ) {  }

    @Get()
    public async listLocation():Promise<LocationListDto>{
        const locations= await this.locationService.list();
        const dto=locations.map(location=>this.mappingRegisterService.map<LocationDto>(Location.name,LocationDto.name,location));
        return { locations:dto };
    }
}
