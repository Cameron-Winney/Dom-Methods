let button = document.createElement('button')
button.textContent = "Remove"
document.body.append(button)

let script = document.createElement('script')
document.body.append(script)

let main = document.createElement('main')
document.body.append(main)

let image = document.createElement('img')
image.className = 'image'
image.src = "y0o.jpg"
main.append(image)

let a = document.createElement('a')
a.className = "link"
a.textContent = "Youtube"
a.href = "https://www.youtube.com/"
main.append(a)

button.addEventListener("click" , function() {
    main.remove('main')
})

let create = document.createElement('input')
create.type = 'text'
create.id = "createrInput"
main.append(create)

let createSubmitButton = document.createElement('button')
createSubmitButton.textContent = "Add"
main.append(createSubmitButton)

let input = document.getElementById('createrInput')
createSubmitButton.addEventListener("click",function addElement() {
    console.log("RUN!")
    let createrElementInput = document.createElement(input.value)
    main.append(createrElementInput)
})

let remove = document.createElement('input')
remove.type = 'text'
remove.id = 'removeInput'
main.append(remove)

let removeSubmitButton = document.createElement('button')
removeSubmitButton.textContent = "Remove"
main.append(removeSubmitButton)

let input2 = document.getElementById('removeInput')
removeSubmitButton.addEventListener("click",function() {
    let removeElementInput = document.querySelector(input2.value)
    removeElementInput.remove()
})