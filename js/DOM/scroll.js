const   d = document,
        w = window;

export default function scroll(header){
    const $header = d.querySelector(header);
    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 600) {
            $header.classList.remove("hidden");
        } else {
            $header.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e) =>{
        if(e.target.matches(header)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
}