import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css'; //Сжатие css
import autoprefixer from 'gulp-autoprefixer'; //Добавление вендорных префиксов
import gcmq from 'gulp-group-css-media-queries'; //Группировка медиазапросов

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(gcmq())
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserlist: ["last 3 versions"]
    }))
    //Раскомментировать для дублирования не сжатого файла стилей 
    //.pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCSS()) //Сжимает css
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
}