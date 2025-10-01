"""
SOLUTIONS for calculator.py

This file contains completed implementations of all the calculator functions.
Try to complete them yourself first using GitHub Copilot!
"""

import math

def add(a, b):
    """Add two numbers together."""
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """Divide a by b."""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def power(a, b):
    """Raise a to the power of b."""
    return a ** b

def square_root(a):
    """Calculate the square root of a."""
    if a < 0:
        raise ValueError("Cannot calculate square root of negative number")
    return math.sqrt(a)

def main():
    """Test the calculator functions."""
    print("Calculator Tests:")
    print(f"10 + 5 = {add(10, 5)}")
    print(f"10 - 5 = {subtract(10, 5)}")
    print(f"10 * 5 = {multiply(10, 5)}")
    print(f"10 / 5 = {divide(10, 5)}")
    print(f"2 ^ 3 = {power(2, 3)}")
    print(f"√16 = {square_root(16)}")
    
    # Test edge cases
    print("\nEdge Cases:")
    try:
        divide(10, 0)
    except ValueError as e:
        print(f"Division by zero: {e}")
    
    try:
        square_root(-1)
    except ValueError as e:
        print(f"Negative square root: {e}")

if __name__ == "__main__":
    main()
