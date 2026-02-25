# Logic Gate Based Calculator

An interactive web application that demonstrates how arithmetic operations work at the hardware level using basic logic gates (AND, OR, XOR, NOT) without a microcontroller.

## Features

### 🔢 Binary Arithmetic Operations
- **Addition**: Using cascaded Full Adders
- **Subtraction**: Using 2's complement method
- **Multiplication**: Using Shift-and-Add algorithm
- **Division**: Using Repeated Subtraction

### 🎚️ Signed and Unsigned Modes
- **Unsigned Mode**: 0 to 255 (positive numbers only)
- **Signed Mode**: -128 to 127 (two's complement representation)
- **Real-time conversion**: See both interpretations simultaneously
- **Overflow detection**: Automatic warning for out-of-range results

### 🚪 Logic Gate Implementation
- Pure digital logic simulation
- Half Adder and Full Adder circuits
- XOR, AND, OR, and NOT gate operations
- Carry propagation and handling

### 📊 Interactive Visualization
- Real-time binary to decimal conversion
- **SVG-based logic gate circuit diagrams**
- **Visual representation of AND, OR, XOR, NOT gates**
- **Interactive wire signals showing high (1) and low (0) states**
- Step-by-step execution display
- Logic gate visualization for each operation
- Educational explanations

### 🎓 Educational Content
- Detailed explanations of logic gates
- How arithmetic works at hardware level
- Understanding digital circuits
- No microcontroller - pure gate logic

## How to Use

1. **Open the Application**
   - Simply open `index.html` in any modern web browser
   - No server or installation required

2. **Choose Number Mode**
   - Click "Unsigned" for positive numbers only (0-255)
   - Click "Signed" for positive and negative numbers (-128 to 127)
   - Switch modes anytime to see different interpretations

3. **Enter Binary Numbers**
   - Input A: Enter first binary number (up to 8 bits)
   - Input B: Enter second binary number (up to 8 bits)
   - Decimal equivalents shown for both unsigned and signed

4. **Select Operation**
   - Click on any operation button (Addition, Subtraction, Multiplication, Division)
   - Results appear instantly in binary, unsigned decimal, and signed decimal

5. **View Visualization**
   - See how logic gates work for the selected operation
   - Step-by-step execution breakdown
   - Understanding of gate combinations

## Technical Implementation

### Logic Gates
```javascript
AND Gate: Output = A & B
OR Gate:  Output = A | B
XOR Gate: Output = A ^ B
NOT Gate: Output = ~A
```

### Half Adder
```
Sum = A XOR B
Carry = A AND B
```

### Full Adder
```
Sum = A XOR B XOR Carry_in
Carry_out = (A AND B) OR (Carry_in AND (A XOR B))
```

### 2's Complement Subtraction
```
A - B = A + (~B + 1)
```

## File Structure
```
logic gate based calculator/
├── index.html                  # Main HTML structure
├── styles.css                  # Styling and layout
├── script.js                   # Logic gate implementation and UI
├── README.md                   # Main documentation
├── SIGNED_UNSIGNED_GUIDE.md   # Detailed signed/unsigned guide
├── DIAGRAM_FEATURES.md        # Logic gate diagram documentation
└── QUICKSTART.md              # Quick start guide
```

## Technologies Used
- **HTML5**: Structure and content
- **CSS3**: Styling with gradients and animations
- **JavaScript**: Pure vanilla JS for logic implementation
- No external libraries or frameworks

## Educational Value

This calculator helps students and enthusiasts understand:
- How computers perform arithmetic at the transistor level
- Binary number system and operations
- Digital logic design principles
- Hardware implementation of arithmetic circuits
- Difference between software algorithms and hardware circuits

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Edge
- Safari
- Any modern browser with ES6 support

## Examples

### Addition Example (Unsigned)
```
Input A: 1010 (unsigned: 10)
Input B: 0110 (unsigned: 6)
Result:  10000 (unsigned: 16)
```

### Addition Example (Signed)
```
Input A: 11110110 (unsigned: 246, signed: -10)
Input B: 11111100 (unsigned: 252, signed: -4)
Result:  11110010 (unsigned: 242, signed: -14)
```

### Subtraction Example
```
Input A: 1100 (unsigned: 12, signed: 12)
Input B: 0101 (unsigned: 5, signed: 5)
Result:  0111 (unsigned: 7, signed: 7)
```

### Multiplication Example
```
Input A: 0101 (5 in decimal)
Input B: 0011 (3 in decimal)
Result:  1111 (15 in decimal)
```

### Division Example
```
Input A: 1100 (12 in decimal)
Input B: 0011 (3 in decimal)
Result:  0100 (4 in decimal)
```

## Future Enhancements
- Visual circuit diagrams
- Animation of signal flow through gates
- More operations (modulo, shift, rotate)
- Configurable bit width
- Export circuit diagrams
- Comparison with other number systems

## License
Free to use for educational purposes.

## Author
Created as an educational tool to demonstrate digital logic principles.

---

**Note**: This is a simulation of hardware logic gates. In actual hardware, these operations happen at the speed of electricity through physical transistors!
