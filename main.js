const button = document.getElementById(`button1`);
const input = document.getElementById(`input1`);

const main = document.querySelector(`.main`);
const inputAndButton = document.querySelector(`.inputAndButton`);
let arr = [];
let count = 0;

button.onclick = function(){
    if(input.value !== ``){
        count++;
        const div = document.createElement('div');
        const hr = document.createElement('hr');
        if(count !== 0){
            div.className = `todoDiv` + arr.length.toString();
            hr.className = `hr` + arr.length.toString();
            arr.push(div);
        }
        
        
        main.append(div, hr);

        const p = document.createElement('p');
        p.className = `pDiv`;

        const checkBox = document.createElement('div');
        checkBox.className = `checkBoxDivOff`;

        const checkBoxBody = document.createElement('div');
        checkBoxBody.className = `checkBoxBody`;

        checkBox.onclick = function(){
            checkBox.remove(checkBox);
            checkBoxBody.append(checkBox);
            div.append(p, checkBoxBody);
            p.className = `PCrossed`;

            return checkBox.className = `checkBoxDivOn`;
        }

        p.textContent = input.value;
        div.append(p, checkBox);


        return input.value = null;
    }
    else{
        alert(`Your todo is empty, please enter your todo!`);
        return input.value = null;
    }
}