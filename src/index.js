import Example from './scripts/example'

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello")
    const main = document.getElementById("main")
    new Example(main);
})
