const btnCadastrar = document.querySelector('#btn-cadastrar');

function cadastrar(event) {

    //horario
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    //add modelo e plca
    event.preventDefault();
    const modelo = document.querySelector('#modelo');
    const placa = document.querySelector('#placa');
    if (modelo.value == '') {
        alert('Digite o modelo do veículo');
        return false;
    }
    if (placa.value == '') {
        alert('Digite a placa do veículo');
        return false;
    }
    let linha = `
    <tr>
        <td>${modelo.value}</td>
        <td>${placa.value}</td>
        <td>${horas}:${minutos}</td>
        <td><button onclick="deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button>
        </td>
    </tr>
    `;

    const lista = document.querySelector('#lista');
    lista.innerHTML = lista.innerHTML + linha;

    modelo.value = '';
    placa.value = '';
}

btnCadastrar.addEventListener('click', cadastrar);

function deletar(registro) {

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Se deletar o registro não tem como reverter.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero deletar!'
    }).then((result) => {
        if (result.isConfirmed) {
            registro.remove();
            Swal.fire(
                'Deletado!',
                'Você deletou o registro.',
                'Successo!'
            )
        }
    })



}