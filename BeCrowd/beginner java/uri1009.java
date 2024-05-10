import java.util.Scanner;

public class uri1009 {
    public static void main(String[] args) {
        Scanner scanner  = new Scanner(System.in);
        String seller = scanner.nextLine();
        double fixedSalary = scanner.nextDouble();
        double totalSold = scanner.nextDouble();
        double percentage = 85.0 / 100.0;
        double bonus = totalSold - (percentage * totalSold);
        double total = fixedSalary + bonus;

        System.out.printf("TOTAL = R$ %.2f\n", total);

    }
}
