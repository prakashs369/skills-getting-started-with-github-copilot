"""
A simple calculator module for demonstrating GitHub Copilot.

This module provides basic arithmetic operations.
Use GitHub Copilot to complete the functions below.
"""

import math

# No additional code needed here. All functions are defined below.
def add(a, b):
    """
    Adds two numeric values and returns their sum.

    Parameters:
        a (int or float): The first number to add.
        b (int or float): The second number to add.

    Returns:
        int or float: The sum of a and b.

    Example:
        >>> add(2, 3)
        5
    """
    """Add two numbers together."""
    return a + b

def subtract(a, b):
    """
    Subtracts the second number from the first number.

    Args:
        a (float or int): The number from which to subtract.
        b (float or int): The number to subtract.

    Returns:
        float or int: The result of a minus b.
    """
    """Subtract b from a."""
    return a - b

def multiply(a, b):
    """
    Multiply two numbers and return the result.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The product of a and b.
    """
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """
    Divides two numbers and returns the result.

    Args:
        a (float or int): The numerator.
        b (float or int): The denominator.

    Returns:
        float: The result of dividing a by b.
        None: If b is zero.

    Examples:
        >>> divide(10, 2)
        5.0
        >>> divide(5, 0)
        None
    """
    """Divide a by b."""
    if b == 0:
        return None
    return a / b

def power(a, b):
    """
    Raises the base number `a` to the exponent `b`.

    Parameters:
        a (int or float): The base number.
        b (int or float): The exponent to raise the base to.

    Returns:
        int or float: The result of `a` raised to the power of `b`.

    Example:
        >>> power(2, 3)
        8
    """
    """Raise a to the power of b."""
    return a ** b

def square_root(a):
    """
    Calculate the square root of a number.

    Args:
        a (float or int): The number to calculate the square root of.

    Returns:
        float: The square root of the input number.

    Raises:
        ValueError: If 'a' is negative.
    """
    """Calculate the square root of a."""
    return math.sqrt(a)
    # Hint: You may need to import math module
    pass

def main():
    """
    Runs a series of calculator operation tests and prints the results.

    This function demonstrates the usage of various arithmetic operations,
    including addition, subtraction, multiplication, division, exponentiation,
    square root, modulus, absolute value, maximum, minimum, and rounding.
    The results of each operation are printed to the console.
    """
    print("Calculator Tests:")
    print("=================")
    print("10 + 5 =", add(10, 5))
    print("10 - 5 =", subtract(10, 5))
    print("10 * 5 =", multiply(10, 5))
    print("10 / 5 =", 10 / 5)
    print("10 ^ 2 =", 10 ** 2)
    print("Square root of 25 =", 25 ** 0.5)
    # Additional test cases
    print("7 % 3 =", 7 % 3)
    print("Absolute value of -42 =", abs(-42))
    print("Max of 8 and 12 =", max(8, 12))
    print("Min of 8 and 12 =", min(8, 12))
    print("Round 3.14159 to 2 decimals =", round(3.14159, 2))

if __name__ == "__main__":
    main()
