package com.section_1;

/* Classes & Objects */

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee("sithija",24,175000.00,"piliyandala");
        System.out.printf("employee name : "+ emp1.name);
        emp1.raiseSalary(25000);
        System.out.println(Employee.salary);
    }
}
