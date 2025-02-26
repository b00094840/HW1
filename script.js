
document.querySelectorAll('.card').forEach(card => {
    if (card.querySelector('#link')){
        const link = card.querySelector('#link');
        const originalContent = card.querySelector('.card-content').innerHTML;
        const expandedText = card.children[1].children[1].getAttribute("expanded");

        link.addEventListener('click', () => {
            link.style.display = 'none';
            card.querySelector('.card-content').children[1].innerHTML = expandedText;
        });

        card.addEventListener('mouseleave', () => {
            link.style.display = 'block';
            card.querySelector('.card-content').innerHTML = originalContent;
        });
}});
