import { Router } from 'express';
import { Activity } from '../models/activity.model';

export const activities = Router();

// Get all activities
activities.get('/', (req, res, next) => {
    Activity
    .findAll()
    .then((data) => {
        return res.json(data);
    })
    .catch((error) => {
        console.log(error);
        return error;
    })
});


// Add an activity
activities.post('/', async (req, res, next) => {
    try {
        console.log('req.body', req.body);
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    } catch (error) {
        next(error);
    }
});