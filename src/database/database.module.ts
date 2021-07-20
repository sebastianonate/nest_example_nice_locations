import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { MysqlTypeOrmConfigService } from './mysql-typeorm-config.service';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useClass:MysqlTypeOrmConfigService
        })
    ]
})
export class DatabaseModule {}
