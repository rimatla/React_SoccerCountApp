import { createClass } from 'react'
import { SoccerDayList } from './SoccerDayList'
import {SoccerDayCount} from './SoccerDayCount'

export const App = createClass({
    //app initial state default
    getInitialState(){
        return {
            allSoccerDays: [
                {
                    location: "Pickup",
                    date: new Date('2/2/2017'),
                    sunny: true,
                    rainy: false

                },
                {
                    location: "Indoor",
                    date: new Date('3/3/2017'),
                    sunny: false,
                    rainy: false

                },
                {
                    location: "Overseas",
                    date: new Date('5/21/2017'),
                    sunny: false,
                    rainy: true

                }

            ]
        }
    },

    //count days ()
    countDays(filter) {
        //ES5 filter() to deal w/ arrays
        return this.state.allSoccerDays.filter(function(day){
            if(filter) {
                return day[filter]
            }
            else {
                return day
            }
        }).length;

        /**ES6 syntax*/
        //return this.state.allSoccerDays.filter(day=> (filter) ? day[filter] : day).length
    },

    render(){
        return (
            <div className="app">
                <SoccerDayList days={this.state.allSoccerDays}/>

                <SoccerDayCount total={this.countDays()}
                                sunny={this.countDays('sunny')}
                                rainy={this.countDays('rainy')}
                />
            </div>
        )
    }
});