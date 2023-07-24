// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

export class G964 {

    public static digPow = (n, p) => {
        var x = n.toString().split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
        return x % n ? -1 : x / n;
    }
}

// pusedo code

//  Imagine you have a magic box called "digPow." This box takes two numbers as input: one number you want to put inside the box (let's call it "n") and another number to be used for a special operation (let's call it "p").

// Now, here's what the magic box does:

// 1. First, it looks at the number "n" you put inside and checks its digits (like the digits in your age or your lucky number).
// 2. Then, it takes each of these digits, and for the first digit, it raises it to the power of "p." For the second digit, it raises it to the power of "p+1." For the third digit, it raises it to the power of "p+2," and so on.
// 3. Next, the magic box adds up all these results (the numbers it got from raising the digits to the powers).
// 4. Now, the magic box wants to see if there's a special number "k" that, when you multiply it by the number "n," it gives you the same sum it got from adding all the raised digits. If there is such a number "k," the magic box will tell you what it is.

// For example:

// 1. If you put the number 89 in the box and set "p" to 1, the magic box will do the following: 8^1 + 9^2 = 8 + 81 = 89. It got the same number as "n," so it tells you the special number "k" is 1 because 89 * 1 = 89.
// 2. But if you put the number 92 in the box and set "p" to 1, the magic box will do this: 9^1 + 2^2 = 9 + 4 = 13. It's not the same as "n" (92), so it tells you there's no special number "k" that makes 92 * k equal to 13.

// And that's how the magic box called "digPow" works! It tries to find a special number "k" to make the digits' special powers add up to the original number "n."