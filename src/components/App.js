import { Component } from 'react'
import { SoccerDayList } from './SoccerDayList'
import {SoccerDayCount} from './SoccerDayCount'
import {AddDayForm} from './AddDayForm'
import { Menu } from './Menu'



export class App extends Component {
    constructor(props) {
        super(props);
        //app initial state default
        this.state= {
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
    }

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
    }

    render(){
        return (
            <div className="app">
                <Menu />
                {
                    //set url
                    (this.props.location.pathname) === '/' ?
                    <SoccerDayCount total={this.countDays()}
                                    sunny={this.countDays('sunny')}
                                    rainy={this.countDays('rainy')}
                    /> :
                    //set url
                    (this.props.location.pathname === '/add-day') ?
                        <AddDayForm /> :
                        <SoccerDayList
                            days={this.state.allSoccerDays}
                            //filter days
                            filter={this.props.params.filter}
                        />
                }
            </div>
        )
    }
}