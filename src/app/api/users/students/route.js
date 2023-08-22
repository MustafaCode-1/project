import { connect } from "@/dbConfig/dbConfig";
import studentModel from "@/models/studentModel";
import { NextResponse } from "next/server";


connect();

export const GET = async () => {
    try {
        const newStudent = await studentModel.find({})
        console.log(newStudent)
        return NextResponse.json(newStudent)

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


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
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
// export const DELETE = async (req) => {
//     try {
//         // const reqBody = await req.json();
//         const result = await req.q
//         console.log('ressssssssss', result);

//         // const newStudent = new studentModel(reqBody);
//         // const savedStudent = await newStudent.save();

//         return NextResponse.json({
//             message: 'New Student add succesfully',
//             success: true,
//             // savedStudent
//         })

//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 })
//     }
// }

