import java.util.Scanner;

public class uri1010 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String line1 = scanner.nextLine();
        String line2 = scanner.nextLine();
        line1 = line1.replace("," , ".");
        line2 = line2.replace(",",".");

//        value1

        String[] lineValues1 = line1.split(" ");
        int code = Integer.parseInt(lineValues1[0]);
        int quantity = Integer.parseInt(lineValues1[1]);
        double value = Double.parseDouble(lineValues1[2]);
        double totalValue1 = quantity * value;

//        value2

        String[] lineValues2 = line2.split( " ");
        int code2 = Integer.parseInt(lineValues2[0]);
        int quantity2 = Integer.parseInt(lineValues2[1]);
        double value2 = Double.parseDouble(lineValues2[2]);
        double totalValue2 = quantity2 * value2;

//        totalValue
        double total = totalValue1 + totalValue2;

        System.out.printf("VALOR A PAGAR: R$ %.2f\n", total);

    }
}
