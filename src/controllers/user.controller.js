import {
	registerUserService,
	loginUserService,
	getAllUsersService,
} from '../services/user.service.js';

export const registerUser = async (req, res) => {
	const data = await registerUserService(req.body);

	res.status(201).json({
		status: 'success',
		message: 'user registered',
		data,
	});
};

export const loginUser = async (req, res) => {
	const data = await loginUserService(req.body);

	res.status(200).json({
		status: 'success',
		message: 'login successful',
		data,
	});
};

export const getAllUsers = async (req, res) => {
	const users = await getAllUsersService();

	res.status(200).json({
		status: 'success',
		results: users.length,
		data: {
			users,
		},
	});
};
