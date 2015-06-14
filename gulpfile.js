var gulp = require('gulp');
	jade = require('gulp-jade');

gulp.task('jade', function() {
  return gulp.src('*.jade')
  	.pipe(jade())
  	.pipe(gulp.dest('./build'));
  // place code for your default task here
});