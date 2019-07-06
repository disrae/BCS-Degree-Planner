import { createContainer } from "meteor/react-meteor-data";
import { Courses } from "../../../../imports/collections/courses";
import React, { Component } from "react";
import { deleteCourse } from "../../actions/courseActions";

const shortid = require("shortid");

class CourseList extends Component {
  handleDelete = course => {
    Courses.remove(course._id);
  };

  makeView = course => {
    return (
      <div
        key={shortid.generate()}
        className="col s12 left-align collection-item z-depth-1 white section"
      >
        <ul key={shortid.generate()}>
          <li key={course._id}>
            {course.dept}: {course.num}
            <button
              className="btn-flat right delete"
              onClick={() => this.handleDelete(course)}
            >
              <i className="small material-icons right">clear</i>
            </button>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const courses = this.props.courses;
    console.log(this.props);
    console.log(courses);

    const postCore = courses ? (
      courses.map(course => {
        if (course.type == "core") {
          return this.makeView(course);
        }
      })
    ) : (
        <div className="">
          <h6 className="left-align"> No Courses</h6>
        </div>
      );

    const postBridging = courses ? (
      courses.map(course => {
        if (course.type == "bridging") return this.makeView(course);
      })
    ) : (
        <div className="courses container">
          <h6 className="left-align" />
        </div>
      );

    const postExemptions = courses ? (
      courses.map(course => {
        if (course.type == "exemptions") return this.makeView(course);
      })
    ) : (
        <div className="courses container">
          <h6 className="left-align" />
        </div>
      );

    const postReplacements = courses ? (
      courses.map(course => {
        if (course.type == "replacements") {
          console.log(course);
          return this.makeView(course);
        }
      })
    ) : (
        <div className="courses container">
          <h6 className="left-align" />
        </div>
      );

    return (
      <div className="center">
        <h4>Courses</h4>
        <p className="flow-text">Core</p>
        {postCore}
        <p className="flow-text">Bridging</p>
        {postBridging}
        <p className="flow-text">Exemptions</p>
        {postExemptions}
        <p className="flow-text">Exemption Replacements</p>
        {postReplacements}
      </div>
    );
  }
}

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("courses");
  // Return an object as props
  return { courses: Courses.find({}).fetch() };
}, CourseList);

