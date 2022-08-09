package com.section_2;

/* Encapsulation */

public class Main {
    public static void main(String[] args) {
        BankAccount bankAccount = new BankAccount("Sithija",600000.00);
        bankAccount.withdraw(200000.00);
        System.out.println("bank balance :"+bankAccount.getBalance());
        bankAccount.deposit(600.00);
        System.out.println("bank balance :"+bankAccount.getBalance());
    }
}
