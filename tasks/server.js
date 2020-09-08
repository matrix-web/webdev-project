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

    watch(paths.pug.watch, series(pugCompile)).on('change', browserSync.stream)
    watch(paths.styles.watch, series(processingStyles)).on('change', browserSync.reload)
    watch(paths.js.watch, series(processingScripts)).on('change', browserSync.reload)
}

export default server