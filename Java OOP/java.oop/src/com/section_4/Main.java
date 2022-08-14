package com.section_4;

public class Main {

    /* Polymorphism */

    public static void main(String[] args) {
        System.out.println("Polymorphism");
        Contact c1 = new Contact("sithija","077777","90/2");
        Contact c2 = new Contact("john","075642");
        Contact c3 = new Contact("kaveesha");

        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
    }
}
