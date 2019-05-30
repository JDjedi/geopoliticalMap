import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'; 


export const Countries = new Mongo.Collection('countries') // this argument names the collection

if (Meteor.isServer) {
	Meteor.publish('countries', function() {
		return Countries.insert({name: 'The United States'})
	});
}


