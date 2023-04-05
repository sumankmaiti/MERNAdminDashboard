import User from '../models/Users.js'

const getUser = async (req, res) => {
    try{
		const { id } = req.params
		console.log(id);
		const user = await User.findById(id)
		res.status(200).json(user)
	} catch (error) {
		res.status(404).json(error)
	}
    
}

export default getUser