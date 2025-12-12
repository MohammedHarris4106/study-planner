import express from 'express';
import { createStudyPlan , getStudyPlans,editStudyPlan,deleteStudyPlan } from '../controllers/studyPlanController.js'


const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan', getStudyPlans);
router.put('/studyplan/:id', editStudyPlan); // Assuming update is handled by the same controller function
router.delete('/studyplan/:id', deleteStudyPlan); // Assuming delete is handled by the same controller function


export default router;