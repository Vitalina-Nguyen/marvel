import replace from "gulp-replace"; //Поиск по замене 
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; //Уведомления об ошибках
import newer from "gulp-newer"; //Проверка обновления

//Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    newer: newer
}
