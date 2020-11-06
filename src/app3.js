import $ from 'jquery'
import './app3.css'

const $change = $('#app3 > .block')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes'
$change.toggleClass('active', active)

$change.on('click', () => {
    if ($change.hasClass('active')) {
        $change.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $change.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})