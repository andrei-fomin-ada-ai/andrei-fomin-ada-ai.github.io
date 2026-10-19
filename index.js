function applyTheme(theme) {
    const button = document.getElementById('theme-toggle');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (button) {
        button.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

applyTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

document.addEventListener('click', (event) => {
    if (!event.target.closest('#theme-toggle')) {
        return;
    }

    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
});
