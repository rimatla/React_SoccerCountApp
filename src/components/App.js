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
                    location: "Minneapolis",
                    // date: new Date('2/2/2017'),
                    date: '2017-08-11',
                    sunny: true,
                    rainy: false

                },
                {
                    location: "Rio",
                    // date: new Date('3/3/2017'),
                    date: '2017-01-22',
                    sunny: false,
                    rainy: true

                },
                {
                    location: "VA",
                    // date: new Date('5/21/2017'),
                    date: '2017-05-02',
                    sunny: false,
                    rainy: true

                },
                {
                    location: "New York",
                    // date: new Date('5/21/2017'),
                    date: '2017-05-12',
                    sunny: true,
                    rainy: false

                }

            ]
        };
        //bind function in the constructor
        this.addDay = this.addDay.bind(this);
    }

    //addDay ()
    addDay(newDay) {
        this.setState({
            allSoccerDays: [
                // ES6 spread operator takes all of the existing days that are held in state
                // Whether there are two days or 200 days it's going to push those into a new state object and it's also going to add the newDay.
                ...this.state.allSoccerDays,
                newDay
            ]
        })
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
                        <AddDayForm onNewDay={this.addDay} /> :
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