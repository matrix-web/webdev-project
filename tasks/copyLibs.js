import { paths } from '../gulpfile.esm'
import { src, dest } from 'gulp'

function copyLibs (cb) {
    src(paths.libs.src.jquery)
        .pipe(dest(paths.libs.dist.jquery))
    src(paths.libs.src.customScrollbar)
        .pipe(dest(paths.libs.dist.customScrollbar))
    src(paths.libs.src.bootstrapGrid)
        .pipe(dest(paths.libs.dist.bootstrapGrid))
    src(paths.libs.src.normalizeCss)
        .pipe(dest(paths.libs.dist.normalizeCss))
    cb()
}

export default copyLibs