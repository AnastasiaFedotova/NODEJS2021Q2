const commander = require('commander');

const program = new commander.Command();
program.version('0.0.1');

program.requiredOption('-s, --shift <type>', 'shift')
  .requiredOption('-a, --action <type>', 'action encode/decode')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file');

program.addOption(new commander.Option('-a, --action <type>', 'action encode/decode').choices(['encode', 'decode']));
program.parse(process.argv);

module.exports = program.opts();
