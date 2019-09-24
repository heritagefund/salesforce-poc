"use strict";
const command_1 = require("@oclif/command");
const cli_ux_1 = require("cli-ux");
const salesforce_1 = require("./salesforce");
class PortalCli extends command_1.Command {
    async run() {
        this.log('welcome to the Portal 🏛');
        this.log('=========================');
        const projectTitle = await cli_ux_1.default.prompt('Project title');
        const organisationName = await cli_ux_1.default.prompt('Organisation name');
        salesforce_1.auth().then(this.log);
    }
}
PortalCli.description = 'describe the command here';
PortalCli.flags = {
    // add --version flag to show CLI version
    version: command_1.flags.version({ char: 'v' }),
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
PortalCli.args = [{ name: 'file' }];
module.exports = PortalCli;
