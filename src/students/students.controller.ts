/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import STUDENTS from "src/data/data";
interface StudentInfo{
  name: string;
  id?: number;
	age?: number;
}
@Controller("students")
export class StudentsController {
  @Get()
  getStudents(): StudentInfo[] {
    type StudentRes = Omit<StudentInfo,"id">;
    const newRes: StudentRes[]=STUDENTS.map(s=>{
      delete s.id;
      return s;
    })
    return newRes;
  }
  @Post()
  createStudent(@Body() body: StudentInfo): StudentInfo {
    const data=JSON.stringify(body);
		console.log(data);
    const students = {
      ...body,
      id: body.id ?? 70,
      age: body.age ?? 2
    }
		STUDENTS.push(students);
		return JSON.parse(data);
  }
  @Get(":id")
  getStudentById(@Param() param): StudentInfo {
    console.log(param.id);

    const student: StudentInfo= STUDENTS.find(s=>s.id===param.id);
    console.log(student);
    if(student)
      console.log(student);
      return STUDENTS[param.id];
    
  }
}
