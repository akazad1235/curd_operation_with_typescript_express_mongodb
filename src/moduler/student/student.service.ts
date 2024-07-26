import { Student } from './student.interface';
import { StudentModel } from './student.model';

//store data into database
const createStudentIntoDB = async (studentType: Student) => {
  const result = await StudentModel.create(studentType);
  return result;
};
//get all students data
const getAllStudentDataFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// single student get
const getSingleStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentDataFromDB,
  getSingleStudentFromDB,
};
