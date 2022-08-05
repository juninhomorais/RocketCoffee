function alterar() {
    let tela = innerWidth
    if (tela <= 600) {
        document.getElementById('logo').src = './images/logo-mobile.svg'
    } else {
        document.getElementById('logo').src = './images/logo-desktop.svg'
    }
}

let tela = innerWidth
if (tela <= 600) {
    document.getElementById('logo').src = './images/logo-mobile.svg'
} else {
    document.getElementById('logo').src = './images/logo-desktop.svg'
}
