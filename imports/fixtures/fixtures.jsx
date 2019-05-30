import { Meteor } from 'meteor/meteor';
import { Countries } from '../api/countries'

Meteor.startup(() => {
  if (Countries.find().count() === 0) {
    const data = [
      {
        state: 'Greenland',
        stats: {
        	area: 1,
        	population: 1,
        	GDP: 1

        }
      },
      {
        state: 'Canada',
        stats: {
        	area: 1,
        	population: 1,
        	GDP: 1

        }
      },
      {
        state: 'The United States of America',
        stats: {
        	area: 1,
        	population: 1,
        	GDP: 1

        }
      },
      {
      	state: 'Mexico',
      	stats: {
      		area: 1,
      		population: 1,
      		GDP: 1

      	}
      }
    ];

    let timestamp = (new Date()).getTime();

    data.forEach((country) => {
    	Countries.insert({
    		stateName: country.state,
    		stateStats: country.stats,
    		createdAt: new Date(timestamp)
      	});

      	timestamp += 1; // ensure unique timestamp.
    });
  }
});





