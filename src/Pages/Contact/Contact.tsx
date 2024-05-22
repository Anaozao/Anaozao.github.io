import { useState } from 'react';
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

function Contact() {

  const [formInfos, setFormInfos] = useState({email: '', name: '', textarea: ''})

  const formatName = (value: string) => {
    return value
      .replace(/[^a-zA-Z]/g, '')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInfos((prev) => {
      const updateData = {
        ...prev,
        [e.target.name]: e.target.value,
      }
      if (e.target.name === 'name') {
        updateData.name = formatName(e.target.value)
      }
      return updateData;
    })
  }

  const isValid = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const {email, name, textarea} = formInfos
    return (
      emailRegex.test(email)
      && name.length >= 3
      && textarea.length >= 20
    )
  }

  const handleSend = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!isValid()) {
      Swal.fire({
        title: 'Erro!',
        text: 'Preencha os campos corretamente.',
        icon: 'error',
        confirmButtonText: 'Fechar',
      })
      return;
    }

    const templateParams = {
      from_name: formInfos.name,
      message: formInfos.textarea,
      email: formInfos.email,
    }

    try {
      const response = await emailjs.send('service_snpavec', 'template_p2v0gpj', templateParams, 'qtRsWe9HfXTwYREBr')
      console.log('Email enviado', response.status, response.text)
      Swal.fire({
        title: 'Enviado!',
        text: 'Email enviado com sucesso.',
        icon: 'success',
        confirmButtonText: 'Fechar',
        timer: 3000,
        timerProgressBar: true,
      })
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Tente novamente',
        icon: 'error',
        confirmButtonText: 'Fechar',
      })
    } finally {
      setFormInfos({email: '', name: '', textarea: ''})
    }
  }


  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1>Contato</h1>
        <div>
          <label htmlFor="name"></label>
          <input
            className={styles.inputs}
            type="text"
            name='name'
            id='name'
            placeholder='Nome (min 3 caracteres)'
            onChange={ handleChange }
            value={formInfos.name}
          />
        </div>
        <div>
          <label htmlFor="email-input"></label>
          <input
            className={styles.inputs}
            type="email"
            name="email"
            id="email"
            placeholder='E-mail'
            onChange={ handleChange }
            value={formInfos.email}
          />
        </div>
        <div className={styles.textareaDiv}>
          <label htmlFor="textarea"></label>
          <textarea
            className={`${ styles.textarea }`}
            name="textarea"
            id="textarea"
            placeholder='Digite aqui sua mensagem (min 20 caracteres)...'
            onChange={ handleChange }
            cols={60}
            rows={10}
            value={formInfos.textarea}
          />
        </div>
        <div>
          <button
            type='submit' 
            className={styles.sendBtn}
            onClick={ handleSend }
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  )
}

export default Contact;