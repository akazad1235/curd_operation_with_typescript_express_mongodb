import express, { Request, Response } from 'express';
import { StudentServices } from './student.service';

const allStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentDataFromDB();
    res.status(200).json({
      success: true,
      message: 'Student data fetch successfully',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Student data fetch successfully hello azad',
      data: null,
    });
  }
};
const createStudent = async (req: Request, res: Response) => {
  try {
    //receive user requested form data
    const formData = req.body;
    //services function call
    const result = await StudentServices.createStudentIntoDB(formData);

    //response send to user
    res.status(200).json({
      success: true,
      message: 'Student created is successfully hello there',
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};

//get single student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    //call service for student data
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student data fetch successfully',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: true,
      message: err,
      data: null,
    });
  }
};
export const StudentController = {
  createStudent,
  allStudents,
  getSingleStudent,
};
