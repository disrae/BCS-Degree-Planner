import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { userCourses } from "../collections/userCourses"

Meteor.methods({

    'updateUser': function (user) {
        userCourses.update({ "_id": user._id }, user);
        console.log(user.courses)
    }
});