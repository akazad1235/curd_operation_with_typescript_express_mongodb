import { TStudent } from './student.interface';
import { Student } from './student.model';

//store data into database
const createStudentIntoDB = async (studentData: TStudent) => {
  //create model instance
  const student = new Student(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User Already Existing');
  }
  //const result = await Student.create(studentData); //built in method into mongoose
  const result = await student.save(); //built in instant method
  return result;
};
//get all students data
const getAllStudentDataFromDB = async () => {
  const result = await Student.find();
  return result;
};
// single student get
const getSingleStudentFromDB = async (studentId: string) => {
  const result = await Student.findOne({ id: studentId });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentDataFromDB,
  getSingleStudentFromDB,
};
