import { Router } from 'express';
import SurveyController from '../controllers/surveyController';

const router = Router();
const surveyController = new SurveyController();

export function setFeedbackRoutes(app) {
    app.use('/api/feedback', router);

    router.post('/', surveyController.submitFeedback);
    router.get('/:surveyId', surveyController.getFeedbackBySurveyId);
}