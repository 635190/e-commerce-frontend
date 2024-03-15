import React from 'react'
import MainCarosel from '../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../Data/mens_kurta'
import { men_shirt } from '../../Data/men_shirt'
import { mens_jeans } from '../../Data/men_Jeans'
import { lengha_choli, women_dress } from '../../Data/lenghaCholi'
import { women_top } from '../../Data/women_top'
import { women_jeans } from '../../Data/women_jeans'
import { women_kurti } from '../../Data/women_kurti'



const HomePage = () => {
  return (
    <div>
        <MainCarosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={men_shirt} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={mens_jeans} sectionName={"Men's Jeans"}/>
            <HomeSectionCarosel data={women_dress} sectionName={"Women's Dress"}/>
            <HomeSectionCarosel data={women_kurti} sectionName={"Women's Kurti"}/>
            <HomeSectionCarosel data={women_top} sectionName={"Women's Top"}/>
            <HomeSectionCarosel data={women_jeans} sectionName={"Women's Jeans"}/>
            
        </div>
    </div>
  )
}

export default HomePage