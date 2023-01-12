import React, { Component } from 'react';

class GroupmatchesTable extends Component {

    // check if group table already contains team with passed id
    containsId(id, table) {
        if (table.length > 0) {
            for (let tableLoop of table) {
                if (id === tableLoop.id) {
                    return true;
                }
            }
        }
        return false;
    };

    // returns value of passed attribute name
    findTeamAttribute(teamId, teamsList, attrName) {
        return teamsList.find(o => o.id === teamId)[attrName];
    }

    // add new team to group table
    addTeam(id, table, name) {
        table.push({
            id: id,
            name: name,
            points: 0,
            draws: 0,
            wins: 0,
            loses: 0,
            goalsScored: 0,
            goalsLost: 0,
            goalsDf: 0,
            flag: "",
            playedAgainst: [],
        });
    };

    // calculate points, wins, loses, draws and adds all teams that team played against
    updateTeamData(table, teamId, opponentId, teamScore, opponentScore) {
        let team = table.find(o => o.id === teamId);
        if (teamScore === opponentScore) { team.points += 1; team.draws += 1 };
        if (teamScore > opponentScore) { team.points += 3; team.wins += 1 };
        if (teamScore < opponentScore) { team.loses += 1 };
        team.goalsScored += teamScore;
        team.goalsLost += opponentScore;
        team.goalsDf += teamScore - opponentScore;

        if (team.playedAgainst.length <= 3) {
            let newPlayedAgainst = {};
            newPlayedAgainst.id = opponentId;
            newPlayedAgainst.goalDiff = teamScore - opponentScore;
            team.playedAgainst.push(newPlayedAgainst);
        }
    };

    // create data tamplate for each team in the group and update it with data (points, wins, loses etc.)
    calculateGroup(matches, teams) {
        let groupTable = [];

        for (let match of matches) {
            if (groupTable.length < 4) {
                if (!this.containsId(match.home_team, groupTable)) {
                    this.addTeam(match.home_team, groupTable, this.findTeamAttribute(match.home_team, teams, "name"));
                    groupTable.find(o => o.id === match.home_team).flag = this.findTeamAttribute(match.home_team, teams, "flag");
                }
                if (!this.containsId(match.away_team, groupTable)) {
                    this.addTeam(match.away_team, groupTable, this.findTeamAttribute(match.away_team, teams, "name"));
                    groupTable.find(o => o.id === match.away_team).flag = this.findTeamAttribute(match.away_team, teams, "flag");
                }
            }
        this.updateTeamData(groupTable, match.home_team, match.away_team, match.home_result, match.away_result);
        this.updateTeamData(groupTable, match.away_team, match.home_team, match.away_result, match.home_result);
        }
        return groupTable;
    }

    render() {
        const group = this.props.groups;
        const teams = this.props.teams;
        const matches = group.matches;

        function sortTeams(a,b) {
            // sort by number of points
            if (a.points < b.points) return 1;
            if (a.points > b.points) return -1;
            // if points are equal sort by goal difference
            if (a.goalsDf < b.goalsDf) return 1;
            if (a.goalsDf > b.goalsDf) return -1;
            // if the goal difference is equal sort by goals scored
            if (a.goalsScored < b.goalsScored) return 1;
            if (a.goalsScored > b.goalsScored) return -1;
            // if two teams have same amount of scored goals search for result of direct match between those two teams
            for (let newPlayedAgainst of a.playedAgainst) {
                if (newPlayedAgainst.id === b.id) {
                    if (newPlayedAgainst.goalDiff > 1) return 1;
                    if (newPlayedAgainst.goalDiff < 1) return -1;
                }
            }
            // workaround for group H match between Japan and Senegal (no FIFA fair play data)
            if ((a.id === 30 && b.id === 32) || (a.id === 32 && b.id === 30)) {
                if (a.id === 32) return -1; else return 1;
            }
            return 0;
        };

        let renderGroup = this.calculateGroup(matches, teams)
            .sort(sortTeams)
            .map((e, index) => {
                return (
                    <tr key={"liveTable_" + index}>
                        <td>{index + 1}</td>
                        <td className="group-team-name"><img src={e.flag} alt={e.name + " national flag"} className="inline-flag-small" /> {e.name}</td>
                        <td>{e.wins} - {e.draws} - {e.loses}</td>
                        <td>{e.goalsScored} - {e.goalsLost}</td>
                        <td>{e.goalsDf}</td>
                        <td>{e.points}</td>
                    </tr>
                );
            });

        let renderResults = matches.map((e, index) => {
            let matchDate = (new Date(e.date)).toLocaleString('en-GB', { timeZone: 'UTC' });
            let homeTeam = this.findTeamAttribute(e.home_team, teams, "name");
            let awayTeam = this.findTeamAttribute(e.away_team, teams, "name");
            let homeFlag = this.findTeamAttribute(e.home_team, teams, "flag");
            let awayFlag = this.findTeamAttribute(e.away_team, teams, "flag");

            return (
                <React.Fragment key={"liveTable_" + index}>
                <tr>
                    <td colSpan="5" className="match-date">{matchDate} UTC</td>
                </tr>
                <tr>
                    <td className="match-team"><img src={homeFlag} alt={e.name + " national flag"} className="inline-flag-large" /> {homeTeam}</td>
                    <td className="match-result text-force-right">{e.home_result}</td>
                    <td className="match-result-spacer">:</td>
                    <td className="match-result text-force-left">{e.away_result}</td>
                    <td className="match-team">{awayTeam} <img src={awayFlag} alt={e.name + " national flag"} className="inline-flag-large" /></td>
                </tr>
                </React.Fragment>
            );
        });

        return (
            <div className="row">
                <div className="col s12">
                    <h3 className="center-align">{group.name}</h3>
                    <table className="highlight centered table z-depth-1">
                        <thead>
                            <tr className="table-header">
                                <th>#</th>
                                <th>Team</th>
                                <th>Wins - Draws - Loses</th>
                                <th>Goals</th>
                                <th>Goals difference</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody className="group-winners">
                            {renderGroup}
                        </tbody>
                    </table>
                </div>
                <div className="col s12">
                    <table className="highlight centered table z-depth-1">
                        <thead>
                            <tr className="table-header">
                                <th colSpan="3">Home Team</th>
                                <th colSpan="2">Away Team</th>
                            </tr>
                        </thead>
                        <tbody className="group-matches">
                            {renderResults}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}
}
export default GroupmatchesTable;