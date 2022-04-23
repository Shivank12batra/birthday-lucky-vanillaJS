var form = document.querySelector('.form-class');
var result = document.querySelector('.result');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    var birthday = document.querySelector('#birth-date').value;
    var luckyNumber = document.querySelector('#lucky-number').valueAsNumber;
    birthday = birthday.split('-').map(Number);
    var sum = 0;
    var output = document.querySelectorAll('.remove');
    if (output) {
        output.forEach(element => {
            element.remove();
        })
    }

    var outputText = document.createElement('h1');
    outputText.setAttribute('id', 'output-heading');
    // var outputText = document.querySelector('#output-heading');
    outputText.classList.add('remove');
    // var outputImage = document.querySelector('#output-img');
    var outputImg = document.createElement('img');
    outputImg.setAttribute('id', 'output-img');
    outputImg.classList.add('remove');

    birthday.forEach((element)=> {
        sum += element;
    })

    var remainder = (sum % luckyNumber);
    if (remainder === 0) {
        outputText.textContent = 'Congratulations! You Are A Lucky Person.';
        outputImg.src = '/images/lucky_birthday.svg';
    }
    else {
        outputText.textContent = `Ohhh! You have missed by ${remainder} days from being lucky.`;
        outputImg.src = '/images/unlucky_birthday.svg';
    }
    document.querySelector('#birth-date').value = '';
    document.querySelector('#lucky-number').value = '';
    result.appendChild(outputText);
    result.appendChild(outputImg);
}) 
