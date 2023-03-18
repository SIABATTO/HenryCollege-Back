const {Students, Course} = require("../../db")


const createStudent = async(info) =>{
    const{firstName,lastName,email,password,phone, id} = info
    const newStudent = await Students.create({
        firstName,
        lastName,
        email,
        password,
        phone,
        id
    })
return newStudent
}
module.exports = createStudent