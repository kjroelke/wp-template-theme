/**
 * WordPress Dependencies
 */

const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');

module.exports = {
	...defaultConfig,
	...{
		entry: {
			global: './wp-content/themes/starter-theme/src/index.js',
		},
		output: {
			path: __dirname + '/wp-content/themes/starter-theme/dist',
			filename: '[name].js',
		},
	},
};
