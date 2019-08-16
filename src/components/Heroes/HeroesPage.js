import React, { Component } from 'react';
import HeroesTable from './HeroesTable/HeroesTable';
import HeroDetails from './HeroesTable/HeroCard/HeroDetails/HeroDetails';

class HeroesPage extends Component {
    render() {
        return (
            <div className='container'>
                <HeroesTable mainAtt={"Strength"}/>
                <HeroesTable mainAtt={"Agility"}/>
                <HeroesTable mainAtt={"Intelligence"}/>
                <HeroDetails />
            </div>
        )
    }
}

export default HeroesPage;