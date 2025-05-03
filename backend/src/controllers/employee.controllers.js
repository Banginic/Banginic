import EmployeeModel from "../models/employee.model.js";
import asyncHandler from "../middlewares/asyncMiddleware.js";

// CREATE EMPLOYEE /api/v2/employees/create
export const createEmployee = asyncHandler(async (req, res) => {
  const { fullName, position, qualification, motivation, socialLinks, photo } =
    req.body;
  const existEmployee = await EmployeeModel.findOne({fullName});
  if (existEmployee)
    return res
      .status(400)
      .json({ success: false, message: "Employee already exist" });

  const newEmployee = await EmployeeModel.create({
    fullName,
    position,
    qualification,
    socialLinks,
    motivation,
    photo,
  });
  await newEmployee.save();
  return res
    .status(201)
    .json({ success: true, message: "Employee created successfully" });
});

// GET ALL EMPLOYEES /api/v2/employees/list
export const getEmployees = asyncHandler(async (req, res) => {
  const employees = await EmployeeModel.find({});
  if (!employees)
    return res.json({
      success: false,
      message: "No Employee found, Please add Employee",
    });

  return res.status(200).json({ success: true, message: "Success" });
});

// REMOVE EMPLOYEE /api/v2/employees/:employeeId
export const deleteEmployee = asyncHandler(async (req, res) => {
  const { employeeId } = req.params;
  if (!employeeId)
    return res
      .status(400)
      .json({ success: false, message: "Please submit employee ID" });

  const employee = await EmployeeModel.findById(employeeId);
  if (!employee)
    return res
      .status(404)
      .json({ success: false, message: "No employee found with this ID" });

  await EmployeeModel.findByIdAndDelete(employeeId);
  return res.json({ success: true, message: "Employee deleted successfully" });
});
