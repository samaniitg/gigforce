import User from "../models/user.js";

// Handel user profile
export const userProfile = async (req, res) => {
    const userID = req.user;

    const user = await User.findById({ _id: userID });

    res.status(200).json({
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            phone_no: user.phone_no,
            address: user.address,
            date: user.date,
        },
    });
};
