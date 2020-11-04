import $ from 'jquery'
import './app3.css'

const $change = $('#app3 > .block')
$change.on('click', () => {
    $change.toggleClass('active')
})