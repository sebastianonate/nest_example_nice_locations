import { resolve } from "path"

const SOURCE_PATH = resolve(__dirname,'..','src');

export default{
    database:{
        url:'jdbc:mysql://db_ip:3306/locations'
    },
    orm:{
        entities:[`${SOURCE_PATH}/**/*.entity.ts`],
        synchronize:false,

    }
}