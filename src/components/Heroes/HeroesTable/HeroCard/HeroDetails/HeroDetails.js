import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroDetails extends Component {
    render() {
        return (
            <div className="modal fade" id="modalDetails" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.HeroDetails.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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