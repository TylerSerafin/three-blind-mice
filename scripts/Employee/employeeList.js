//Import list of Employee's, function to render HTML, and Render.
import { employeeHtmlRepresentation } from "./Employee.js";
import { useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "../Computer/computerDataProvider.js";

const contentTarget = document.querySelector("#container")
const computers = useComputers()
const render = Employees => {

    contentTarget.innerHTML = Employees.map( (currentEmployee) => {
        const foundComputer = computers.find( computer => computer.id === currentEmployee.computerId)

        return employeeHtmlRepresentation(currentEmployee, foundComputer)
    }

    ).join("")
}


export const EmployeeList = () => {
   const employees = useEmployees()

   render(employees)
}