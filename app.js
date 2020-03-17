// disabling fireworks onload
window.onload= function() {
    const fireworks = document.querySelector('.pyro');
    fireworks.classList.remove('pyro');
    fireworks.classList.add('remove');
    const results = document.querySelector('#results');
    results.classList.add('removed')
}

// onclick to count the words in textarea field
function addClick() {
    const area = document.querySelector('#text');

    if(area.value == '') {
        // Display alert if not value was entered...
        alert('You have to enter some text to count the words...');
    }else {

        // getting length of words from entered text
        const count = area.value.split(' ').length;

        // removing/adding classes for textarea
        area.classList.remove('fadeInLeft');
        area.classList.add('fadeOutRight');

        // removing arrow element from DOM
        const arrow1 = document.querySelector('.arrow');
        arrow1.parentNode.removeChild(arrow1);

        // removing/adding classes for fireworks
        const fireworks = document.querySelector('.remove');
        fireworks.classList.remove('remove');
        fireworks.classList.add('pyro');

        // add class remove for button
        const btn = document.querySelector('#count');
        btn.classList.remove('fadeInLeft');
        btn.classList.add('fadeOutRight');

        //removing h1 
        const h1 = document.querySelector('#head');
        h1.classList.add('fadeOutRight');

        // adding results
        const results = document.querySelector('#results');
        results.classList.add('show');
        results.innerHTML = 'Your amount of the words you entered is: '  + count;

        //reload the page after 5000ms -> 5sec
        setInterval(()=> {
            location.reload();
        }, 5000);
    }
}

