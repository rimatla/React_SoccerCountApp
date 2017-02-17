import React from 'react';
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'


import { Router, Route, hashHistory } from 'react-router'


// import { App } from './components/App-createClass'
// import { SoccerDayList } from './components/SoccerDayList'
// import {SoccerDayCount} from './components/SoccerDayCount-createClass'
// import {SoccerDayCount} from './components/SoccerDayCount-ES6'
// import {SoccerDayCount} from './components/SoccerDayCount'


//For older react versions, the main requirement is that window.React is set. If you're using a module system:
window.React = React;

render (
    //display data from properties
    //<SoccerDayCount/>,
   //<SoccerDayList/>,
   //<App/>,

    //React Routes
    <Router history={hashHistory}>
        <Route path="/" component={App} />

        <Route path="list-days" component={App} >
               <Route path=":filter" component={App} />
        </Route>

        <Route path="add-day" component={App} />

        <Route path="*" component={Whoops404} />
    </Router>,
    document.getElementById('react-container')
);


{/*<SoccerDayCount*/}
    {/*total={50}*/}
    {/*powder={20}*/}
    {/*backcountry={10}*/}
    {/*goal={100}*/}
{/*/>,*/}