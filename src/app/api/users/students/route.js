import { connect } from "@/dbConfig/dbConfig";
import studentModel from "@/models/studentModel";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req) => {
try {
    const reqBody = await req.json();
    console.log('ressssssssss', reqBody);

    const newStudent = new studentModel(reqBody);
    const savedStudent = await newStudent.save();

    return NextResponse.json({
        message: 'New Student add succesfully',
        success: true,
        savedStudent
    })

} catch (error) {
    return NextResponse.json({error: error.message}, {status: 500})
}
}



studentModel

connect();