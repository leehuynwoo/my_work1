// Projects
const workBtnContainer = document.querySelector('.filter_menus');
const projectContainer = document.querySelector('.products');
const projects = document.querySelectorAll('.product');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.filter_menu.selected');
    if (active != null) {
        active.classList.remove('selected');
    }
    e.target.classList.add('selected');


    projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });

});