***<u>Remember that if you have any questions during use, please contact email shuaiqiyupu@163.com. I'd be happy to help you.</u>***  

# What can this package do？

### smart-rem can dynamically set the pixel value of the root element to adapt to different sizes of the screen.



# Usage



```sh
npm install smart-rem -S
```



In the entry file（e.g. src/index.js or src/main.js）

```js
/**
* @param designWidth It's the width of the design draft
* @param designHeight It's the height of the design draft
*/
import smartRem from 'smart-rem'
smartRem(designWidth, designHeight)
```



If the pixel value in the design draft is like this

```css
width: 100px;
height: 500px;
```

Then, write the code as follows

```css
/* 100px/100 = 1rem */
width: 1rem;
/* 500px/100 = 5rem */
height: 5rem;
```

Other attributes with **px** should be written as above. The calculation ratio is **100**.



###Other instructions:

If you still want to write **px** in the code, you can use post-auto-rem to compile after smart-rem is set, so that you can see **rem** in the browser

```sh
npm install postcss-auto-rem -D
```



Add the plugin to plugins list:

```js
module.exports = {

  plugins: [
    
    // The default value of size is 100.
+   require('postcss-auto-rem')({size: 100}),

    require('autoprefixer')

  ]

}
```



After configuring smart REM and postcss, the effect is very good, as follows：

**Your css code**

```css
.foo {
    /* Input example */
    margin: 100px;
    padding: 100px;
    width: 50px;
    font-size: 50px;
}
```

**Styles in browser**

```css
.foo {
    /* Output example */
    margin: 1rem;
    /* 100px/100 = 1rem */
    padding: 1rem;
    /* 50px/100 = 0.5rem */
    width: 0.5rem;
    font-size: 0.5rem;
}
```

The calculation ratio is **100**.