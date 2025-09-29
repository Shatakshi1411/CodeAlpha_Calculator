let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            try {
                string = eval(string);
                inputbox.value = string;
            } catch {
                inputbox.value = "Error";
                string = "";
            }
        } else if (e.target.innerText == 'AC') {
            string = "";
            inputbox.value = string;
        } else if (e.target.innerText == 'del') {
            string = string.substring(0, string.length - 1);
            inputbox.value = string;
        } else {
            string += e.target.innerText;
            inputbox.value = string;
        }
    });
});
