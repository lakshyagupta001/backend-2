import User from '../models/user.models.js';

export const createUserDAO = async (payload) => User.create(payload);

export const findUserByEmailDAO = async (email) => User.findOne({ email });

export const findUserByEmailWithPasswordDAO = async (email) =>
    User.findOne({ email }).select('+password');

export const getAllUsersDAO = async () =>
    User.find({}, { password: 0 }).sort({ createdAt: -1 });
