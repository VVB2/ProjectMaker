import inquirer from 'inquirer';
// import path from 'path';
// import { exec } from 'node:child_process';

export default function fullstackBuilder() {
    let clientDependencies = [];
    let serverDependencies = [];
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'location',
                message: 'Enter the location for your full-stack project',
                default: '.',
            },
            {
                type: 'confirm',
                name: 'clientDependencies',
                message: 'Do you want to install additional dependencies for "client"? 🤔',
                default: false,
            },
            {
                type: 'text',
                name: 'clientPackages',
                message: 'What are the packages? 👤\n(Specify multiple separated by space.)',
                when: (a) => a.clientDependencies,
            },
            {
                type: 'confirm',
                name: 'serverDependencies',
                message: 'Do you want to install additional dependencies for "server"? 🤔',
                default: false,
            },
            {
                type: 'text',
                name: 'serverPackages',
                message: 'What are the packages? 👤\n(Specify multiple separated by space.)',
                when: (a) => a.serverDependencies,
            },
            {
                type: 'confirm',
                name: 'open',
                message: 'Do you want to open the project in vscode? 🤔',
                default: false,
            },
        ])
        .then((answers) => {
            clientDependencies = answers.clientDependencies ? answers.clientPackages.split(' ').map((a) => a.trim()) : undefined;
            serverDependencies = answers.serverDependencies ? answers.serverPackages.split(' ').map((a) => a.trim()) : undefined;
            console.log(clientDependencies, serverDependencies);
        });
}
