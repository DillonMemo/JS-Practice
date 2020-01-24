// example-1
function handleClick() {
    let num1 = document.querySelector('#number-1').value;
    let num2 = document.querySelector('#number-2').value;

    console.log(num1.value, num2.value)

    num1 = Number(num1);
    num2 = Number(num2);

    let element = document.querySelector('#js-result');
    if (element.childNodes.length > 0) {
        document.querySelector('#js-result > h1').innerHTML = num1 * num2
    } else {
        const h1 = document.createElement('h1');
        h1.innerHTML = num1 * num2;
        element.appendChild(h1)
    }
}