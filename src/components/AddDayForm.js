import { PropTypes, Component } from 'react'

const soccerLocations = [
    "Edina",
    "VA",
    "Bloomington",
    "Paraty",
    "Minneapolis",
    "New York",
    "Rio"
];

//create auto complete component
class AutoComplete extends  Component {
    //get is going to grab the value of whatever our ref is
    get value() {
        return this.refs.inputSoccerLocation.value;
    }

    //set value is going to set the value of the ref to whatever the input value is.
    set value(inputValue) {
        this.refs.inputSoccerLocation.value = inputValue;
    }

    render() {
        return (
            <div>
                <input ref="inputSoccerLocation" type="text" list="soccer-locations"/>
                <datalist id="soccer-locations">
                    {this.props.options.map (
                        //callback ()
                        (opt, i) => <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>

        )
    }
}

export const AddDayForm = ( {location, date, sunny, rainy, onNewDay } ) => {
    //initialize variables
    let _location, _date, _sunny, _rainy;
    const submit = (e) => {
        e.preventDefault();
         onNewDay({
             location: _location.value,
             date: _date.value,
             sunny: _sunny.checked,
             rainy: _rainy.checked
         });

        _location.value = '';
        _date.value = '';
        _sunny.checked = false;
        _rainy.checked = false;

        // console.log('location', _location.value);
        // console.log('date', _date.value);
        // console.log('sunny', _sunny.checked);
        // console.log('rainy', _rainy.checked);
    };

    /**alertReact()*/
    // const alertMe = () => {
    //     alert('good');
    // }


    return (
        <form onSubmit={submit} className="add-day">
            <label htmlFor="location">Soccer Location</label>
            {/*<input id="location" type="text" required defaultValue={location} ref={input  => _location = input}/>*/}
            <AutoComplete options={soccerLocations} ref={input  => _location = input}/>


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
            <button  className="add-btn">Add Day</button>
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