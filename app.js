let storage1 = window.localStorage;
storage1.setItem('one', '18');

let storage2 = window.localStorage;
storage2.setItem('two', 'Material');

let storage3 = window.localStorage;
storage3.setItem('three', 'Black');

let result = document.getElementById('result');

function divResult() {
    let value1 = storage1.getItem('one');
    let value2 = storage2.getItem('two');
    let value3 = storage3.getItem('three');
    result.innerHTML = "Thème " + value3 + ", type " + value2 + " et police de caractères " + value1 + "px";
}

divResult();


storage1.setItem('one', '24');
storage2.setItem('two', 'No material');
storage3.setItem('three', 'White');

divResult();