var userName = prompt('Enter your login?', '');


if (userName === 'admin') {

    var pass = prompt('Password?', '');

    if (pass === '777') {
        alert('Welcome!');
    } else if (pass == null) {
        alert('Error');
    } else {
        alert('Password is not correct :/');
    }

} else if (userName == null) {
    alert('Error');
} else if (userName === 'guest') {
    alert('Welcome guest!');
} else {

    alert('You are not in the system :c ');

}