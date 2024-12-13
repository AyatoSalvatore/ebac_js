const form = document.getElementById('form-registro');
const userCpf = document.getElementById("cpf");
const userTelefone = document.getElementById("telefone");
let formEValido = false;

function validarFormulario() {
    const cpf = userCpf.value.trim();
    const telefone = userTelefone.value.trim();

    // Verifica se o comprimento do CPF é maior que o do telefone
    return cpf.length > telefone.length;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `<b>Registro feito com sucesso!</b>`;
    
    formEValido = validarFormulario();
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        userCpf.style.border = '1px solid red';
        userTelefone.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

userCpf.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validarFormulario(e.target.value);

    if (!formEValido) {
        userCpf.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        userCpf.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

userTelefone.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validarFormulario(e.target.value);

    if (!formEValido) {
        userTelefone.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        userTelefone.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
