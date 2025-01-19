***<u>Remember that if you have any questions during use, please contact email shuaiqiyupu@163.com. I'd be happy to help you.</u>***  

# What can this package do？

### smart-rem can dynamically set the pixel value of the root element to adapt to different sizes of the screen.



# Usage

## Step 1: Install

```sh
npm install smart-rem -S
```

## Step 2: Input width of the design draft

In your project entry file, such as 'src/index.js' or 'src/main.js', Write the following code:

```js
/**
* @param designWidth It's the width of the design draft, such as 375
* @param designHeight It's the height of the design draft, such as 667
*/
import smartRem from 'smart-rem'
smartRem(designWidth, designHeight) or smartRem(designWidth)
```

## Step 3 (The final step): convert px to rem

### Solution One：Manually convert px to rem. The changes occur in the code you write.

If the pixel value in the design draft is

```css
width: 200px;
```

Then, write the code as follows

```css
/* 200px/100 = 2rem */
width: 2rem;
```

All attributes with **px** should be written as above. The convert ratio is **100**.


### Solution two：Automatically convert px to rem. The change does not occur in the code you wrote, but in the packaged dist file, so it can adapt to screens of different sizes.

### Usage

### firstly: Install

```sh
npm install postcss-auto-rem -D
```



### Secondly: Set param size

### 1.Vue Framework (if you are using Vue)



```sh
npm install postcss-auto-rem -D
```



In file  **.postcssrc.js** or **postcss.config.js**. If it doesn't exist, create one under the root directory of the project.

```diff
module.exports = {
  "plugins": {
+   "postcss-auto-rem": {},
  }
}
```

If your project is using typescript, your should create file named postcss.config.ts, and add config as follows:

```diff
export default {
  plugins: {
+   'postcss-auto-rem': {},
  },
}
```


### 2.React Framework (if you are using React)


```sh
npm install postcss-auto-rem -D
```



In file  **config/webpack.config.js**. If it doesn't exist, create one with `npm run eject`.

```diff
{
    loader: require.resolve('css-loader'),
    options: cssOptions,
},
{
    loader: require.resolve('postcss-loader'),
    options: {
        ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
+           require('postcss-auto-rem')(),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            postcssNormalize(),
          ]
    },
},
```



### 3.Node Api (if you are using node)

```diff
var fs = require('fs');
var postcss = require('postcss');
var postcssAutoRem = require('postcss-auto-rem');
var css = fs.readFileSync('main.css', 'utf8');
+ var processedCss = postcss(postcssAutoRem()).process(css).css;
 
fs.writeFile('auto-rem.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('file written.');
});
```



### 4.gulp  (if you are using gulp#)

```diff
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssAutoRem = require('postcss-auto-rem');
 
gulp.task('css', function () {
 
    var processors = [
        autoprefixer({
            browsers: 'last 1 version'
        }),
+       postcssAutoRem()
    ];
 
    return gulp.src(['build/css/**/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'));
});
```



### 5.If your project framework is designed by yourself with webpack

（1） Add postcss-loader to webpack.config.js

```diff
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
+         {
+           loader: 'postcss-loader'
+         }
        ]
      }
    ]
  }
}

```

if css-in-js, add `astroturf` to webpack.config.js

```diff
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader'],
      }
    ]
  }
}
```

(2)Create file **postcss.config.js**

```diff
module.exports = {

  plugins: [

+   require('postcss-auto-rem')(),

    require('autoprefixer')

  ]

}
```
