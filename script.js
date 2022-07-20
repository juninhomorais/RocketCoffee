function alterar() {
    let tela = innerWidth
    if (tela <= 600) {
        document.getElementById('logo').src = './assets/logo-mobile.svg'
    } else {
        document.getElementById('logo').src = './assets/logo-desktop.svg'
    }
}

let tela = innerWidth
if (tela <= 600) {
    document.getElementById('logo').src = './assets/logo-mobile.svg'
} else {
    document.getElementById('logo').src = './assets/logo-desktop.svg'
}
