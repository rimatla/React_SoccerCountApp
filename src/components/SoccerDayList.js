import { PropTypes } from 'react'
import { Link } from 'react-router'

import {SoccerDayRow} from './SoccerDayRow'

export const SoccerDayList = ({days, filter}) => {
    //if there's no filter, or filter does not match, return days.
    //Else use the filter(), and add it to the list of days that match that filter.
    const filteredDays = (!filter || !filter.match(/sunny|rainy/)) ? days : days.filter(day => day[filter]);
    return (
        <div className="soccer-day-list">
            <table className="all-soccer-events">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Sunny</th>
                    <th>Rainy</th>
                </tr>
                <tr>
                    <td colSpan = {4}>
                        <Link to="/list-days">All Days</Link>
                        <Link to="/list-days/sunny">Sunny Days</Link>
                        <Link to="/list-days/rainy">Rainy Days</Link>
                    </td>
                </tr>
                <tr>

                </tr>
                </thead>
                <tbody>
                {/*js map array*/}
                {filteredDays.map((day, i) =>
                    <SoccerDayRow
                        key={i}
                        location={day.location}
                        date={day.date}
                        sunny={day.sunny}
                        rainy={day.rainy}
                    />
                )}
                </tbody>
            </table>
        </div>
    )
};



SoccerDayList.propTypes = {
    //days: PropTypes.array
    days: function(props){
        //custom validation
        if(!Array.isArray(props.days)) {
            return new Error(
                'SoccerDayList should be an array'
            )
        }
        else if(!props.days.length) {
            return new Error(
                'SoccerDayList must have at least one record'
            )
        }
        else {
            return null
        }
    }
};
