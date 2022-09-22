var typed = new Typed(".typing", {
    strings: ["web", ".net", "c#"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


/* animação aparecer */

const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('conteudo-principal-sobre-off')
        }
    })
}, {
    threshold: [1, 1, 1]
})

Array.from(document.querySelectorAll('.conteudo-principal-sobre')).forEach(element => {
    observer.observe(element)
})

/* NAV BAR */

const hamb=document.getElementById('menu-resp')

hamb.addEventListener('click', resp)

function resp(){
const nav=document.querySelector('nav')
nav.classList.toggle('active')
}

