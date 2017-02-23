# WIRED Monash Website
* Developer: [Terence Huynh](http://terencehuynh.com)
* Version 1.0.1

This website uses [Jekyll](http://jekyllrb.com) CMS and [LESS](http://lesscss.org) CSS preprocessor.

Running the site locally requires [Ruby](https://www.ruby-lang.org) and [Bundler](http://bundler.io/).

To install the required dependencies, run `bundle` in the root of the directory.

Then to serve the site locally run `bundle exec jekyll serve` (use `bundle exec jekyll serve --config _config.dev.yml` to serve the site relative to localhost).

## Maintenance
To compile the css install less and clean-code plugin
```
npm i -g less less-plugin-clean-css
lessc --clean-css assets/less/style.less assets/style.css
```
For developers a source map can be generated as well
```
lessc assets/less/styles.less assets/styles.css --source-map
```
