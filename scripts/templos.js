
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );

    menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelector('#ano-atual').textContent = new Date().getFullYear();

document.querySelector('#ultima-modificacao').textContent = document.lastModified;
