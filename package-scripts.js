require('dotenv').config();
const npsutils = require('nps-utils');
const webpackMode = 'development';

module.exports = {
    scripts: {
        clean: {
            description: 'clean build',
            default: npsutils.rimraf('dist')
        },
        build: {
            description: "building enviornment",
            default: npsutils.series('nps clean', 'nps build.build'),
            build: `webpack --mode ${webpackMode}`
        },
        dev: {
            start: {
                description: 'starting dev enviorment',
                script: `${npsutils.crossEnv('NDOE_ENV=development')} nodemon dist/index.bundle.js`
            },
            default: {
                script: npsutils.concurrent.nps('dev.watch', 'dev.start')
            },
            watch: {
                description: 'watch',
                script: 'webpack -w'
            }
        },

    }
}