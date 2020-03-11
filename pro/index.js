#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const colors_1 = __importDefault(require("colors"));
const utils_1 = require("./src/utils");
const backupHandler_1 = require("./src/backupHandler");
const installHandler_1 = require("./src/installHandler");
const package_json_1 = __importDefault(require("./package.json"));
commander_1.default.version(package_json_1.default.version).name('backup-global|bkg');
commander_1.default
    .command('backup')
    .alias('b')
    .option('-n --no-version', 'backup package with version')
    .description('backup your global packages')
    .action(agrvs => {
    const options = { needVersion: agrvs.version };
    backupHandler_1.backupHandler(options);
});
commander_1.default
    .command('install')
    .alias('i')
    .description('install your backup')
    .option('-n --no-version', 'install package with version')
    .action(agrvs => {
    const options = { needVersion: agrvs.version };
    installHandler_1.installHandler(options);
});
commander_1.default.parse(process.argv);
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
    utils_1.soloConsole.log(`You can run ${colors_1.default.yellow('bkg <command> -h')} or ${colors_1.default.yellow('backup-global <command> --help')} for help.`);
}
