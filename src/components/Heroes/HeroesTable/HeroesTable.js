import React, { Component, Fragment} from 'react';
import Data from '../../../data/heroes.json';
import HeroCard from './HeroCard/HeroCard.js';

class HeroesTable extends Component {
    constructor(props) {
        super(props);

        this.results = [];
    }

    componentWillMount = () => {
        this.results = Data.filter(data => data.primary === this.props.mainAtt);
    }

    render() {
        return (
            <div className='container' style={{paddingTop: 20, paddingBottom: 20}}>
                <div className='row justify-content-center'>
                    <h2 style={{color: 'white'}}>{this.props.mainAtt}</h2>
                </div>
                <div className='row'>
                    {
                        this.results.map(hero => {
                            return (
                                <Fragment key={hero.id}>
                                    <HeroCard data={hero}/>
                                </Fragment>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default HeroesTable;