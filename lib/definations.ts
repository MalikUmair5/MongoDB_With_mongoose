export interface IUser extends Document {
  name: string;
  email: string;
  dateOfBirth?: Date;
  contactNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface registerUser {
  name: string;
  email: string;
  dateOfBirth: Date;
  contactNumber: string;
}