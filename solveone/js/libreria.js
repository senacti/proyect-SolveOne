const boton = document.querySelector('form')
boton.addEventListener('sumit', aplicar);

function aplicar(e) {
    e.preventDefault();
    const valor = document.querySelector('#nombre').value;

    if (valor === "") {

        swal, fire({
            title: 'error',
            text: 'campo es obligatorio',
            icon: 'error',
            confirmButtomText: 'confirmar'

        })
    } else {
        swal.fire({

            title: `${valor}`,
            text: 'Registrado',
            icon: 'success',
            confirmButtomText: 'confirmar'

        })
    }
}