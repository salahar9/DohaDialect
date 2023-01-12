
import React, { Component } from 'react';

class KnockoutTable extends Component {

// returns value of passed attribute name
findTeamAttribute(teamId, teamsList, attrName) {
    return teamsList.find(o => o.id === teamId)[attrName];
};

// create table contents with match results for knockout phase
knockoutMatches(teams, phase) {
    var matchesTable = phase.matches.map((e, index) =>
    {
        let matchDate = (new Date(e.date)).toLocaleString('en-GB', { timeZone: 'UTC' });
        let homeTeam = this.findTeamAttribute(e.home_team, teams, "name");
        let awayTeam = this.findTeamAttribute(e.away_team, teams, "name");
        let homeFlag = this.findTeamAttribute(e.home_team, teams, "flag");
        let awayFlag = this.findTeamAttribute(e.away_team, teams, "flag");
        let homePenalty = e.home_penalty == null ?  "" : `(${e.home_penalty})`;
        let awayPenalty = e.away_penalty == null ?  "" : `(${e.away_penalty})`;

        return (
            <React.Fragment key={"knockoutTable_" + index}>
            <tr>
                <td colSpan="5" className="match-date">{matchDate} UTC</td>
            </tr>
            <tr>
                <td className="match-team"><img src={homeFlag} alt={e.name + " national flag"} className="inline-flag-large" /> {homeTeam}</td>
                <td className="match-result text-force-right"><span className="knockout-result-penalty">{homePenalty}</span>{e.home_result}</td>
                <td className="match-result-spacer">:</td>
                <td className="match-result text-force-left">{e.away_result}<span className="knockout-result-penalty">{awayPenalty}</span></td>
                <td className="match-team">{awayTeam} <img src={awayFlag} alt={e.name + " national flag"} className="inline-flag-large" /></td>
            </tr>
            </React.Fragment>
        );
    });

    return matchesTable;
}

render() {
    const teams = this.props.teams;
    const roundOf16 = this.knockoutMatches(teams, this.props.knockout.round_16);
    const quarterFinal = this.knockoutMatches(teams, this.props.knockout.round_8);
    const semiFinal = this.knockoutMatches(teams, this.props.knockout.round_4);
    const thirdPlace = this.knockoutMatches(teams, this.props.knockout.round_2_loser);
    const final = this.knockoutMatches(teams, this.props.knockout.round_2);

    return (
        <div className="row">
            <div className="col s12">
                <h4 className="center-align">Round of 16</h4>
                <table className="highlight centered table z-depth-1">
                    <thead>
                        <tr className="table-header">
                            <th colSpan="3">Home Team</th>
                            <th colSpan="2">Away Team</th>
                        </tr>
                    </thead>
                    <tbody className="group-matches">
                        {roundOf16}
                    </tbody>
                </table>
            </div>
            <div className="col s12">
                <h4 className="center-align">Quarter finals</h4>
                <table className="highlight centered table z-depth-1">
                    <thead>
                        <tr className="table-header">
                            <th colSpan="3">Home Team</th>
                            <th colSpan="2">Away Team</th>
                        </tr>
                    </thead>
                    <tbody className="group-matches">
                        {quarterFinal}
                    </tbody>
                </table>
            </div>
            <div className="col s12">
                <h4 className="center-align">Semi finals</h4>
                <table className="highlight centered table z-depth-1">
                    <thead>
                        <tr className="table-header">
                            <th colSpan="3">Home Team</th>
                            <th colSpan="2">Away Team</th>
                        </tr>
                    </thead>
                    <tbody className="group-matches">
                        {semiFinal}
                    </tbody>
                </table>
            </div>
            <div className="col s12">
                <h4 className="center-align">Third place match</h4>
                <table className="highlight centered table z-depth-1">
                    <thead>
                        <tr className="table-header">
                            <th colSpan="3">Home Team</th>
                            <th colSpan="2">Away Team</th>
                        </tr>
                    </thead>
                    <tbody className="group-matches">
                        {thirdPlace}
                    </tbody>
                </table>
            </div>
            <div className="col s12">
                <h4 className="center-align">Final</h4>
                <table className="highlight centered table z-depth-1">
                    <thead>
                        <tr className="table-header">
                            <th colSpan="3">Home Team</th>
                            <th colSpan="2">Away Team</th>
                        </tr>
                    </thead>
                    <tbody className="group-matches">
                        {final}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
};

export default KnockoutTable;