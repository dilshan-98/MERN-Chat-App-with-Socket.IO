const userRegister = async (req, res) => {
    res.status(201).json({msg: "Successfully registered"});
}

const login = async (req, res) => {
    res.status(200).json({msg: "Login successful"});
}

export {userRegister, login};