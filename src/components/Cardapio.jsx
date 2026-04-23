// imports que o professor vai passar
import styles from './Cardapio.module.css'
import { useEffect, useState } from 'react'

function Cardapio() {
  //useState que o professor vai passar
  const [pratos, setPratos] = useState([])

  // useEffect que o professor vai passar
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => response.json())
      .then(dados => setPratos(dados.meals))
    .catch(erro => console.log(erro))
  }, [])
  
  // carregamento que o professor vai passar
  const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => response.json())
        .then(dados => {
            setPratos(dados.meals)
            setCarregando(false)
        })
        .catch(erro => {    
            console.erro(erro)
            setCarregando(false)
        })
    }, [])

  return (
    <div className={styles.container}>
      <h1>Cardápio de Frutos do Mar</h1>
      {carregando && <p>Carregando...</p>}
      <div className={styles.grid}>
        {pratos.map(item => (
          <div key={item.idMeal} className={styles.card}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cardapio