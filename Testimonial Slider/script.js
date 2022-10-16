const testimonial = [
     {
        name: "Cherish G",

        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",

        text: "I have gotten at least 50 times the value from apple. I'm good to go. Since I invested in apple I made over 100,000 dollars profits. Thanks guys, keep up the good work!"
     },

     {
        name: "Letitia S",

        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",

        text: "Apple impressed me on multiple levels. The very best. Apple is the next killer app. I am so pleased with this product."
     },

     {
        name: "Zorana U",

        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",

        text: "I would also like to say thank you to all your staff. I wish I would have thought of it first. Absolutely wonderful!"
     }
];


const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const username = document.querySelector('.username');

let index = 0;
function updateTestimonials() {

    const {name,photoUrl,text} = testimonial[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    username.innerText = name;
    index++;
    if(index == testimonial.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonials();
    }, 5000);
}