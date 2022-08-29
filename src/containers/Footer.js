import React from 'react'
import { images } from '../assets'

const styles = {
  container: `pt-[30px] flex flex-row justify-center bg-[#ffffd9]`,
  img: `w-[250px] h-[100px] `,
  c2: `bg-[#ffffd9] text-center text-[30px] font-[Kollektif] pb-[30px]`,
}

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <a href='https://detrashtoken.com'>
          <img src={images.bolao} className={styles.img} alt=''></img>
        </a>
      </div>
      <div className={styles.c2}>
        Está com dúvidas? <br/> 
        <span className="text-[grey]">Entre em contato:<br/> <a href='https://detrashtoken.com'>(85) 9 9987-6891</a></span>
      </div>
    </>

  )
}

export default Footer