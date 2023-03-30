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
