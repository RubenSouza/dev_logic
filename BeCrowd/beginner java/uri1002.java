import java.util.Scanner;

public class uri1002 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double n = 3.14159;
        double r = scanner.nextDouble();
        double a = n * (r * r);
        System.out.printf("A=%.4f\n",a);
    }
}
