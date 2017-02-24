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
                    <th  className="events-list">Date</th>
                    <th  className="events-list">Location</th>
                    <th  className="events-list">Sunny</th>
                    <th  className="events-list">Rainy</th>
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
                <thead className="items-links">
                <tr>
                    <td colSpan = {4}>
                        <Link className= "items-aTags" to="/list-days">All Days</Link>
                        <Link className= "items-aTags" to="/list-days/sunny">Sunny Days</Link>
                        <Link className= "items-aTags"  to="/list-days/rainy">Rainy Days</Link>
                    </td>
                </tr>
                </thead>
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
