  
import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default{
    database:{
       // url:'jdbc:mysql://db_ip:3306/locations'
    },
    orm: {

        //not working
        //entities: [`${SOURCE_PATH}/**/*.entity{.ts,.js}`],
        //working
        //entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
        entities: [resolve(__dirname,'..' ,'**/*.entity{.ts,.js}')],
        synchronize: false,
      },
}