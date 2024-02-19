import React, { useState } from 'react';
import { validateForm } from '../../helpers/validateForm';
import './Form.css';
import Swal from 'sweetalert2'


const Form = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        reason: '',
        description: '',
    })

    const [error, setError] = useState({})

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSelectChange = (e) => {
        setInput({
            ...input,
            reason: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setError(validateForm(input))

        const errors = validateForm(input)
        //Guardo keys del objeto en un array y hago el length //Si length !== 0 TENGO ERRORES//Si length === 0 ,NO TENGO ERRORES hago fetch
        if (Object.keys(errors).length !== 0) {
            if (Object.keys(errors).includes('email') && Object.keys(errors).length === 1) {
                Swal.fire(
                    'Error',
                    'Formato para email debe ser correcto',
                    'error'
                )
                setInput({ ...input, email: '' })
                return
            }
            Swal.fire(
                'Error',
                'Completar formulario correctamente',
                'error'
            )
        } else {
            Swal.fire(
                'Buen trabajo!',
                'Formulario Enviado Correctamente',
                'success'
            )
        }
    }

    return (
        <div className='form' id={'contact'}>
            <div className='form__header'>
                <span className='form__header-title'>Disfruta de la <span>mejor musica</span></span>
                <span className='form__header-subtitle'>Escríbenos en el siguiente formulario y un asesor se pondrá en contacto contigo.</span>
            </div>
            <div className='form__body'>
                <form
                    className='form__body-container'
                    onSubmit={handleSubmit}>
                    <div className='form__body-container-inputs'>
                        <input
                            type="text"
                            placeholder='Nombre'
                            name='name'
                            autoComplete='off'
                            className={error.name ? 'form__input-error' : 'form__input'}
                            value={input.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            name='email'
                            autoComplete='off'
                            className={error.email ? 'form__input-error' : 'form__input'}
                            value={input.email}
                            onChange={handleInputChange}
                        />
                        <select
                            required
                            onChange={handleSelectChange}
                            className={error.reason ? 'form__select-error' : 'form__body-container-select'}>
                            <option value="" selected disabled hidden >Razon</option>
                            <option value='colaboration'>Colaboración</option>
                            <option value='incidency'>Incidencias</option>
                            <option value='others'>Otros</option>
                        </select>
                        <input
                            type="textarea"
                            placeholder='Descripcion'
                            name='description'
                            className={error.description ? 'form__input-error' : 'form__input'}
                            value={input.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='form__body-container-checkbox'>
                        <label>
                            <input type="checkbox" />
                            <span>Acepto las </span>
                            <a
                                href="https://www.spotify.com/es/legal/end-user-agreement/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <u>condiciones legales</u>
                            </a>
                        </label>

                    </div>
                    <div className='form__body-container-button'>
                        <button
                            className='btn btn-primary btn-block mb-5'
                            type='submit'
                        >
                            Enviar
                        </button>
                    </div>
                </form >
            </div>
        </div>
    )
}

export default Form