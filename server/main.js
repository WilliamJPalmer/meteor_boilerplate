import 'babel-polyfill';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';//this gives access to the webapp behind the scenes
//that serves the content. Allows allows to attach middleware.


import '../imports/startup/simple-schema-configuration';

import '../imports/api/users';


Meteor.startup(() => {

});
