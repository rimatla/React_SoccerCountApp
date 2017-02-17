import { createClass, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Rainy from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'

/**CREATE CLASS SYNTAX*/
export const SoccerDayCount = createClass({
    //propTypes
    propTypes: {
        total: PropTypes.number.isRequired,
        sunny: PropTypes.number.isRequired,
        rainy: PropTypes.number.isRequired
    },

    //default props
    getDefaultProps () {
        return {
            total: 50,
            sunny: 50,
            rainy: 15,
            goal: 100
        }
    },

    percentToDecimal (decimal) {
        return ((decimal * 100 + '%'))
    },

    calcGoalProgress (total, goal) {
    return this.percentToDecimal(total/goal)

},
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

});
