document.getElementById('toggleButton').addEventListener('click', function() {
    var button = document.getElementById('toggleButton');
    var container = document.querySelector('.container');
    var text = document.getElementById('text');

    if (container.classList.contains('active')) {
        container.classList.remove('active');
        button.textContent = 'Click Me';
        text.textContent = 'Original Text';
    } else {
        container.classList.add('active');
        button.textContent = 'Reset';
        text.textContent = 'Changed Text (RITIK)';
    }
});
