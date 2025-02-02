// ======================= Form Functionality ================================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementsByClassName('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementsByClassName('name').value;
        const email = document.getElementsByClassName('email').value;
        const message = document.getElementsByClassName('message').value;

        if (name && email && email) {
            alert('Thank you ${name}. Your message has been sent.');
            form.reset();
        }
        else {
                alert('Please fill out the fields.');
        }
    })
})

const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', function () {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light')
    }
});

// ===========================Cheecks User Interface Options ============================
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme')
}