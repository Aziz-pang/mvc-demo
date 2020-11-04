## 入门模块化设计
🛑🛑 效果预览地址 ↓


每一个功能可独立一个模块进行设计，不同的功能应当尽可能避免放在同一个文件中，css 文件可以利用 js 进行引用

<br />

### JS引用css 文件

```bash
# 在项目目录中使用yarn安装 jQuery
# 引入前需要初始化 yarn init
yarn init   
yarn add jquery
```

```js
import '/xx.css'
import $ from 'jquery'
```

**样式与行为分离**
JS 只管理功能，css 只管样式不管功能，将两者彻底分离

jquery 库中常见的 API 有`.hide()与.show()`。进行模块化设计时不要使用，下面例子更加灵活地分离功能以及添加更多的样式的设计。

<br />

### 案例：css控制样式，JS 控制事件

```css
.text1,
.text2 {
    line-height: 100px;
    text-align: center;
    background-color: red;
    display: none;
}

.active {
    display: block;
}
```

```js
const $tabBar = $('#app2 > .header')
const $content = $('#app2 .content')

$tabBar.on('click', 'p', (e) => {
    const $tab = $(e.currentTarget)
    const tabIndex = $(e.currentTarget).index();
    $tab
        .addClass('selected')
        .siblings()
        .removeClass("selected");
    $content
        .children()
        .eq(tabIndex)
        .addClass('active')
        .siblings()
        .removeClass("active");
})
```