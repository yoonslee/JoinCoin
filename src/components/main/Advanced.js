import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-image-resizer';

class Advanced extends Component {
  goToAdvanced(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/advancedUserTools`);
  }
  render() {
    return (
      <div className="advanced sideSection">
         <Col xs={12} sm={3} md={3} lg={3}>
            <div className="upperSideBarFringe">
            </div>
            <div className="middleSideBarFringe">
  				    <div onClick={this.goToAdvanced.bind(this)}><h3 className="sideHeader Row">Advanced</h3></div>
            </div>
            <div className="lowerSideBarFringe">
            </div>
		      </Col>
      </div>
    );
  }
}

Advanced.contextTypes = {
  router: React.PropTypes.object
}

export default Advanced;