const d = document,
        w = window;

export default function videoInicio(){
    const $videos = d.querySelectorAll("video[data-video]");

    const cb = (entries) =>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            }else{
                entry.target.pause();
            }

            w.addEventListener("visibilitychange", (e)=> d.visibilityState === "visible" 
                                ? entry.target.play() : entry.target.pause())
        });
    }

    const observer = new IntersectionObserver(cb, {threshold: 0.5});

    $videos.forEach(el => observer.observe(el));
}