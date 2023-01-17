module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: 'Where is the directory?',
    validate: (ans) => /src\/.*hooks.*/.test(ans),
  },
  {
    type: 'input',
    name: 'hooksName',
    message: 'What is the name of hooks?',
    validate: (ans) => /^use[A-Z]/.test(ans),
  },
  {
    type: 'confirm',
    name: 'needTests',
    message: 'Do you need a Test?',
    initial: true,
  },
];
