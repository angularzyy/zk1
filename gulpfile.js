var gulp = require('gulp');
var webserver = require('gulp-webserver');
var html = require('gulp-htmlmin');
var js = require('gulp-uglify');
var css = require('gulp-minify-css');
var url = require('url')

var data = [
    {
        'img':'images/one_03.gif',
        'tit':'百度',
        'add':'北京市海淀区西北旺',
        "span":'互联网 | 已上市 | 10000人以上',
        "re":'热招',
        'qian':'前端工程师',
        'deng':'等2300个职位',
        "icon":'icon iconfont icon-chevron-thin-right'
    },
    {
        'img':'images/one_03.gif',
        'tit':'百度',
        'add':'北京市海淀区西北旺',
        "span":'互联网 | 已上市 | 10000人以上',
        "re":'热招',
        'qian':'前端工程师',
        'deng':'等2300个职位',
        "icon":'icon iconfont icon-chevron-thin-right'
    },{
        'img':'images/one_03.gif',
        'tit':'百度',
        'add':'北京市海淀区西北旺',
        "span":'互联网 | 已上市 | 10000人以上',
        "re":'热招',
        'qian':'前端工程师',
        'deng':'等2300个职位',
        "icon":'icon iconfont icon-chevron-thin-right'
    },{
        'img':'images/one_03.gif',
        'tit':'百度',
        'add':'北京市海淀区西北旺',
        "span":'互联网 | 已上市 | 10000人以上',
        "re":'热招',
        'qian':'前端工程师',
        'deng':'等2300个职位',
        "icon":'icon iconfont icon-chevron-thin-right'
    },
]

gulp.task('webserver',function(){
    gulp.src('.')
    .pipe(webserver({
        port:8080,
        host:'localhost',
        middleware:function(req,res,next){
            res.setHeader('Access-Control-Allow-Origin',"*");
            res.setHeader('content-type','application/json;charset=utf-8;')
            if(req.method === 'GET'){
                res.end(JSON.stringify(data))
                console.log(111)
            }
        }
    }))
})
//压缩html
gulp.task('html',function(){
   gulp.src('./index.html')
       .pipe(html({
            removeComments: true,//清除HTML注释
            collapseWhitespace:true,//压缩HTML
            removeScriptTypeAttributes:true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes:true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        })).pipe(gulp.dest('./dist'))
})
//压缩css
gulp.task('css',function(){
   gulp.src('./css/*.css')
       .pipe(css())
       .pipe(gulp.dest('./css1'))
})
//压缩js
gulp.task('js',function(){
   gulp.src('./js/*.js')
       .pipe(js())
       .pipe(gulp.dest('./js1'))
})