const User = require('../models/user');
const Test_score = require('../models/user_profile');

module.exports = {

    index: async(req, res, next) => {
            const users = await User.find({});
            res.status(200).json(users);
    },

    newUser: async(req, res, next) => {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(201).json(user);
},

getUser: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(201).json(user);
},

replaceUser: async(req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser)
    res.status(201).json({ sucess: true});
},

updateUser: async(req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser)
    res.status(201).json({ sucess: true});
},

getUserTest_scores: async(req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('test_scores');
    console.log(user);
    res.status(201).json(user.test_scores);
},
newUserTest_scores: async(req, res, next) => {
    const { userId } = req.params; 
    const newTest_score = new Test_score(req.body);
    // console.log(newTest_score);
    const user = await User.findById(userId);
    newTest_score.users = user;
    await newTest_score.save();

    user.test_scores.push(newTest_score);
    await user.save();

    res.status(201).json(newTest_score);

}

// getUserTest_scoresAvg: async(req, res, next) => {
//     const { userId } = req.params;
//     const val1 = await User.findById(userId).populate('test_scores');
//     const val2 = await User.findById(userId).populate('test_scores');
//     const val3 = await User.findById(userId).populate('test_scores');
//     const v1 = val1.test_scores.first_round;
//     const average = (val1 + val2 + val3)/3
//     console.log(average);
//     // res.status(201).json(user.test_scores);
// }

};


        // res.status(200).json({
        //     message: 'you requested index page'
        // });
//     }
// }