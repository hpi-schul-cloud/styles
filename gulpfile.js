const gulp = require("gulp");
const cleanDir = require('gulp-clean-dir');

gulp.task("css", () => {
	return gulp
		.src("src/css/**/variables.scss")
		.pipe(require("gulp-postcss")([
      require("@csstools/postcss-sass")(), 
      require("postcss-color-mod-function")()
    ]))
    .pipe(cleanDir('build/css'))
		.pipe(gulp.dest("build/css"));
});
