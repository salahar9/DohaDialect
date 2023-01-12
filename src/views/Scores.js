import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import GroupMatchesTable from "../components/GroupMatchesTable";
import KnockoutTable from "../components/KnockoutTable";
import * as JSONdata from "../components/data/data_full.json";
import "./index2.css";

class Scores extends Component {
  componentWillMount() {
    this.setState({ bigData: JSONdata });
  }

  render() {
    const groups = this.state.bigData.groups;
    const teams = this.state.bigData.teams;
    const knockout = this.state.bigData.knockout;
    const groupKeys = Object.keys(this.state.bigData.groups);

    var renderGroups = groupKeys.map((e, index) => {
      return (
        <Route
          path={`/group${index + 1}`}
          key={`${groups[e].name}`}
          render={() => (
            <GroupMatchesTable
              key={"GroupMatchesTable " + index}
              groups={groups[e]}
              teams={teams}
              {...this.props}
            />
          )}
        />
      );
    });

    return (
      <BrowserRouter>
        <div className="container z-depth-1">
          <TopNavBar />
          <Switch>
            {renderGroups}
            <Route
              path="/knockout"
              key={"knockout"}
              render={(props) => (
                <KnockoutTable
                  key="KnockoutTableKey"
                  knockout={knockout}
                  teams={teams}
                  {...props}
                />
              )}
            />
            <Redirect from="/" to="/group1" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Scores;
