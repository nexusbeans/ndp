import React from 'react'
import TitleWraper from '../../Components/TitleWraper'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Recording() {
  return (
    <>
    <Header/>
        <TitleWraper
        MainTitle={Recording}
        subTitle={Recording}
        />
        <section>
            <h2></h2>
        </section>
        <Footer/>
    </>
  )
}
