const Generator = require('yeoman-generator');

module.exports = class Test extends Generator {
    constructor(...args) {
        super(...args);
    }

    async prompting() {
        const answers = await this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Yo maaaan?',
            default : 'Yo!'
        }]);
        this.log(answers.name);
    }
};
