const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}));

spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}));

const phpBar = document.querySelector('.bar-php');
const javaBar = document.querySelector('.bar-java');
const nodeBar = document.querySelector('.bar-node');
const reactBar = document.querySelector('.bar-react');
const springBar = document.querySelector('.bar-spring');
const laravelBar = document.querySelector('.bar-laravel');
const symfonyBar = document.querySelector('.bar-symfony');
const mysqlBar = document.querySelector('.bar-mysql');
const mongoBar = document.querySelector('.bar-mongodb');

var t1 = new TimelineLite()

t1.fromTo(phpBar, .70, {width: `calc(0% - 6px)`}, {width: `calc(86% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(javaBar, .70, {width: `calc(0% - 6px)`}, {width: `calc(70% - 20px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(nodeBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(springBar, .57, {width: `calc(0% - 6px)`}, {width: `calc(50% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(laravelBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(79% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(mysqlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(mongoBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(65% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(symfonyBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(72% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, height: `20px`, ease: Power4.easeOut});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 1
})
.setTween(t1)
.addTo(controller)

