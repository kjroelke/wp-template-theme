const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');

const THEME_NAME = 'starter-theme';
const THEME_DIR = `/wp-content/themes/${THEME_NAME}`;

module.exports = {
	...defaultConfig,
	...{
		entry: {
			global: `.${THEME_DIR}/src/index.js`,
			howToApply: `.${THEME_DIR}/src/js/how-to-apply/App.jsx`,
			jobs: `.${THEME_DIR}/src/js/jobs/App.jsx`,
		},
		output: {
			path: __dirname + `${THEME_DIR}/dist`,
			filename: `[name].js`,
		},
	},
	plugins: [
		...defaultConfig.plugins,
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			reportFilename: path.join(
				__dirname,
				'bundle-analyzer',
				'report.html',
			),
			openAnalyzer: false,
		}),
	],
};
