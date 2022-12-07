import chalk from 'chalk';
import {faker} from '@faker-js/faker';

const nombre = faker.name.firstName()
const color = faker.color.rgb();
    

console.log(chalk.hex(color)(nombre));