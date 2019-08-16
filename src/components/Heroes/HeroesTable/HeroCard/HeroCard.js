import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroCard extends Component {
    render() {
        return (
            <div className="card" style={{width: '10rem', marginLeft: 10}}>
                <img
                    className="card-img-top"  
                    onClick={() => this.props.setHeroDetails(this.props.data)}
                    src={require('../../../../assets/' + this.props.data.name + '.png')}
                    alt="Card image cap" />
                <p className="position-absolute d-inline-flex justify-content-center font-weight-bold text-light fixed-bottom">
                    {this.props.data.name}
                </p>
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        setHeroDetails: (details) => dispatch({ type:'SET_HERODETAILS', details: details })
    }
}

export default connect(null, mapDispatchtoProps)(HeroCard);