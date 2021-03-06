import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from '../config/config.service';

@Injectable()
export class MysqlTypeOrmConfigService implements TypeOrmOptionsFactory{
    constructor(private readonly configService:ConfigService){
        console.log(this.configService.get<string[]>("orm.entities"));
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type:'mysql',
            host:'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'locations_example',
            entities:this.configService.get<string[]>("orm.entities"),
            synchronize: this.configService.get<boolean>('orm.synchronize')
        }
    }

}