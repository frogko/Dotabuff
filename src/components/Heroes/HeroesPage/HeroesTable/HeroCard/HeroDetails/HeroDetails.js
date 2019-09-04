import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroDetails extends Component {
    render() {
        return (
            <div className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.HeroDetails.name}</h5>
                        <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{color: 'black'}}>
                        <ul>
                            <li>
                            {this.props.HeroDetails.spellInfoQ}
                            </li>
                            <li>
                            {this.props.HeroDetails.spellInfoW}
                            </li>
                            <li>
                            {this.props.HeroDetails.spellInfoE}
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return{
        HeroDetails: state.heroDetails
    }
}

export default connect(mapStatetoProps, null)(HeroDetails);