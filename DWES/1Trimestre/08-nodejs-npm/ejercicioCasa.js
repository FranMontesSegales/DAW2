import {DateTime} from 'luxon';
import chalk from 'chalk';

function fechaActivity() {
    if (DateTime.now().second === 0 || DateTime.now().second % 10 === 0){
        return chalk.green(DateTime.now().toFormat("dd-MM-yyyy - HH:mm:ss"));
        } else{
            return DateTime.now().toFormat("dd-MM-yyyy HH:mm:ss");

    } 
}
    setInterval(() => {console.log(fechaActivity())}, 1000);