'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'CoSS Living Style Guide');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the docsumentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Tell Fractal we'll use nunjucks templates */
fractal.components.engine('@frctl/nunjucks'); 
fractal.components.set('ext', '.jinja'); 

fractal.components.set('default.preview', '@preview');