
 
const   gulp         = require('gulp'),
        imagemin     = require('gulp-imagemin'),
        imgCompress  = require('imagemin-jpeg-recompress');

gulp.task('default', function(done){
    gulp.run('css');
    done()
})

gulp.task('css', function(done){
    gulp.src("css/screen.css").pipe(gulp.dest("demo/css/"))
    done()
});

// Optimize images
gulp.task('img', function() {
    return gulp.src('images/*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('images/'));
  });


