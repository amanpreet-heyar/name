import React from 'react'
import { portfolio} from '../../assets/data'
import PortfolioItems from '../../components/PortfolioItems'
import './portfolio.css'

const Portfolio = () => {
  return (
   <section className='portfolio section'>
    <h2 className='section__title'>My <span>Portfolio</span></h2>

    <div className='portfolio__container container grid'>
    {portfolio.map((item)=>{
      return(
        <PortfolioItems key={item.id} {...item}/>
      )
    })}</div>
   </section>
  )
}

export default Portfolio