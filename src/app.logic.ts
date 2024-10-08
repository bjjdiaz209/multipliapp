import fs from 'fs';

let outputMessage = '';
const base = 5;
const headerMessage = `
===================================
      Table of ${base}
===================================
`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);
 
const outPath = 'outputs';

fs.mkdirSync('outputs', { recursive: true });

fs.writeFileSync(`outputs/table-${base}.txt`, outputMessage);
console.log('File created successfully!');
