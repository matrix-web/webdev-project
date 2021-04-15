import { paths } from '../gulpfile.esm'
import { series, watch } from 'gulp' 
import browserSync from 'browser-sync'
import pugCompile from './pughtml'
import processingStyles from './styles'
import processingScripts from './scripts'

function server () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 8081,
        open: true,
        cors: true
    })

    watch(paths.pug.watch).on('change', series(pugCompile))
    watch(paths.styles.watch).on('change', series(processingStyles))
    watch(paths.js.watch).on('change', series(processingScripts))
}

export default server