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