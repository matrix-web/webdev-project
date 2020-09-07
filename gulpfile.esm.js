import {series, parallel} from 'gulp'
import clean from './tasks/clean'
import compilePug from './tasks/pughtml'
import processingStyles from './tasks/styles'
import processingImages from './tasks/image'
import processScripts from './tasks/scripts'
import sprites from './tasks/svgsprite'
import fonts from './tasks/fonts'
import server from './tasks/server'
import copyLibs from './tasks/copyLibs'

const paths = {
    pug: {
        src: './src/pug/pages/**/*.pug',
        watch: './src/pug/**/*.pug',
        dist: './dist'
    },
    styles: {
        src: './src/scss/**/main.scss',
        watch: './src/scss/**/*.scss',
        dist: './dist/css'
    },
    js: {
        src: './src/js/**/*.js',
        watch: './src/js/**/*.js',
        dist: './dist/js'
    },
    fonts: {
        src: './src/fonts/**/*.{woff,woff2}',
        watch: './src/fonts/**/*.{woff,woff2}',
        dist: './dist/fonts'
    },
    images: {
        src: './src/img/**/*.{jpg,jpeg,png,gif,tiff}',
        watch: './src/img/**/*.{jpg,jpeg,png,gif,tiff}',
        dist: './dist/img'
    },
    sprites: {
        src: './src/img/svg/**/*.svg',
        watch: './src/img/**/*.svg',
        dist: './dist/img/sprites'
    },
    favicons: {
        src: './src/img/favicons/*.{jpg,jpeg,png,gif}',
        dist: './dist/img/favicons'
    },
    libs: {
        src: {
            jquery: 'node_modules/jquery/dist/jquery.min.js',
            bootstrapGrid: 'node_modules/bootstrap-4-grid/css/**/*.css',
            normalizeCss: 'node_modules/normalize.css/normalize.css',
            customScrollbar: './src/libs/**/*.*'
            
        },
        dist: {
            jquery: './dist/libs/jquery',
            bootstrapGrid: './dist/libs/bootstrap-4-grid',
            normalizeCss: './dist/libs/normalize-css',
            customScrollbar: './dist/libs'
        }
    }
}

export { paths }

export const development = series(clean, copyLibs,
    parallel([compilePug, processingStyles, processScripts, processingImages, sprites, fonts]),
    parallel(server)
)

export const production = series(clean, 
    parallel([compilePug, processingStyles, processScripts, processingImages, sprites, fonts, copyLibs])
)

export default development