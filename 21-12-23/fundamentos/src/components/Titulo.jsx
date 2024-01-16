import React from 'react'
import '../styles/Titulo.css'
import styles from '../styles/Titulo.module.css'

const Titulo = () => {
  return (
    <div>

      <h1 className='titulo-header-class'>
        Título Principal
      </h1>

      <h5 className='subtitulo-header-class'>
        Subtítulo
      </h5>

      <h1 style={{backgroundColor: 'green', fontFamily: 'Arial'}}>
        Testando styles inline
      </h1>

      <div>

        <h3 className={styles.subtitulo}>
            Essa linha tem styles feito por module.
        </h3>
      </div>

    </div>
  )
}

export default Titulo
