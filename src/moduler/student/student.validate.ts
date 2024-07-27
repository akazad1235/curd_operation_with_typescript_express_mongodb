import { z } from 'zod';

const studentValidateSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  name: z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    middleName: z.string().min(1, { message: 'Middle name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
  }),
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  contactNo: z.string().min(1),
  emergencyContactNo: z
    .string()
    .min(10, { message: 'Emergency contact number must be at least 10 digits' })
    .max(15, { message: "Emergency contact number can't exceed 15 digits" }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z.string().min(1, { message: 'Permanent address is required' }),
  guardian: z.object({
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherContactNo: z
      .string()
      .min(10, { message: "Father's contact number must be at least 10 digits" })
      .max(15, { message: "Father's contact number can't exceed 15 digits" }),
    fatherOccupation: z.string().min(1, { message: "Father's occupation is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherContactNo: z
      .string()
      .min(10, { message: "Mother's contact number must be at least 10 digits" })
      .max(15, { message: "Mother's contact number can't exceed 15 digits" }),
    motherOccupation: z.string().min(1, { message: "Mother's occupation is required" }),
  }),
  profileImage: z.string().url({ message: 'Invalid URL for profile image' }),
  isActive: z.enum(['active', 'inactive']),
});

export default studentValidateSchema;
