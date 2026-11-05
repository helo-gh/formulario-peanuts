//1º PASSO - capturar o formulário nno html

const formulário = document.getElementById("formulário")


formulario.addEventListener ("submit", function (event){

    event.preventDefault()

    // CAPTURAR OS VALORES DIGITADOS PELO USUÁRIO

    const nome = document.getElementById("nome").value
    const escolha = document.getElementById("escolha").value
    const telefone = document.getElementById("telefone").value
    const personagem = document.getElementById("personagem").value
    const mensagem = document.getElementById("mensagem").value

    if(telefone.trim() ===""){
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp = `
    Olá! Gostaria de fazer um personagem com Peanuts para mim
    Nome:${nome}
    Escolha:${escolha}
    Telefone:${telefone}
    Personagem:${personagem}
    Observação:${mensagem}
    `
const mensagemCodificada =  encodeURIComponent(textoWhatsapp)
// NUMERO DO WHATSAPP

const numeroWhatsapp = "55111984933632"

// MONTA O LINK WHATSAPP

const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

window.location.href = link
})
