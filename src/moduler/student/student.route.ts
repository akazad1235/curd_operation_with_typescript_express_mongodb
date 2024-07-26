import express from 'express';
import { StudentController } from './student.controller';

//create route instance
const router = express.Router();

router.get('/all/student', StudentController.allStudents);
router.get('/single-student/:studentId', StudentController.getSingleStudent);
router.post('/create-student', StudentController.createStudent);

//route itself on type of an object. that's why, no need to export by object
export const StudentRoutes = router;
