import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
    aadharNumber: String,
    admissionDate: Date,
    branchName: String,
    dob: Date,
    fatherName: String,
    mobileNumber: String,
    motherName: String,
    name: String    
});


const studentModel = mongoose.models.students || mongoose.model('students', studentsSchema);

export default studentModel;