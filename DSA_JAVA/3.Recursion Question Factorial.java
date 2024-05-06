public class Factorial {
    public static int factorial(int n) {
        // Base case
        if (n == 0 || n == 1) {
            return 1;
        }
        // Recursive step
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        // Example Input
        int n1 = 5;
        System.out.println("Factorial of " + n1 + ": " + factorial(n1));

        // Test Input
        int n2 = 10;
        System.out.println("Factorial of " + n2 + ": " + factorial(n2));
    }
}