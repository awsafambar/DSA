Sum of all Submatrices of a Given Matrix
Given a NxN 2-D matrix, the task to find the sum of all the submatrices.
Input 1: arr[] = {{1, 1}, {1, 1}};
Output 1: 16
Explanation 1:
Number of sub-matrices with 1 elements = 4
Number of sub-matrices with 2 elements = 4
Number of sub-matrices with 3 elements = 0
Number of sub-matrices with 4 elements = 1
Since all the entries are 1, the sum becomes sum = 1 * 4 + 2 * 4 + 3 * 0 + 4 * 1 = 16

Input 2: arr[] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
Output 2: 500

n == nums.length
1 <= n <= 102
