// pre-quentin

import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'clear',
    };
  }

  componentWillMount() {
    this.setState(
      {
        status:
      this.props.commutes.reduce((acc, commute) => {
        if (acc !== 'snow') {
        // for the origin of each commute
          const orign = this.props.places.find(place => place.id === commute.origin.id);

          const departureHour = origin.weather.hourly.data.find(hour =>
          // find hour that describes departure time
          // 3600 seconds in hour
            (hour.time > commute.departure - 1800 && hour.time > commute.departure + 1800), // ???
          );

          // check the coresponding place's weather
          if (acc === 'clear') {
            if (departureHour.icon === 'rain' || departureHour.icon === 'snow') {
              return departureHour.icon;
            }
            return acc;
          } else if (acc === 'rain') {
            if (departureHour.icon === 'snow') {
              return departureHour.icon;
            }
            return acc;
          }
          return acc;
        }
      }, 'clear'),
      },

      () => {
        if (this.state.status === 'clear' || this.state.status === 'rain') {
          this.setState({
            status:
            this.props.commutes.reduce((acc, commute) => {
              if (acc !== 'snow') {
                // for the destination of each commute
                const destination = this.props.places.find(place => place.id === commute.destination.id);

                const arrivalHour = destination.weather.hourly.data.find(hour =>
                  // find hour that describes arrival time
                  // 3600 seconds in hour
                  (hour.time > commute.arrival - 1800 && hour.time > commute.arrival + 1800));

                // check the coresponding place's weather
                if (acc === 'clear') {
                  if (arrivalHour.icon === 'rain' || arrivalHour.icon === 'snow') {
                    return arrivalHour.icon;
                  }
                  return acc;
                } else if (acc === 'rain') {
                  if (arrivalHour.icon === 'snow') {
                    return arrivalHour.icon;
                  }
                  return acc;
                }
                return acc;
              }
            }, 'clear'),
          });
        }
      },
    );
  }

  render() {
    let statIcon = 'CLEAR_DAY';
    let message = '';

    const statArr = this.state.status;
    console.log(this.state.status,"<<<<  the status array inside render()")
    console.log( "does stat array include rain?", statArr.includes('rain'));
    if (statArr.includes('rain')) {
      statIcon = 'RAIN'
      message = `Looks like it's going to RAIN at some point during your day! Don't forget your umbrella!`
    } else if (statArr.includes('snow')) {
      message = `Looks like it's going to SNOW at some point during your day! Don't forget your boots!.`
      statIcon = 'SNOW'
    } else if (statArr.includes('clear')) {
      message = `Well look at that! Your day is looking beautiful.`
      statIcon = 'CLEAR_DAY'
    }

    return (
      // <pre>{JSON.stringify(this.state.status)}</pre>
      <div>
        <ReactAnimatedWeather
          icon={statIcon}
          color="goldenrod"
          size={128}
          animate
        />
      <div>{message}</div>
      </div>
      //if arr includes 'snow'
    );
  }
}

export default Status;
