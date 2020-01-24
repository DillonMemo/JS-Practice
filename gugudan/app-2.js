let isStart = false;
const form = document.querySelector('#js-form');

document.querySelector('#startBtn').addEventListener('click', function () {
    isStart = !isStart;
    init(isStart);
})

function init(isStart) {
    if (isStart) {
        document.querySelector('#startBtn').innerHTML = "구구단 게임 종료";
        const multiplicationContent = document.createElement('div');
        multiplicationContent.classList.add('flex');
        multiplicationContent.classList.add('mt-20');
        multiplicationContent.style.fontSize = '20px';
        multiplicationContent.style.textAlign = 'center';
        
        let firstNum = Math.floor(Math.random() * 9) + 1;
        let secondNum = Math.floor(Math.random() * 9) + 1;
        let result = firstNum * secondNum;
        const valueInput = document.createElement('input');
        const submit = document.createElement('button');
        
        valueInput.type = "text";
        
        submit.innerHTML = "결과 보기";
        
        multiplicationContent.innerHTML = `${firstNum} × ${secondNum} = `;
        multiplicationContent.appendChild(valueInput);
        multiplicationContent.appendChild(submit);

        form.appendChild(multiplicationContent);

        form.addEventListener('submit', function(e) {
            debugger;
            e.preventDefault();

            console.log(valueInput.value, result);

            const resultContent = document.createElement('div');
            resultContent.classList.add('flex');
            resultContent.classList.add('mt-20');
            resultContent.style.fontSize = '20px';
            resultContent.style.textAlign = 'center';

            if (Number(valueInput.value) === result) {
                resultContent.innerHTML = "정답 입니다";

                firstNum = Math.floor(Math.random() * 9) + 1;
                secondNum = Math.floor(Math.random() * 9) + 1;
                result = firstNum * secondNum;
                valueInput.value = '';

                multiplicationContent.innerHTML = `${firstNum} × ${secondNum} = `;
                multiplicationContent.appendChild(valueInput);
                multiplicationContent.appendChild(submit);

                valueInput.focus();
            } else {
                resultContent.innerHTML = "오답 입니다";
                valueInput.focus();
            }

            form.appendChild(resultContent);
        })
    } else {
        document.querySelector('#startBtn').innerHTML = "구구단 게임 시작";
        form.innerHTML = "";
    }
}