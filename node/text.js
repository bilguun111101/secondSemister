const fs = require('fs');

const content = 'Keep doing it...\n';

fs.writeFile('text.txt', content, {flag: 'a'}, err => {
    console.log(err);
});