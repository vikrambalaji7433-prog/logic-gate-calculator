# Signed vs Unsigned Integer Guide

## Overview
The Logic Gate Based Calculator now supports both **signed** and **unsigned** 8-bit integer operations, demonstrating how computers handle positive and negative numbers at the hardware level.

---

## 🔢 Number Representations

### Unsigned Integers (Default)
- **Range**: 0 to 255
- **All bits represent magnitude**
- **No negative numbers possible**

#### Examples:
```
Binary      Unsigned Decimal
00000000    0
00000001    1
01111111    127
10000000    128
11111111    255
```

### Signed Integers (Two's Complement)
- **Range**: -128 to 127
- **MSB (leftmost bit) is the sign bit**
  - 0 = Positive number
  - 1 = Negative number
- **Negative numbers use two's complement representation**

#### Examples:
```
Binary      Signed Decimal    Explanation
00000000    0                 Positive (MSB=0)
00000001    1                 Positive
01111111    127               Largest positive (MSB=0)
10000000    -128              Most negative (MSB=1)
10000001    -127              Negative (MSB=1)
11111110    -2                Negative
11111111    -1                Negative
```

---

## 🧮 Two's Complement Explained

### What is Two's Complement?
A method to represent negative numbers in binary that makes arithmetic operations work uniformly for both positive and negative numbers.

### How to Convert: Positive to Negative

**Example: Convert +5 to -5**

1. **Start with positive number:**
   ```
   +5 = 00000101
   ```

2. **Invert all bits (NOT operation):**
   ```
   11111010  (1's complement)
   ```

3. **Add 1:**
   ```
   11111010
   +      1
   --------
   11111011  = -5 in two's complement
   ```

### How to Convert: Negative to Positive

**Example: What is 11111011?**

1. **Check MSB:** 1 = negative number

2. **Invert all bits:**
   ```
   00000100
   ```

3. **Add 1:**
   ```
   00000100
   +      1
   --------
   00000101  = 5
   ```

4. **Result:** 11111011 = -5

---

## 📊 Operation Examples

### Addition Examples

#### Unsigned Addition
```
  00001010  (10)
+ 00000110  (6)
-----------
  00010000  (16) ✓
```

#### Signed Addition (Positive + Positive)
```
  00001010  (+10)
+ 00000110  (+6)
-----------
  00010000  (+16) ✓
```

#### Signed Addition (Positive + Negative)
```
  00001010  (+10)
+ 11111010  (-6)
-----------
  00000100  (+4) ✓
Carry is discarded in two's complement
```

#### Signed Addition (Negative + Negative)
```
  11111010  (-6)
+ 11111100  (-4)
-----------
  11110110  (-10) ✓
```

### Subtraction Examples

#### Unsigned Subtraction
```
  00001100  (12)
- 00000101  (5)
-----------
  00000111  (7) ✓
```

#### Signed Subtraction
```
  00001100  (+12)
- 00000101  (+5)
-----------
  00000111  (+7) ✓

Same as: +12 + (-5) = +7
```

### Overflow Detection

#### Signed Overflow Occurs When:
1. **Positive + Positive = Negative** (result too large)
   ```
   01111111  (+127)
   + 00000001  (+1)
   ----------
   10000000  (-128) ⚠️ OVERFLOW!
   Should be +128, but out of range
   ```

2. **Negative + Negative = Positive** (result too negative)
   ```
   10000000  (-128)
   + 11111111  (-1)
   ----------
   01111111  (+127) ⚠️ OVERFLOW!
   Should be -129, but out of range
   ```

#### Unsigned Overflow Occurs When:
1. **Result exceeds 255**
   ```
   11111111  (255)
   + 00000001  (1)
   ----------
   00000000  (0) ⚠️ OVERFLOW!
   Carry out = 1, actual result = 256
   ```

---

## 🎮 Using the Calculator

### Step 1: Choose Mode

Click either:
- **Unsigned** - For positive numbers only (0-255)
- **Signed** - For positive and negative numbers (-128 to 127)

### Step 2: Enter Binary Numbers

Both modes accept the same binary input, but interpret it differently:

**Example: Enter 10000001**
- Unsigned mode: This is **129**
- Signed mode: This is **-127**

### Step 3: Perform Operations

All four operations work in both modes:
- Addition
- Subtraction
- Multiplication
- Division

### Step 4: View Results

