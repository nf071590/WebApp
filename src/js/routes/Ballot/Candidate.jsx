import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, DropdownButton, Input, MenuItem, Navbar } from "react-bootstrap";
import { Link } from 'react-router';

import BallotActions from '../../actions/BallotActions';
import BallotStore from '../../stores/BallotStore';
import CandidateDetail from '../../components/Ballot/CandidateDetail';
import ItemActionbar from '../../components/ItemActionbar';
import ItemActionBar2 from '../../components/ItemActionBar2';
import StarAction from '../../components/StarAction';

export default class Candidate extends Component {
  static propTypes = {
    //history: PropTypes.func.isRequired,
    history: PropTypes.string,
    oppose_on: PropTypes.boolean,
    params: PropTypes.object.isRequired,
    support_on: PropTypes.boolean
  };

  constructor(props) {
    super(props);
  }

  render() {
    var candidate = BallotStore.getCandidateByWeVoteId(`${this.props.params.we_vote_id}`);

    // no candidate exists... go to ballot
    if (Object.keys(candidate).length === 0)
      this.props.history.replace('/ballot');

    var support_item;
    if (this.props.support_on) {
        support_item = <Link to="ballot">7 <span className="glyphicon glyphicon-small glyphicon-arrow-up"></span></Link>;
    } else {
        support_item = <Link to="ballot">7 <span className="glyphicon glyphicon-small glyphicon-arrow-up"></span></Link>;
    }

    var oppose_item;
    if (this.props.oppose_on) {
        oppose_item = <Link to="ballot">3 <span className="glyphicon glyphicon-small glyphicon-arrow-down"></span></Link>;
    } else {
        oppose_item = <Link to="ballot">3 <span className="glyphicon glyphicon-small glyphicon-arrow-down"></span></Link>;
    }

    var organization_we_vote_id;
    organization_we_vote_id = "wv02org1111";

    return (
    <section className="candidate well well-90 gutter-top--small">
      <div className="candidate-detail-route list-group-item">
        {/*
        <header className="row">
          <div className="col-xs-6 col-md-6 text-center">
            <Link to='/ballot'>
              &lt; Back to My Ballot
            </Link>
          </div>
          <div className="col-xs-6 col-md-6 text-center">
            <i className="icon-icon-more-opinions-2-2 icon-light icon-medium">
            </i>
            <Link
              to="/ballot/opinions"
              className="font-darkest fluff-left-narrow">
                More Opinions
            </Link>
          </div>
        </header>
        */}

        <StarAction
          we_vote_id={candidate.we_vote_id}
          is_starred={candidate.is_starred} />
        <div className="row" style={{ paddingBottom: '10px' }}>
          <div
            className="col-xs-6"
            style={candidate.candidate_photo_url ? {} : {height:'95px'}}>

            {
              candidate.candidate_photo_url ?

                <img
                  className="img-circle"
                  style={{display:'block', paddingTop: '10px', width:'100px'}}
                  src={candidate.candidate_photo_url}
                  alt="candidate-photo"/> :

              <i className="icon-lg icon-main icon-icon-person-placeholder-6-1 icon-light"/>

            }
          </div>
          <div className="col-xs-6">
            <h4 className="bufferNone">
              <Link className="linkLight"
                    to={"/candidate/" + candidate.we_vote_id }
                    onlyActiveOnIndex={false}>
                      { candidate.ballot_item_display_name }
              </Link>
            </h4>
            <p>Running for <span className="running-for-office-emphasis">{ candidate.office_display_name }</span></p>
          </div>
        </div>
        <ItemActionBar2 we_vote_id={candidate.we_vote_id}
                       is_support={candidate.is_support} is_oppose={candidate.is_oppose}
                        supportCount={candidate.supportCount} opposeCount={candidate.opposeCount} />
        <div className="container-fluid well-90">
          {/* Post privately box */}
          {/*
          <ul className="list-group">
              <li className="list-group-item">
                  <div>
                      <input type="text" name="address" className="form-control" defaultValue="What do you think?" />
                      <Link to="ballot_candidate" params={{id: 2}}><Button bsSize="small">Post Privately</Button></Link>
                  </div>
              </li>
          </ul>
          */}
          <ul className="list-group">

            {/* One organization's Position on this Candidate */}
            <li className="list-group-item">
                <div className="row">
                  <div className="col-xs-3 col-md-2">
                      <Link to="ballot_candidate_one_org_position" params={{id: 2, org_id: 27}} className="transparent">
                        <i className="icon-org-lg icon-icon-org-placeholder-6-2 icon-org-resting-color"></i>
                      </Link>
                  </div>
                  <div className="col-xs-9 col-md-10">
                      <h4 className="">
                        <Link className="linkLight"
                            to={"/guidepositions/" + organization_we_vote_id }>
                              Organization Name<br />{/* TODO icon-org-placeholder */}
                          </Link>
                      </h4>
                      <p className="">supports <span className="small">Yesterday at 7:18 PM</span></p>
                  </div>
                </div>
                <div className="row">
                    Integer ut bibendum ex. Suspendisse eleifend mi accumsan, euismod enim at, malesuada nibh.
                    Duis a eros fringilla, dictum leo vitae, vulputate mi. Nunc vitae neque nec erat fermentum.
                </div>
                {/* Likes coming in a later version
                <br />
                23 Likes<br />
                */}
            </li>
          </ul>
        </div>

      </div>
    </section>
    );

  }
}
