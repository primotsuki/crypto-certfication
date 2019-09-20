import * as uuid from 'uuid/v4';
import * as envfile from 'envfile';
import * as fs from 'fs';
const path = './.env';

const obj = envfile.parseFileSync(path);
obj.JWT_SECRET_KEY = uuid();
const jsonenv = envfile.stringifySync(obj);
fs.writeFileSync(path,jsonenv);