import java.util.Arrays;

public class RotateArray {
    public static void rotate(int[] nums, int k) {
        // Handling cases where k might be larger than the length of the array
        k = k % nums.length;
        
        // Reverse the entire array
        reverse(nums, 0, nums.length - 1);
        // Reverse the first k elements
        reverse(nums, 0, k - 1);
        // Reverse the remaining elements
        reverse(nums, k, nums.length - 1);
    }
    
    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        // Example Input
        int[] inputArray1 = {1, 2, 3, 4, 5, 6, 7};
        int k1 = 3;
        rotate(inputArray1, k1);
        System.out.println("Rotated Array: " + Arrays.toString(inputArray1));

        // Test Input
        int[] inputArray2 = {3, 8, 9, 2, 5};
        int k2 = 2;
        rotate(inputArray2, k2);
        System.out.println("Rotated Array: " + Arrays.toString(inputArray2));
    }
}