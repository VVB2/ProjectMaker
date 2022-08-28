/* eslint-disable import/extensions */
// import fs from 'fs';
// import path from 'path';
import inquirer from 'inquirer';
import reactBuilder from './config/reactBuilder.js';
import fullstackBuilder from './config/fullstackBuilder.js';
// const nowPath = path.join(process.cwd(), 'now.json');
// const existingConfig = fs.existsSync(nowPath);

inquirer
    .prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What type of project? 📦',
            choices: [
                'React',
                'Full-stack',
            ],
        },
    ])
    .then((answers) => {
        switch (answers.type) {
        case 'React':
            reactBuilder();
            break;
        case 'Full-stack':
            fullstackBuilder();
            break;
        default:
            break;
        }
    });
