import inquirer from 'inquirer';
import path from 'path';
// import { exec } from 'node:child_process';

export default function reactBuilder() {
    let dependencies = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'location',
                message: 'Enter the location for your react project',
                default: '.',
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your "React" project? 🤔',
                default: path.basename(process.cwd()),
            },
            {
                type: 'confirm',
                name: 'dependencies',
                message: 'Do you want to install additional dependencies? 🤔',
                default: false,
            },
            {
                type: 'text',
                name: 'packages',
                message: 'What are the packages? 👤\n(Specify multiple separated by space.)',
                when: (a) => a.dependencies,
            },
            {
                type: 'confirm',
                name: 'open',
                message: 'Do you want to open the project in vscode? 🤔',
                default: false,
            },
        ])
        .then((answers) => {
            dependencies = answers.dependencies ? answers.packages.split(' ').map((a) => a.trim()) : undefined;
            console.log(dependencies);
        });
}
