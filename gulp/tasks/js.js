import babel from "gulp-babel";
import concat from "gulp-concat"
import uglify from "gulp-uglify"

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(app.gulp.dest(app.path.build.js))
}
