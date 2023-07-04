{
    const  welcome = () => {
        console.log("Witam serdecznie w Repozytorium 😊");
    }
    const init = () => {

        const onChangeBackgroundClick = () => {
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
         }
    
        welcome();
    
        const button = document.querySelector(".button");
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".theme");
    
        button.addEventListener("click", onChangeBackgroundClick);
    };
    init();
}