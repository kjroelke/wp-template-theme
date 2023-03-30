const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');

const THEME_NAME = 'starter-theme';
const THEME_DIR = `/wp-content/themes/${THEME_NAME}/src`;

function snakeToCamel(str) {
	return str.replace(/([-_][a-z])/g, (group) =>
		group.toUpperCase().replace('-', '').replace('_', ''),
	);
}

/**
 * For JSX folders (located `~/src/js/folder-name/App.jsx)`)
 * Array of strings modeled after folder names (e.g. 'about-choctaw')
 * */
const appNames = [];

/**
 * For SCSS files (no leading `_`)
 * Array of strings modeled after scss names (e.g. 'we-are-choctaw')
 *  */
const styleSheets = []; // for scss only

module.exports = {
	...defaultConfig,
	...{
		entry: function () {
			const entries = {
				global: `.${THEME_DIR}/index.js`,
			};

			if (appNames.length > 0) {
				appNames.forEach((appName) => {
					const appNameOutput = snakeToCamel(appName);
					entries[
						appNameOutput
					] = `.${THEME_DIR}/js/${appName}/App.jsx`;
				});
			}
			if (styleSheets.length > 0) {
				styleSheets.forEach((styleSheet) => {
					const styleSheetOutput = snakeToCamel(styleSheet);
					entries[
						styleSheetOutput
					] = `.${THEME_DIR}/styles/pages/${styleSheet}.scss`;
				});
			}
			return entries;
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
