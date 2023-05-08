export default function menuhamburger(btn,menu,menuLink){
    const d = document;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }
    });

    d.addEventListener("click", (e) => {
        if(e.target.matches(menuLink)){
            d.querySelector(menu).classList.remove("is-active");
            d.querySelector(btn).classList.remove("is-active");
        }
    });

}