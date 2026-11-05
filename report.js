import { students } from "./data.js";


export const withStatus=students=>{
    const studentsWithStatus=[];

    for(const student of students)
    {
        studentsWithStatus.push(student.grade>=56?{...student,status:"Pass"}:{...student,status:"Fail"})
    }
    return studentsWithStatus;
}

