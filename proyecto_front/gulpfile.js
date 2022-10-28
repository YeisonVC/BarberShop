const { src, dest, watch, parallel } = require("gulp");

// css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imágenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');


function css( done ) {
    src('src/scss/**/*.scss')// Identificar el archivo SASS
        .pipe( plumber() )// No detener la ejecución si hay errores
        .pipe( sass() )// Compilarlo
        .pipe( dest("src/build/css") )// Almacenarla en el disco duro
    done();//Callback que avisa a gulp cuando llegamos al final
}

function imagenes( done ) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ))
        .pipe( dest("src/build/img") )
    done();
}

function versionWebp( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( dest("src/build/img") )
    done();
}

function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( dest("src/build/img") )
    done();
}

function javascript( done ) {
    src('src/js/**/*.js')
        .pipe( dest("src/build/js") )
    done();
}

function dev( done ) {
    watch("src/scss/**/*.scss", css)//Escuchar la hoja de estilos scss
    done();//Callback que avisa a gulp cuando llegamos al final
}

//Ejecutar Individualmente
exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;

//Ejecutar en conjunto
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);