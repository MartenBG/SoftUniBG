function solve() {

    let optionList = document.getElementById('selectMenuTo');
    let input = document.getElementById('input');
    let buttonConvert = document.querySelector('button');
    let output = document.getElementById('result');

    optionList.innerHTML = `
    <option selected value=""></option>
    <option value="hexadecimal">Hexadecimal</option>
    <option value="binary">Binary</option>`;

    buttonConvert.addEventListener('click', () => {
        let result;

        if (optionList.value === 'binary') {
            result = (Number(input.value)).toString(2);
        } else {
            result = (Number(input.value)).toString(16).toUpperCase();
        }

        output.value = result;
        
    });

}