
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function project(){
    alert("there are no projects in here")
}

const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phone')
const subject = document.getElementById('subject')
const massage = document.getElementById('massage')

function sendEmail() {
    const bodyMassage = `Full name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phoneNumber.value}<br> Massage: ${massage.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "esgaming0407@gmail.com",
        Password : "DBD86D6E1C3C14F896A247FD84F01DB53E1A",
        To : 'esgaming0407@gmail.com',
        From : "esgaming0407@gmail.com",
        Subject : subject.value,
        Body : bodyMassage
    }).then(
        message => alert("Success")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
