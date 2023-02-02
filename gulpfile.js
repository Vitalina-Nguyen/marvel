import gulp from "gulp"; //Основной модуль
import { path } from "./gulp/config/path.js"; //Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт общих плагинов

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";



//Передаём значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


//Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

//Основные задачи
const mainTasks = gulp.series(gulp.parallel(copy, scss, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(mainTasks, gulp.parallel(watcher));

//Выполнение сценария по умолчанию
gulp.task('default', dev);