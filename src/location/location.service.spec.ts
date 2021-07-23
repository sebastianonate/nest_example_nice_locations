import { Test, TestingModule } from '@nestjs/testing';
import Sinon from 'sinon';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository:Repository<Location>;
  let mock: Sinon.SinonMock;

  beforeEach(async () => {
    mockRepository = { } as Repository<Location>;
    mockRepository = Object.assign(mockRepository,{
      find: new Function(),
    });
    mock= Sinon.mock(mockRepository);
    mock.expects('find').resolves([
      
    ]);
    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {

    expect(service.list()).resolves.toMatchObject(
      [
      ]
    );
  });
});
