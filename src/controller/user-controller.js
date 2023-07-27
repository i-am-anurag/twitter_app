import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const requestData = { ...req.body };
        const response = await userService.signUp(requestData);

        return res.status(201).json({
            sucess: true,
            message: "Successfully created a new user",
            data: response,
            error: {},
        })
    } catch (error) {
        console.log("Error in creating the User:", error);

        return res.status(500).json({
            sucess: false,
            message: "Someting went wrong",
            data: {},
            error: error,
        })
    }
};

export const singin = async (req, res) => {
    try {
        const requestData = { ...req.body };
        const response = await userService.singin(requestData);

        return res.status(200).json({
            sucess: true,
            message: "User SignedIn sucessfully",
            token: response,
            error: {},
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something Went Wrong',
            token: null,
            errors: error,
        })
    }
};