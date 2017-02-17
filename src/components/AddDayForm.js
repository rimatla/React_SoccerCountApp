import { PropTypes, Component } from 'react'
import '../stylesheets/ui.scss'

export const AddDayForm = ( {location, date, sunny, rainy } ) => {
    //initialize variables
    let _location, _date, _sunny, _rainy;
    const submit = (e) => {
        e.preventDefault();
        console.log('location', _location.value);
        console.log('date', _date.value);
        console.log('sunny', _sunny.checked);
        console.log('rainy', _rainy.checked);
    };

    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="location">Soccer Location</label>
            <input id="location" type="text" required defaultValue={location} ref={input  => _location = input}/>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" required defaultValue={date} ref={input  => _date = input}/>
            <div>
                <input id="sunny" type="checkbox" defaultChecked={sunny} ref={input  => _sunny = input}/>
                <label htmlFor="sunny">Sunny Day</label>
            </div>
            <div>
                <input id="sunny" type="checkbox" defaultChecked={rainy} ref={input  => _rainy = input}/>
                <label htmlFor="rainy">Rainy Day</label>
            </div>
            <button>Add Day</button>
        </form>
    )
};

AddDayForm.defaultProps = {
    location: "Pickup",
    date: '2017-01-05',
    sunny: true,
    rainy: false
};

AddDayForm.propTypes = {
    location: PropTypes.string.isRequired,
    //date: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.string.isRequired,
    sunny: PropTypes.bool.isRequired,
    rainy: PropTypes.bool.isRequired
};