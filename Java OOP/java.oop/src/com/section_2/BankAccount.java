package com.section_2;

public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public String getOwner() {
        return owner;
    }

    public double getBalance() {
        return balance;
    }

    public void withdraw(double amount) {
        if(amount <= this.balance) {
            this.balance = this.balance - amount;
            System.out.println("withdrawn amount :" + amount);
        }
    }

    public void deposit(double amount) {
        if(amount > 0) {
            this.balance = this.balance + amount;
            System.out.println("deposited amount :" + amount);
        }
    }
}
