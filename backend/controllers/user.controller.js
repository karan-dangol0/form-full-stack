import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;
        const emailExits = await User.findOne({ email });
        if (emailExits) {
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        };

        const phoneExits = await User.findOne({ phoneNumber });
        if (phoneExits) {
            return res.status(400).json({
                success: false,
                message: "Phone number already exits"
            })
        }
        const user = new User({ firstName, lastName, email, phoneNumber });
        // if()
        await user.save();
        res.status(201).json({
            success: true, 
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });


        
    } catch (error) {
        next(error);
    }
}


