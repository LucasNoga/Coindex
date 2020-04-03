#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

// key sample: c3f4bc4268844c06647dd3db4f27db78

program
  .version(pkg.version)
  .command("key", "Manage API key -- https://nomics.com")
  .command("check", "Check coin price info")
  .parse(process.argv);
