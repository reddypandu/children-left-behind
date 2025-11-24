import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import VedioCta from '../../components/vediocta'
import Mission from '../../components/mission'
import About from '../../components/about'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import AboutHero from '../../components/aboutHero'
import AboutMission from '../../components/aboutMission'
import OurValues from '../../components/ourValues'


const CasePage =() => {
    return(
        <Fragment>
            <Header/>
            {/* <PageTitle pageTitle={'About Us'} pagesub={'About'}/>  */}
            {/* <VedioCta/> */}
            <AboutHero/>
            <AboutMission subclass={'section-padding'}/>
            <OurValues/>
            <CaseSlide/>
            <CounterSection/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
