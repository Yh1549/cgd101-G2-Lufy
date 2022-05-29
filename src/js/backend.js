function openClass(evt,cname){
    let tablink = document.getElementByClassName('tablink');
    let content = document.getElementsByClassName('mem_content');
    for(let i=0; i<content.length; i++){
        tablink[i].classList.remove('currentM')}
    for(let i=0; i<content.length; i++){
        content[i].style.display = "none";}
    evt.currentTarget.classList.add('currentM')
    document.getElementById(cname).style.display = "grid";
}