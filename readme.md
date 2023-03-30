# Project Overview

Builder a starter theme that works well.

# Before you Begin

1. Rename the theme folder, `style.css`, package.json & composer.json
2. Update the paths in webpack.config.js
3. Add an `auth.json` file based on ACF instructions
4. Run `npm install` and `composer install` in your command line.
5. Publish as a new Github Repo
6. Move Repo to Choctaw Org

This next step might be wrong, but it's mostly correct.

7. Run `git remote add wpe git@git.wpengine.com`

Happy Editing!

## Dependencies

-   Bootstrap
-   @wordpress/scripts

# Changelog

## v1.2

A better Webpack!

New entry function to programmatically generate files. All you have to do is add a snake-case string to the proper array!

```js
const THEME_NAME = 'starter-theme';
const THEME_DIR = `/wp-content/themes/${THEME_NAME}/src`;

function snakeToCamel(str) {
return str.replace(/([-\_][a-z])/g, (group) =>
group.toUpperCase().replace('-', '').replace('\_', ''),
);
}

/**
* For JSX folders (located `~/src/js/folder-name/App.jsx)`)
* Array of strings modeled after folder names (e.g. 'about-choctaw')
*/
const appNames = [];

/**
 * For SCSS files (no leading `_`)
 * Array of strings modeled after scss names (e.g. 'we-are-choctaw')
 */
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
    },
```

## v1.1.1

Minor bug fixes & additional templating

## v1.1

### Updated SCSS Styles:

-   `/vendor/_bs-custom.scss` now contains better list of bootstrap elements
-   `/abstracts/_variables.scss` now starts with CNO style declarations
-   `/base/_reset.scss` includes `section` `padding:3rem 0` (based on Bootstrap `py-5`)
-   `/base/_typography.scss` is created with basic styles

### Updated `webpack.config`

-   Making use of `const`ants to allow quicker config to custom path/theme name.

### New Package: Bundle Analyzer!

-   Updated `package.json` to include new package
-   Updated `webpack.config` to generate a `report.html` file when `npm run build` script is fired that outputs to `/bundle-analyzer` to analyze JS modules

### New Theme Functions!

-   `remove_wordpress_styles()` method accepts an array of `$handles` to remove (i.e. `classic-theme-styles`,`wp-block-library`,`dashicons`, etc.)
-   `enqueue_page_assets()` (and dependent methods) added to enqueue js/scss assets _per page_ (so we can only call the assets we need when we need them) with a simple script

```

```
