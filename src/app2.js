import $ from 'jquery'
import './app2.css'

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

//trigger()自动触发事件
$tabBar.children().eq(0).trigger("click")