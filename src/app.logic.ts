import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


const {b:base ,l: limit, s:showTable} = yarg;
let outputMessage = '';
const headerMessage = `
===================================
      Table of ${base}
===================================
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if(showTable){
  console.log(outputMessage);

}
 
const outPath = 'outputs';

fs.mkdirSync('outputs', { recursive: true });

fs.writeFileSync(`outputs/table-${base}.txt`, outputMessage);
console.log('File created successfully!');
