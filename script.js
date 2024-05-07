document.getElementById('github1').addEventListener('click', function() {
    alert("Please confirm that you want to proceed to the next page.");
    window.open('https://github.com/tibisorul', '_blank');
});

document.getElementById('github2').addEventListener('click', function(){
    alert("Please confirm that you want to proceed to the next page.");
    window.open('https://github.com/Tibisorul/Database', '_blank');
})

document.getElementById('github3').addEventListener('click', function(){
    alert("Please confirm that you want to proceed to the next page.");
    window.open('https://github.com/Tibisorul/MyCV-ToPractice','_blank');
})

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-popup');
    const closeButtons = document.querySelectorAll('.close-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            const popup = button.closest('.card').querySelector('.popup-container');
            popup.classList.add('active');
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup-container');
            popup.classList.remove('active');
        });
    });
});

