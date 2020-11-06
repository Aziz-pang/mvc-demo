import $ from 'jquery'
import './app2.css'

const $tabBar = $('#app2 > .header')
const $content = $('#app2 .content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey)

$tabBar.on('click', 'p', (e) => {
    const $tab = $(e.currentTarget)
    const tabIndex = $(e.currentTarget).index();
    localStorage.setItem(localKey, tabIndex)
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

//trigger()自动触发事件
$tabBar.children().eq(index).trigger("click")