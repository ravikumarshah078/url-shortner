import shortid from "shortid";
import User from "../models/User.js";

/** REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            email
        } = req.body;

        const token = shortid.generate();

        const user = await User.findOne({ email });
        if (user) {
            const updateToken = await User.findByIdAndUpdate(
                user._id,
                { token: token},
                { new: true }
            );
            return res.status(200).json(updateToken);
        }

        const newUser = new User({
            email,
            token,
        });
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
