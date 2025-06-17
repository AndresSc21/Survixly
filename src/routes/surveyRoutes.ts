import { Router } from 'express';
import SurveyController from '../controllers/surveyController';

const router = Router();
const surveyController = new SurveyController();

export function setSurveyRoutes(app) {
    app.use('/api/surveys', router);

    router.post('/', surveyController.createSurvey.bind(surveyController));
    router.get('/', surveyController.getSurveys.bind(surveyController));
    router.post('/:surveyId/feedback', surveyController.submitFeedback.bind(surveyController));
}