import React from 'react'
import styles from './Carros.module.css'

const Carros = ({modelo, ano, km}) => {
  return (
    <div>
      <h2 className={styles.meu_titulo}>{modelo}</h2>
      <p>Ano de lançamento: {ano}</p>
      <p>Quilômetros rodados: {km}</p>
    </div>
  )
}

export default Carros
