public class MissingNumberFinder {
    public static int findMissingNumber(int[] nums) {
        int n = nums.length + 1;
        int expectedSum = (n * (n + 1)) / 2;
        int actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        int missingNumber = expectedSum - actualSum;
        return missingNumber;
    }

    public static void main(String[] args) {
        // Example Input
        int[] inputArray = {1, 2, 3, 4, 6, 7, 8};
        System.out.println("Missing Number: " + findMissingNumber(inputArray));

        // Test Input
        int[] testInputArray = {1, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("Missing Number: " + findMissingNumber(testInputArray));
    }
}