import Customer from '../model/userModel.js';  

const getAllUsers = async (req, res) => {
    try {
        const Customers = await Customer.find();
        res.status(200).json({message: "successfull get the user Data...", Customer})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default { getAllUsers };
