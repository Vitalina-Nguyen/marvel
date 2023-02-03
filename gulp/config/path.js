import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./assets`; //Папка куда кидать файлы
const srcFolder = `./src`; //Папка откуда брать файлы

export const path = {
    build: {
        js: `${buildFolder}`,
        css: `${buildFolder}`,
        images: `${buildFolder}`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,pdf}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/{marvel,product}.scss`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``  
}