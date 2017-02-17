import { Component, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Rainy from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'

/**ES6 SYNTAX*/
export class SoccerDayCount extends Component {
    // add methods that are local to our component
    percentToDecimal (decimal) {
        return ((decimal * 100 + '%'))
    }

    calcGoalProgress (total, goal) {
        return this.percentToDecimal(total/goal)

    }
    render() {
        return (
            //info supplied from props
            <div className="soccer-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.sunny}</span>
                    <Sunny />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <Rainy />
                    <span>{this.props.rainy}</span>
                    <span>days</span>
                </div>
                <div>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}

//instead of adding a method to our class, we're actually getting to add this to the class instance.
SoccerDayCount.defaultProps ={
    total: 60,
    sunny: 10,
    rainy: 15,
    goal: 75
};

SoccerDayCount.propTypes = {
    total: PropTypes.number,
    sunny: PropTypes.number,
    rainy: PropTypes.number
};