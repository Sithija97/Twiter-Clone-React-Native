package com.section_3;

public class SalesPerson extends Employee{
    private double CommisionPercentage;

    public SalesPerson(String name, int age, double salary, double commisionPercentage) {
        super(name, age, salary);
        CommisionPercentage = commisionPercentage;
    }

    public double getCommisionPercentage() {
        return CommisionPercentage;
    }
}
