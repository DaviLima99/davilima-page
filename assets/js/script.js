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

var t1 = new TimelineLite()

t1.fromTo(phpBar, .70, {width: `calc(0% - 6px)`}, {width: `calc(86% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(javaBar, .70, {width: `calc(0% - 6px)`}, {width: `calc(70% - 20px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(nodeBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, height: `20px`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, height: `20px`, ease: Power4.easeOut});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 1
})
.setTween(t1)
.addTo(controller)

const showRequiredCat = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.project-category button');

    for (let index = 0; index < links.length; index++) {
        if (links[index].hasAttribute('class')) {
            links[index].classList.remove('active');
        }
    }

    event.classList.add('active');
    const getCat = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class ^= "category-"]');

    console.log(categories);

    for (let index = 0; index < categories.length; index++) {
        if (categories[index].hasAttribute('class')) {
            categories[index].classList.remove('showCategory');
            categories[index].classList.add('hideCategory');
        }
    }

    getCat.classList.remove('hideCategory');
    getCat.classList.add('showCategory');

}