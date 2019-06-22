const shortid = require('shortid');
const initState = {
    "users": [

        { "email": "test1@gmail.com", "firstName": "test1", "lastName":"test1" },
        { "email": "test2@gmail.com", "firstName": "test2", "lastName":"test2" },
        { "email": "test3@gmail.com", "firstName": "test3", "lastName":"test3" }
    ],
    "courses": {
        "core": [
            { "type": "core", "dept": "CPSC", "num": 110, "id": shortid.generate() },
            { "type": "core", "dept": "CPSC", "num": 210, "id": shortid.generate() },
            { "type": "core", "dept": "ENGL", "num": 110, "id": shortid.generate() },
            { "type": "core", "dept": "MATH", "num": 200, "id": shortid.generate() }
        ],
        "bridging": [
            { "type": "bridging", "dept": "STAT", "num": 302, "id": shortid.generate() },
            { "type": "bridging", "dept": "STAT", "num": 305, "id": shortid.generate() },
            { "type": "bridging", "dept": "STAT", "num": 306, "id": shortid.generate() }
        ],
        "exemptions": [
            { "type": "exemptions", "dept": "ENGL", "num": 110, "id": shortid.generate() },
            { "type": "exemptions", "dept": "STAT", "num": 200, "id": shortid.generate() },
            { "type": "exemptions", "dept": "MATH", "num": 108, "id": shortid.generate() }
        ],
        "replacements": [
            { "type": "replacements", "dept": "MATH", "num": 221, "id": shortid.generate() },
            { "type": "replacements", "dept": "MATH", "num": 200, "id": shortid.generate() },
            { "type": "replacements", "dept": "DSCI", "num": 100, "id": shortid.generate() }
        ]
    }
}

const rootReducer = (state = initState, action) => {
    console.log(state)
    if (action.type === 'DELETE_COURSE') {

        let core = state.courses.core.filter(currCourse => {
            return currCourse.id !== action.course.id
        });
        let bridging = state.courses.bridging.filter(currCourse => {
            return currCourse.id !== action.course.id
        });
        let exemptions = state.courses.exemptions.filter(currCourse => {
            return currCourse.id !== action.course.id
        });
        let replacements = state.courses.replacements.filter(currCourse => {
            return currCourse.id !== action.course.id
        });
        console.log("you deleted " + action.course.dept + " " + action.course.num)
        return {
            ...state,
            "courses": { core, bridging, exemptions, replacements }
        }
    }
    if (action.type === 'ADD_USER') {
        console.log(action.user)
        let newUsers = [...state.users, action.user]
        console.log(newUsers)
        return {
            ...state,
            "users": newUsers
        }
    }
    return state; 
}

export default rootReducer