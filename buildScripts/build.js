var webpack = require('webpack')
var webpackConfig = require('../webpack.config.prod')
var chalk = require('chalk')

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run(function(err, stats){
  if (err){
    console.log(chalk.red(err));
    return 1;
  }

  var jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){
    return jsonStats.warnings.map(warn => console.log(chalk.yellow(warn)));
  }

  console.log('webpack status: ' + stats);

  console.log(chalk.green('Your production build completed successfully'));

  return 0;
});

