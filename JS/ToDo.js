// To show item when we refesh or restart page...
function AfterRefresh() {
    let storageArr = localStorage;

    for (i = 0; i < storageArr.length; i++) {
        let keys = storageArr.key(i);
        let values = localStorage.getItem(keys);
        document.getElementById('todo').innerHTML += `
    <li class="created-todo">
       <div class="outer-content">
           <p class="content">${values}</p>
       </div>
       <i class="bi bi-trash3-fill">
           <button id="${keys}" class="deleteEle" onclick="delEle(event)">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" /> </svg>
           </button>
       </i>
    </li> `;
    }
}

AfterRefresh();

// To show form when we click on add item...
function open_form() {
    document.getElementById('section-form').style.display = 'flex';
}

// To hide form when we click on exit button...
function exit_form() {
    document.getElementById('section-form').style.display = 'none';
}


// To add element in local storage and to main page...
function addTodo(event) {
    event.preventDefault();
    if (localStorage.length == 0) {
        const keys = localStorage.length;
        localStorage.setItem(`${keys}`, `${document.getElementById('inputText').value}`);
        document.getElementById('todo').innerHTML += `
        <li class="created-todo">
           <div class="outer-content">
                <p class="content">${document.getElementById('inputText').value}</p>
           </div>
           <i class="bi bi-trash3-fill">
                <button id="${keys}" class="deleteEle" onclick="delEle(event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" /> </svg>
                </button>
           </i>
        </li> `;
    } else {
        let i = 0;
        let newStorageArr = localStorage;
        let newStore = [];
        while (i < localStorage.length) {
            let keys = newStorageArr.key(i);
            let values = localStorage.getItem(keys);
            newStore.push(keys);
            i++ ;
        }
        let keys = Math.max(...newStore) + 1;
        localStorage.setItem(`${keys}`, `${document.getElementById('inputText').value}`);
        document.getElementById('todo').innerHTML += `
        <li class="created-todo">
            <div class="outer-content">
                <p class="content">${document.getElementById('inputText').value}</p>
            </div>
        <i class="bi bi-trash3-fill">
            <button id="${keys}" class="deleteEle" onclick="delEle(event)">
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" /> </svg>
            </button>
        </i>
        </li> `;
    }
    document.getElementById('inputText').value = '';
    document.getElementById('section-form').style.display = 'none';
}

submitEle.addEventListener("click", addTodo);

// To reset form input box...
resetText.addEventListener("click", () => {
    document.getElementById('inputText').value = '';
})

// To delete item from local storage and from main page...
function delEle(event) {
    let btnID = event.target.closest(".deleteEle").id;
    let listItem = document.getElementById(btnID).closest(".created-todo");
    listItem.remove();
    localStorage.removeItem(btnID);
}

// To change Background color...
function changeTheme() {
    if (document.getElementById('theme').style.justifyContent == 'end') {
        document.getElementById('theme').style.justifyContent = 'start';
        document.body.style.backgroundColor = '#050505';
    } else {
        document.getElementById('theme').style.justifyContent = 'end';
        document.body.style.backgroundColor = '#d5ebff';
    }
}

theme.addEventListener('click', changeTheme);