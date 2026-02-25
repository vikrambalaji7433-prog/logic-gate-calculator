# Quick Start Guide - Logic Gate Based Calculator

## 🚀 Getting Started in 4 Steps

### Step 1: Open the Application
- Double-click on `index.html`
- Or right-click → Open with → Your browser
- No installation or server needed!

### Step 2: Choose Number Mode
Click either mode:
- **Unsigned**: For positive numbers only (0 to 255)
- **Signed**: For positive and negative numbers (-128 to 127)

```
Unsigned Example: 11111111 = 255
Signed Example:   11111111 = -1 (two's complement)
```

### Step 3: Enter Binary Numbers
```
Input A: Type a binary number (e.g., 1010)
Input B: Type another binary number (e.g., 0110)
```
- Only 0s and 1s are allowed
- Up to 8 bits (e.g., 11111111)
- Both unsigned and signed values shown automatically

### Step 4: Choose Operation
Click any button:
- ➕ **Addition** - See Full Adder circuit
- ➖ **Subtraction** - See NOT gate & 2's complement
- ✖️ **Multiplication** - See AND gate & partial products
- ➗ **Division** - See comparator & subtraction

## 📺 What You'll See

### Results Section
```
Binary:           00010000
Unsigned Decimal: 16
Signed Decimal:   16
⚠️ Overflow:      (if applicable)
```

### Logic Gate Diagram
- Visual circuit with actual gate shapes
- Green wires = signal is HIGH (1)
- Gray wires = signal is LOW (0)
- All values labeled clearly

### Step-by-Step Execution
- How each bit is processed
- Carry propagation
- Intermediate results
- Final output calculation

## 💡 Example Walkthrough

### Addition Example (Unsigned Mode)
1. **Select**: Unsigned mode
2. **Enter**: A = `1010` (10), B = `0110` (6)
3. **Click**: Addition (+)
4. **See**:
   - Full Adder circuit diagram
   - XOR gates computing sum
   - AND gates computing carry
   - OR gate combining carries
   - Result: `10000` (unsigned: 16, signed: 16)

### Addition Example (Signed Mode - Negative Numbers)
1. **Select**: Signed mode
2. **Enter**: A = `11110110` (signed: -10), B = `11111100` (signed: -4)
3. **Click**: Addition (+)
4. **See**:
   - Same Full Adder circuit
   - Result: `11110010` (unsigned: 242, signed: -14)
   - Two's complement handles negatives automatically!

### Subtraction Example
1. **Enter**: A = `1100` (12), B = `0101` (5)
2. **Click**: Subtraction (-)
3. **See**:
   - NOT gate inverting B
   - 2's complement process
   - Addition of A + 2's complement
   - Result: `0111` (7)

## 🎓 Learning Tips

### For Beginners
- Start with small numbers (3-4 bits)
- Try `0001 + 0001` to see basic addition
- Watch how carries propagate
- Compare binary and decimal results

### For Advanced Users
- Use all 8 bits for complex operations
- Observe overflow conditions
- Study the gate combinations
- Understand hardware implementation

## 🔍 Exploring the Diagrams

### What to Look For

**In Addition (Full Adder):**
- Two XOR gates for sum calculation
- Two AND gates for carry generation
- One OR gate to combine carries
- How all 5 gates work together

**In Subtraction:**
- NOT gate flipping each bit
- How 2's complement makes subtraction into addition
- Same Full Adder used after conversion

**In Multiplication:**
- AND gate creating partial products
- How shifting works in binary
- Multiple additions to sum products

**In Division:**
- Comparison logic (≥ check)
- Repeated subtraction process
- Quotient counting mechanism

## 🎨 Visual Guide

### Gate Symbols You'll See

```
AND Gate:    |‾‾D
             |__| 

OR Gate:     |‾‾\
             |__/

XOR Gate:    ||‾‾\
             ||__/

NOT Gate:    |▷○
```

### Signal Colors

- 🟢 **Green (Thick)** = Binary 1 (HIGH)
- ⚪ **Gray (Thin)** = Binary 0 (LOW)

## ⌨️ Keyboard Tips

- **Tab**: Move between input fields
- **0/1 keys**: Type binary directly
- **Backspace**: Delete digits
- **Mouse hover**: Highlight gates

## 🐛 Troubleshooting

### No Output?
✅ Make sure both inputs have values
✅ Check that you're entering only 0s and 1s
✅ Try refreshing the page

### Diagram Not Showing?
✅ Ensure you clicked an operation button
✅ Check browser console for errors (F12)
✅ Try a different browser (Chrome recommended)

### Unexpected Results?
✅ Remember: Maximum 8 bits (0-255)
✅ Division by zero shows error
✅ Overflow may occur with large numbers

## 📱 Mobile Usage

- Works on smartphones and tablets
- Portrait or landscape mode
- Pinch to zoom diagrams
- Scroll to see full circuit

## 🔗 Related Files

- `README.md` - Full documentation
- `DIAGRAM_FEATURES.md` - Detailed diagram info
- `script.js` - Logic gate implementation
- `styles.css` - Visual styling

## 🎯 Sample Test Cases

### Easy
```
1. 0001 + 0001 = 0010  (1 + 1 = 2)
2. 0011 - 0001 = 0010  (3 - 1 = 2)
3. 0010 × 0010 = 0100  (2 × 2 = 4)
4. 0100 ÷ 0010 = 0010  (4 ÷ 2 = 2)
```

### Medium
```
1. 1010 + 0110 = 10000 (10 + 6 = 16)
2. 1100 - 0101 = 0111  (12 - 5 = 7)
3. 0101 × 0011 = 1111  (5 × 3 = 15)
4. 1100 ÷ 0011 = 0100  (12 ÷ 3 = 4)
```

### Advanced
```
1. 11111111 + 00000001 = overflow!
2. 10000000 - 01111111 = 00000001
3. 00001111 × 00001111 = 11100001
4. 11111111 ÷ 00000010 = 01111111
```

## 🏆 Challenge Yourself

1. **Predict Before Calculate**: Try to predict the result mentally
2. **Trace the Circuit**: Follow the signals through each gate
3. **Verify Manually**: Calculate using logic gate rules
4. **Compare Methods**: See how different operations work

## 📚 Next Steps

After mastering the basics:
1. Study the circuit diagrams in detail
2. Learn about cascading full adders
3. Understand carry propagation timing
4. Explore hardware optimization techniques
5. Design your own logic circuits

---

**Ready to start?** Open `index.html` and begin your journey into digital logic! 🚀

**Questions?** Check the full README.md or DIAGRAM_FEATURES.md for detailed explanations.

Happy Computing! 💻✨
