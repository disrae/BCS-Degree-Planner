import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import { Users } from "../imports/collections/users";
import _ from "lodash";

const shortid = require("shortid");

Meteor.startup(() => {

  // console.log(process.env.MONGO_URL);
  // process.env.MONGO_URL = "mongodb://m001-student:m001-mongodb-basics@cluster0-n7b3j.mongodb.net/bcsdn?retryWrites=true&w=majority"
  // Check to see if data exists in the collection
  const numRecords = Users.find().count();
  const users = Users.find().fetch();

  console.log(users)
  console.log(numRecords);

  if (numRecords == 0) {
    Users.insert({
      "email": "test1@gmail.com",
      "firstName": "Good",
      "lastName": "Student",
      "creditsEarned": 0,
      "bridgingCpscCounter": 0,
      "electiveCounter": [3, 0], // counts num 300, 400 electives
      "exemptionLevels": [100, 200, 300], // update this when adding exemption and sort it
      "requirements": {
        "core":
        {
          CPSC: [
            { "110": "incomplete" },
            { "121": "incomplete" },
            { "210": "incomplete" },
            { "221": "incomplete" },
            { "213": "incomplete" },
            { "310": "incomplete" },
            { "313": "incomplete" },
            { "320": "incomplete" }
          ],
          "ENGL": "incomplete",
          "MATH": "incomplete",
          "STAT": "incomplete",
          "COMM": "incomplete"
        },
        "elective": [0, 0], // elective[0] is num <400 completed
        "bridging": [0, 0], // bridging[0] is cpsc bridging courses completed
        "replacements": [100, 100, 200] // list of min course levels that can be used to replace
      },
      "courses": [
        { "type": "core", "dept": "CPSC", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "CPSC", "num": 210, "id": shortid.generate() },
        { "type": "core", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 302, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 305, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 306, "id": shortid.generate() },
        { "type": "exemptions", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "exemptions", "dept": "STAT", "num": 200, "id": shortid.generate() },
        { "type": "exemptions", "dept": "MATH", "num": 180, "id": shortid.generate() },
        { "type": "replacement", "dept": "MATH", "num": 221, "id": shortid.generate() },
        { "type": "replacement", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "replacement", "dept": "DSCI", "num": 100, "id": shortid.generate() }
      ] // end courses
    }) // end user; //)
  }

  Meteor.publish("courses", function () {
    return Courses.find({});
  });

  Meteor.publish("users", function () {
    // console.log(Users.find().fetch());
    return Users.find();
  });
});
