const d = document;

export default function formularioContacto(form,loader,response) {
    const $form = d.querySelector(form),
            $loader = d.querySelector(loader),
            $response = d.querySelector(response);
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/tibothrondon@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
        .catch((err) => {
            console.log(err);
            let message  = 
                err.statusText || "Ocurrió un  error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);
        });
    });
}