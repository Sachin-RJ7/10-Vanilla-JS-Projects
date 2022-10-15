const counter = document.querySelector('.counter');
const bar = document.querySelector('.loading_bar_front');

let index = 0;

updateLoading();

function updateLoading() {
    counter.innerText = index + "%";
    bar.style.width = index + "%";
    index++

    if(index < 101) {
        setTimeout(updateLoading, 20);
    }
}