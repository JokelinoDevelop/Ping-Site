let notifyBtn = document.getElementById('notifyBtn');

notifyBtn.addEventListener("click", () => {
    for(const elem of document.querySelectorAll('ul')){
        elem.remove();
    }

    input = document.getElementById('emailInput');
    let inputValue = input.value;
    let parentElement = document.getElementById('emailInput').parentElement;
    let mainDiv =  parentElement.parentElement
    let buttonsDiv = mainDiv.parentElement
    if(!validateEmail(inputValue)){
        let list = document.createElement('ul');
        let li = document.createElement('li');
        li.innerText = "Please provide a valid email address!"
        li.classList.add('list');
        list.appendChild(li);

        input.style.border = "1px solid red"

        document.body.clientWidth > 1000 ? buttonsDiv.appendChild(list) : parentElement.appendChild(list)

        
    }else{
        input.style.border = "1px solid var(--pale-blue)"
    }
})


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }