import { EmployeeList } from "./Employee/employeeList.js";
import { getEmployees } from "./Employee/EmployeeDataProvider.js";

getEmployees()
.then(EmployeeList)