function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var time = document.getElementById('time')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()
    var dat = new Date()
    time.innerHTML = dat
    msg.innerHTML = `${dia}/${mes}/${ano} <br> Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 5 && hora < 12) {
        // Bom dia!
       img.src = "https://lh3.googleusercontent.com/pw/AIL4fc-CR5RW1VUKsLZzjrVkgaiw1A3quIaXQL7mhATXQEe2KqGWzancvaGv6EV8aagqZV37LZUh-CUDC-YpcRckl7KI5WpGjOQHueq00EfDFzZ1hvOIXNX24jobgyTbXVhUYdffTHzpUAY--zm9bfAVo4K_=w262-h250-s-no?authuser=0"
       document.body.style.background = '#b08f56'
       msg.innerHTML += '<br>Bom dia!'

    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
       img.src='https://lh3.googleusercontent.com/pw/AIL4fc94lDzHb5yOiRFYCQSimMUQqprjUUETdQjyLxCAox7Ns5x_pMLmswUVF2XvXJFxN7FasC1AAvIpQ9oQh3RPVxjVx9QOYDx7x8V77PtTr58ORit5ABvfp5xGDPTUfHf7x0IcM3Shiu_9bXe48B-oqflP=w257-h250-s-no?authuser=0'
       document.body.style.background = '#e66906'
       msg.innerHTML += '<br>Boa tarde!'
    } else {
        // Boa noite!
        img.src = 'https://lh3.googleusercontent.com/pw/AIL4fc-dS3GuZ5McZwY0BtPCLoAuyvgJ2t9YhsU20cy_hrcl3sXDWgaL33K9yGwRllsd2BninFdUlallgdbFwmGyldsV4XVJ6ixKX64ZrfHjxfIPoe51T4Mj4iJfNVyMfj7UX0jGt4H2sQDRDHMMt7KGiKgc=w251-h250-s-no?authuser=0'
        document.body.style.background = '#0d2f56'
        msg.innerHTML += '<br>Boa noite!'
    }
}