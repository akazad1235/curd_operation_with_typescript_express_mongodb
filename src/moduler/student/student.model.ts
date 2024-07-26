import mongoose, { Schema, model } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';

//create sub user name schema
const userNameSchema = new Schema <Name>({
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true}
})
// create sub schema for guardian
const guardianSchema = new Schema <Guardian>({
    fatherName: {type: String, required: true},
    fatherContactNo: {type: String, required: true},
    fatherOccupation: {type: String, required: true},
    motherName: {type: String, required: true},
    motherContactNo: {type: String, required: true},
    motherOccupation: {type: String, required: true}
})

//create main student schema
const studentSchema = new Schema <Student>({
    id: {type: String, required: true},
    name: userNameSchema,
    gender: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    email: {type: String, required: true},
    contactNO: {type: String, required: true},
    emergencyContactNo: {type: String, required: true},
    bloodGroup: ["A+" , "A-" ,"B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true},
    guardian: guardianSchema,
    profileImage: {type: String, required: true},
    isActive: ['active', 'inactive']
})

// create a model
export const StudentModel = model<Student>('Student', studentSchema)



