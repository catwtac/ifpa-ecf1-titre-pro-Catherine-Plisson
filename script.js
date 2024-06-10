document.addEventListener('DOMContentLoaded', () => {
    const greenBtn = document.getElementById('green-btn');
    const blueBtn = document.getElementById('blue-btn');
    const elementsToChange = [
        document.querySelector('header'),
        document.querySelector('footer'),
        document.querySelector('button[type="submit"]'),
        ...document.querySelectorAll('h2::after'),
        document.querySelector('.profile-pic'),
        document.querySelector('h1')
    ];
    const errorMessage = document.querySelector('.error-message');
    const contactForm = document.getElementById('contact-form');
    const messageField = document.getElementById('message');

    const blueButton = document.createElement('button');
    blueButton.classList.add('color-btn', 'blue');
    blueButton.style.position = 'absolute'; 
    blueButton.style.top = '20px'; 
    blueButton.style.left = '20px'; 
    blueButton.style.width = '20px'; 
    blueButton.style.height = '20px'; 
    blueButton.style.borderRadius = '50%'; 
    blueButton.style.cursor = 'pointer'; 
    blueButton.style.transition = 'background-color 0.3s'; 
    blueButton.addEventListener('click', () => {
        changeTheme('blue');
    });
    document.querySelector('.navbar').appendChild(blueButton);

    greenBtn.addEventListener('click', () => {
        changeTheme('green');
    });

    blueBtn.addEventListener('click', () => {
        changeTheme('blue');
    });

    function changeTheme(color) {
        let colors;
        if (color === 'green') {
            colors = ['#16a34a', '#22c55e', '#15803d'];
        } else if (color === 'blue') {
            colors = ['#2563eb', '#3b82f6', '#1d4ed8'];
        }

        document.querySelector('header').style.backgroundColor = colors[0];
        document.querySelector('footer').style.backgroundColor = colors[0];
        document.querySelector('button[type="submit"]').style.backgroundColor = colors[0];

        elementsToChange.forEach(element => {
            if (element.tagName === 'BUTTON') {
                element.style.backgroundColor = colors[0];
                element.addEventListener('mouseover', () => {
                    element.style.backgroundColor = colors[2];
                });
                element.addEventListener('mouseout', () => {
                    element.style.backgroundColor = colors[0];
                });
            } else if (element.tagName === 'IMG' && element.classList.contains('profile-pic')) {
                element.style.borderColor = colors[0];
            } else if (element.tagName === 'H1') {
                element.style.textDecorationColor = colors[0];
            }
        });

        document.documentElement.style.setProperty('--underline-color', colors[0]);
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (messageField.value.length < 15) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Message soumis avec succès !');
            contactForm.reset();
        }
    });

    const nameField = document.getElementById('name');
    const surnameField = document.getElementById('surname');
    const maxMessageWidth = Math.max(nameField.offsetWidth, surnameField.offsetWidth);
    messageField.style.maxWidth = maxMessageWidth + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');

    messageInput.addEventListener('input', function() {
        if (messageInput.value.length < 15) {
            messageError.style.display = 'inline';
        } else {
            messageError.style.display = 'none';
        }
    });
});