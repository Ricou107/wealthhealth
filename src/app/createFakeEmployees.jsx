import { useDispatch } from 'react-redux';/* Importing the faker library. */
import { faker } from '@faker-js/faker';
import { addMultipleEmployee } from "../app/reducer"
import { useSelector } from "react-redux"


/**
 * It creates a list of 200 employees, then returns the list and a function to add an employee to the
 * list.
 * @returns An array with two elements. The first element is the employees array and the second element
 * is the addEmployee function.
 */
export const useEmployeeTable = () => {
    const employees = useSelector((state) => state?.employees.allEmployees.map((employee) => {
        return employee.newEmployee[0];
    }))
    const emp = [];
    if (employees.length < 20) {
        for (let i = 0; i < 10; i++) {
            const newEmployee = [
                {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    birthDate: faker.date.past().toISOString().slice(0, 10),
                    startDate: faker.date.recent().toISOString().slice(0, 10),
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.stateAbbr(),
                    department: faker.name.jobArea(),
                    zipCode: faker.address.zipCode()
                },
            ];
            emp.push({ newEmployee });
        }
    }
    const dispatch = useDispatch();
    dispatch(addMultipleEmployee(emp));
}