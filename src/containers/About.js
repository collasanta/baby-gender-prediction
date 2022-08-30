import React from 'react'
import { useTranslation } from "react-i18next";


const styles ={
   container: `space-y-4 flex flex-col justify-center pt-[70px] pb-[70px] `,
   about1: `font-[Kollektif]  text-[30px] text-center px-[20px]  leading-[50px]`,
   rev: `font-[Kollektif] text-[30px] text-[#5BBAEB]`,
   about2: ` font-[Kollektif] text-[25px] text-center px-[40px] max-w-[800px] mx-auto text-[#7c8591] `,
}

const About = () => {
  const { t } = useTranslation();

  return (
     <>
      <div className={styles.container} id="SOBRE">
         <p className={styles.about1} >
         SOBRE A  <span className={styles.rev}> APOSTA </span>
         </p>
         <div className={styles.about2}>
         Fala galera, o mundo web3 está revolucionando até o mundo do descobrimento do sexo biológico dos bebês.<br/><br/>  
         Então criamos um contrato inteligente(smartcontract) que irá receber o palpite do sexo biológico do bebê que está por vir.
         Esse contrato roda na rede Polygon e pode ser verificado cliclando <a href="https://polygonscan.com/address/0x3259cf7eee9090099394f2cbd417d19c426f776e" className="text-[blue]">aqui</a>
         </div>
      </div>
     </>
  )
}

export default About