// Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.
const form = document.getElementById('registrationForm');

// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.
const {username, email, password} = form.elements;
console.dir(form.username)
console.dir(form.email)
console.dir(form.password)

// Виконати базову перевірку: 
// - ім’я користувача не може бути пустим,
// if (!username.value.trim()) {
//     displayError('Username cannot be empty.');
//     return;
// }

// - електронна адреса має бути у правильному форматі,
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// - пароль має містити принаймні 8 символів,
// - пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
function isValidPassword(password) {
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password);
}

// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.
const errorMessages = document.getElementById('errorMessages');
    function displayError(message) {
        errorMessages.innerHTML += `<div class="error">${message}</div>`;
}
    
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const {username, email, password} = form.elements;
    errorMessages.innerHTML = "";
    if (!username.value.trim()) {
        displayError('Username cannot be empty.');
        return;
    }
    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError('The email address must be in the correct format.')
        return;
    }
    if (!password.value.trim() || !isValidPassword(password.value)) {
        displayError('Password must contain at least 8 characters, password must contain at least one uppercase letter, one lowercase letter, one number and one special character.')
        return;
    } else {
        alert('Registration is successful'); //no task
        form.reset(); // Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.
    }
})