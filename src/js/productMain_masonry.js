window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        columnWidth: ".grid-sizer",
        percentPosition: true,
        originLeft: false,
        originTop: true,
    });
}