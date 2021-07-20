import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let controller: LocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers:[LocationService]
    }).compile();

    controller = module.get<LocationController>(LocationController);
  });

  it('should return locations list', () => {
    expect(controller.listLocation()).toMatchObject({
      locations:[
        "Location 1",
        "Location 2",
        "Location 3"
      ]
    });
  });
});