Results show BOTH representations:
- **Binary**: The actual bit pattern
- **Unsigned Decimal**: Interpreted as unsigned
- **Signed Decimal**: Interpreted as signed (two's complement)

---

## 💡 Practical Examples

### Example 1: Adding Positive Numbers

**Mode: Signed**
```
Input A: 00001111 (unsigned=15, signed=+15)
Input B: 00001010 (unsigned=10, signed=+10)
Operation: Addition

Result:
Binary:          00011001
Unsigned:        25
Signed:          +25
```

### Example 2: Adding Negative Numbers

**Mode: Signed**
```
Input A: 11110001 (unsigned=241, signed=-15)
Input B: 11110110 (unsigned=246, signed=-10)
Operation: Addition

Result:
Binary:          11100111
Unsigned:        231
Signed:          -25
```

### Example 3: Subtracting (Result Negative)

**Mode: Signed**
```
Input A: 00001010 (unsigned=10, signed=+10)
Input B: 00001111 (unsigned=15, signed=+15)
Operation: Subtraction

Result:
Binary:          11111011
Unsigned:        251
Signed:          -5
```

### Example 4: Multiplication with Overflow

**Mode: Unsigned**
```
Input A: 00010000 (16)
Input B: 00010000 (16)
Operation: Multiplication

Result:
Binary:          00000000 (truncated to 8 bits)
Unsigned:        0
⚠️ Overflow: Yes
(Actual result 256, but only shows lower 8 bits)
```

### Example 5: Division

**Mode: Signed**
```
Input A: 11110110 (unsigned=246, signed=-10)
Input B: 00000010 (unsigned=2, signed=+2)
Operation: Division

Note: Calculator treats inputs as unsigned for division
Result:
Binary:          01111011
Unsigned:        123 (Remainder: 0)
Signed:          +123
```

---

## 🔍 Range Comparison Table

| Bit Pattern | Unsigned | Signed (Two's Complement) |
|-------------|----------|---------------------------|
| 00000000    | 0        | 0                         |
| 00000001    | 1        | 1                         |
| 01111110    | 126      | 126                       |
| 01111111    | 127      | 127 (max positive)        |
| 10000000    | 128      | -128 (most negative)      |
| 10000001    | 129      | -127                      |
| 11111110    | 254      | -2                        |
| 11111111    | 255      | -1                        |

---

## 🎓 Why Two's Complement?

### Advantages:
1. **Single circuit for addition/subtraction** - No need for separate subtractor
2. **Unique zero representation** - Only one way to represent 0
3. **Simple overflow detection** - Check sign bits of operands and result
4. **Efficient hardware implementation** - Same logic gates work for all cases

### How Hardware Uses It:
```
Subtraction: A - B
↓
Convert to: A + (two's complement of B)
↓
Use same addition circuit!
```

---

## 🧪 Test Cases

### Signed Arithmetic Tests

1. **Simple Addition:**
   - `00000101` (+5) + `00000011` (+3) = `00001000` (+8) ✓

2. **Positive + Negative:**
   - `00001010` (+10) + `11111100` (-4) = `00000110` (+6) ✓

3. **Negative + Negative:**
   - `11111100` (-4) + `11111101` (-3) = `11111001` (-7) ✓

4. **Subtraction:**
   - `00000111` (+7) - `00001010` (+10) = `11111101` (-3) ✓

5. **Overflow Detection:**
   - `01111111` (+127) + `00000001` (+1) = `10000000` (-128) ⚠️

### Unsigned Arithmetic Tests

1. **Large Addition:**
   - `11111111` (255) + `00000001` (1) = `00000000` (0) ⚠️ Overflow

2. **Subtraction:**
   - `10000000` (128) - `01000000` (64) = `01000000` (64) ✓

3. **Multiplication:**
   - `00001111` (15) × `00001111` (15) = `11100001` (225) ✓

---

## 💻 Hardware Implementation

Both signed and unsigned operations use the **same logic gates**! The only difference is in interpretation:

### Addition Circuit
```
Same Full Adder chain works for both:
- Unsigned: Carry out = overflow
- Signed: Check sign bit changes = overflow
```

### Subtraction Circuit
```
Both use two's complement method:
1. Invert subtrahend (NOT gates)
2. Add 1 (Full Adder)
3. Add to minuend (Full Adder chain)
```

### Overflow Detection
```
Unsigned: Check carry out from MSB
Signed: Check if sign bit changes unexpectedly
        (Positive + Positive = Negative, or
         Negative + Negative = Positive)
```

---

## 🎯 Quick Reference

| Operation | Unsigned Range | Signed Range | Notes |
|-----------|---------------|--------------|-------|
| Addition  | 0 to 510      | -256 to 254  | May overflow |
| Subtraction| 0 to 255     | -255 to 255  | Negative results in signed |
| Multiplication| 0 to 65025 | -16384 to 16129 | High overflow risk |
| Division  | 0 to 255      | -128 to 127  | No negative in unsigned |

**Remember:** All results are masked to 8 bits, overflow indicator shows when precision is lost.

---

## 📚 Further Learning

1. **Experiment:** Try different combinations in both modes
2. **Observe:** See how the same bit pattern means different values
3. **Understand:** Why two's complement makes hardware simpler
4. **Apply:** Real computers use this exact method!

---

**Happy Computing with Signed and Unsigned Integers!** 🚀
