import { Component } from 'react'
import { SoccerDayList } from './SoccerDayList'
import {SoccerDayCount} from './SoccerDayCount'
import {AddDayForm} from './AddDayForm'
import { Menu } from './Menu'
import JSONdata from '../data.json'
import axios from 'axios';


export class App extends Component {
    constructor(props) {
        super(props);
        //app initial state default
        this.state= {
            allSoccerDays: JSONdata.displayAllSoccerDays
        };

        //store json data on variable
        let apiUrl = JSONdata.displayAllSoccerDays;
        console.log(apiUrl);

        //binding methods in the constructor
        this.addDay = this.addDay.bind(this);
    }

    //addDay ()
    addDay(newDay) {
        /*************************************************************************************************************
                                                   //Broke
        //*************************************************************************************************************/

        // //Update/Post data
        // axios.post(this.apiUrl, newDay)
        //     .then((res) => {
        //         //We do not have to reload data when there is a newTodo, we just push to the existing array
        //         this.state.allSoccerDays.push(res.data);
        //         this.setState({allSoccerDays: this.state.allSoccerDays});
        //     });


        /********************************************* ****************************************************************/

        /**PROBLEM*/
        //State  updates fine but changes are lost on page reload
        this.setState({
            allSoccerDays: [
                // ES6 spread (...) operator takes all of the existing days that are held in state
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
                {/*<h1>{JSONdata.allSoccerDays[3].location}</h1>,*/}
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