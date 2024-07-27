import { Model } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  name: TName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};

export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};

// Create a new Model type that knows about IUserMethods...
export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;
