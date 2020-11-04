import $ from 'jquery'
import './app1.css'

let number = localStorage.getItem('number')
$('#number').text(number || 100)
let reset = (n) => {
    localStorage.setItem('number', n)
    $('#number').text(n)
}
$('#btnItems').on('click', (e) => {
    const btn = e.target.id
    let n = parseInt($('#number').text())
    if (btn === 'btn1') {
        n += 1
        reset(n)
    } else if (btn === 'btn2') {
        n -= 1
        reset(n)
    } else if (btn === 'btn3') {
        n *= 2
        reset(n)
    } else if (btn === 'btn4') {
        n /= 2
        reset(n)
    }
})