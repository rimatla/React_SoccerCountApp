import { PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Rainy from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'

/**ES6 Syntax*/
// add methods that are local to our component
const percentToDecimal = (decimal) => {
    return ((decimal * 100 + '%'))
};

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)

};

/**STATELESS FUNCTIONAL COMPONENTS SYNTAX*/
//functions that take in properties, and display data
//export const SoccerDayCount = (props) => (

/**we can also de-structure this. So, instead of using the entire object, we can specify just the ones we want to use.*/
export const SoccerDayCount = ({total, sunny, rainy, goal}) => (
            //info supplied from props
            <div className="soccer-day-count">
                <div className="total-days">
                    <span>{total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{sunny}</span>
                    <Sunny />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <Rainy />
                    <span>{rainy}</span>
                    <span>days</span>
                </div>
                <div>
                    <span>{calcGoalProgress(total, goal)}</span>
                </div>
            </div>
        );

//instead of adding a method to our class, we're actually getting to add this to the class instance.
SoccerDayCount.defaultProps ={
    total: 30,
    sunny: 10,
    rainy: 15,
    goal: 75
};

SoccerDayCount.propTypes = {
    total: PropTypes.number,
    sunny: PropTypes.number,
    rainy: PropTypes.number,
    goal: PropTypes.number
};
