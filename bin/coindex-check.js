const program = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <coin>",
    "Add specific coin type in CSV format",
    "BTC,ETH,XRP"
  )
  .option("--currency <currency>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);