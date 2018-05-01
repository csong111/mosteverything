// Remember: no copy pasting!

// Controlled input. This is similar to what you did in react.
function addItemInputChanged() {
    setState({ addItemInput: event.target.value });
}

// Controlled input. This is similar to what you did in react.
function nameInputChanged() {
    setState({ listNameInput: event.target.value });
}

function importListChanged() {
    setState({ listRequested: event.target.value });
//console.log(state.listRequested)
}
// Don't try to understand the body of this function. You just 
// need to understand what each parameter represents
function makeHTTPRequest(meth, url, body, cb) {
    fetch(url, {
        body: body,
        method: meth
    })
        .then(response => response.text())
        .then(responseBody => cb ? cb(responseBody) : undefined)
}

// We're going to try and stick with React's way of doing things
let state = {
    items: [],
    addItemInput: "", // The contents of the add item input box
    listNameInput: "", // The contents of the input box related to changing the list
    listName: "grocery list",
    listRequested: ""
}

// Calling rerender changes the UI to reflect what's in the state

function rerender() {
    let inputElement = document.getElementById('itemInput');
    inputElement.value = state.addItemInput; // you can ignore this line

    let listNameElement = document.getElementById('listName')
    listNameElement.innerText = state.listName

    let listNameInputChanged = document.getElementById('listNameInputChanged')
    listNameInputChanged.value = state.listNameInput;

    let importListRequested = document.getElementById('importListRequested')
    importListRequested.value = state.listRequested;

    let d = document.getElementById("items");
    d.innerHTML = '';
    state.items.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        d.appendChild(li)
    })
}

// Our good friend setState paying us a visit from ReactVille
function setState(newState) {
    //if (newState.items) state.items = newState.items;
    //if (newState.addItemInput) state.addItemInput = newState.addItemInput;
    //if (newState.listNameInput) state.listNameInput = newState.listNameInput;
    //if (newState.listName) state.listName = newState.listName;
    state = {...state, ...newState};
    //console.log(state)
    rerender();
}

function sendItemToServer(it, ln) {
    // This function is so short it could be inlined
    let cb = (itemsFromServer) => {
        let parsedItems = JSON.parse(itemsFromServer)
        setState({ items: parsedItems })
    }
    //makeHTTPRequest('POST',
        //'/addItem',
        //JSON.stringify({ item: it, listName: ln }),
        //cb)

    fetch('/addItem', {
        body: JSON.stringify({ item: it, listName: ln }),
        method: 'POST'
    }) 
        .then (response => response.text())
        .then(cb)
}

function sendListToServer(ln) {
    // This function is so short it could be inlined
    let cb = (lNFromServer) => {
        let parsedlN = JSON.parse(lNFromServer)
        //console.log(parsedlN)
        // setState({ listName: parsedlN })
    }
    //makeHTTPRequest('POST',
        //'/addList',
        //JSON.stringify({ listName: ln}),
        //cb)

    fetch('/addList', {
        body: JSON.stringify({ listName: ln}),
        method: 'POST'
    })
        .then (response => response.text())
        .then(cb)
}

// When you submit the form, it sends the item to the server
function addItemSubmit() {
    event.preventDefault();
    sendItemToServer(state.addItemInput, state.listName)
    setState({addItemInput: " "})
}

function listNameSubmit() {
    event.preventDefault();
    setState({ listName: state.listNameInput, listNameInput: " "})
    populateItems(state.listName);
    sendListToServer(state.listName)
}

function importList() {
   event.preventDefault();
   let body = JSON.stringify({listRequested: state.listRequested})
   let cbb = (res) => {
    let parsedArr = JSON.parse(res);
    //console.log(parsedArr)
    setState({items: parsedArr})
   }
   //makeHTTPRequest('POST', '/allList', body, cbb)
   fetch('/allList', {
       body: body,
       method: 'POST'
   })
    .then(response=>response.text())
    .then(cbb)
}

let cb = itemsString => {
    let itemsParsed = JSON.parse(itemsString)
    setState({ items: itemsParsed })
}
// When the client starts he needs to populate the list of items
function populateItems(listName) {
    let body = JSON.stringify({ listName: state.listName })
    //makeHTTPRequest('POST', '/items', body, cb)
    fetch('/items', {
        body: body,
        method: 'POST'
    })
        .then(response => response.text())
        .then(cb)
}

function clearList() {
    let body = JSON.stringify({listName: state.listName})
    //makeHTTPRequest('POST', '/cleared', body, cb)
    fetch('/cleared', {
        body: body,
        method: 'POST'
    })
        .then(response=>response.text())
        .then(cb)
}

function reverseList() {
    let body = JSON.stringify({listName: state.listName})
    //makeHTTPRequest('POST', '/reversed', body, cb)
    fetch('/reversed', {
       body: body,
       method: 'POST' 
    })
        .then(response => response.text())
        .then(cb)
}

function showList () {
    let cbb = listInfo => {
        //console.log(listInfo)
        let listInfoParsed = JSON.parse(listInfo)
        setState({ items: listInfoParsed.it ? listInfoParsed.it : [],  listName: listInfoParsed.ln})}
    //makeHTTPRequest('GET', '/getItemsLastList', undefined, cbb)
    fetch('/getItemsLastList', {
        method: 'GET'
    })
        .then(response=>response.text())
        .then(cbb)
}
// We define a function and then call it right away. I did this to give the file a nice structure.
//populateItems(state.listName)
showList();
