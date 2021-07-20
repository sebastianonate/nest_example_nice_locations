import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class MysqlTypeOrmConfigService implements TypeOrmOptionsFactory{
    constructor(private readonly configService:ConfigService){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type:'mysql',
            host:'localhost',
            port: 3306,
            username: 'root',
            password: null,
            database: 'locations',
            entities:this.configService.get<string[]>("orm.entities"),
            synchronize: this.configService.get<boolean>('orm.synchronize')
        }
    }

}