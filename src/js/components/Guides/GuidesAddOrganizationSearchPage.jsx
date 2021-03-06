import BottomContinueNavigation from "components/navigation/BottomContinueNavigation";
import HeaderBackNavigation from "components/navigation/HeaderBackNavigation";
import React from "react";
import { Input, ProgressBar } from "react-bootstrap";

export default class GuidesAddOrganizationSearchPage extends React.Component {
	constructor (props) {
		super(props);
	}

	static getProps () {
		return {};
	}

	render () {
		return <div>
				<HeaderBackNavigation header_text={"Create Voter Guide"} back_to_text={"< Back"} link_route={"guides_organization_email"} />
				<div className="container-fluid well well-90">
					<h4>Enter Organization Information</h4>
					<ProgressBar striped bsStyle="success" now={50} label="%(percent)s% Complete" />
					<form className="form-horizontal">
						<Input type="text" label="Name" name="organization_name" labelClassName="col-xs-2" wrapperClassName="col-xs-10"
							placeholder="Enter organization name" />

						<Input type="text" label="Twitter" name="organization_twitter" labelClassName="col-xs-2" wrapperClassName="col-xs-10"
							placeholder="Enter Twitter handle like '@MyOrg'" />

						<Input type="text" label="Website" name="organization_website" labelClassName="col-xs-2" wrapperClassName="col-xs-10"
							placeholder="Enter website address" />
						<br />
						<br />
						<br />
					</form>
				</div>
				<BottomContinueNavigation link_route_continue={"guides_organization_add_results"} continue_text={"Continue >"} link_route_cancel={"guides_voter"} cancel_text={"cancel"} />
			</div>;
	}
}
