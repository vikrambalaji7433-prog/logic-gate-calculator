// Logic Gate Based Calculator - Pure Digital Logic Implementation

class LogicGateDrawer {
    constructor() {
        this.gateWidth = 80;
        this.gateHeight = 60;
        this.wireLength = 40;
    }

    // Draw AND gate
    drawAND(svg, x, y, inputs, output, label = 'AND') {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Gate shape
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x} ${y} L ${x + 40} ${y} Q ${x + 80} ${y + 30} ${x + 40} ${y + 60} L ${x} ${y + 60} Z`;
        path.setAttribute('d', d);
        path.setAttribute('class', 'gate-shape');
        g.appendChild(path);
        
        // Label
        const text = this.createText(x + 40, y + 35, label, 'gate-label');
        g.appendChild(text);
        
        // Input wires
        this.drawWire(g, x - 40, y + 15, x, y + 15, inputs[0]);
        this.drawWire(g, x - 40, y + 45, x, y + 45, inputs[1]);
        
        // Input labels and values
        g.appendChild(this.createText(x - 50, y + 15, 'A', 'input-label'));
        g.appendChild(this.createText(x - 50, y + 45, 'B', 'input-label'));
        g.appendChild(this.createText(x - 25, y + 12, inputs[0].toString(), inputs[0] ? 'signal-value' : 'signal-value low'));
        g.appendChild(this.createText(x - 25, y + 42, inputs[1].toString(), inputs[1] ? 'signal-value' : 'signal-value low'));
        
        // Output wire
        this.drawWire(g, x + 80, y + 30, x + 120, y + 30, output);
        g.appendChild(this.createText(x + 130, y + 30, output.toString(), output ? 'signal-value' : 'signal-value low'));
        
        svg.appendChild(g);
        return { x: x + 120, y: y + 30 };
    }

    // Draw OR gate
    drawOR(svg, x, y, inputs, output, label = 'OR') {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Gate shape
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x} ${y} Q ${x + 20} ${y} ${x + 30} ${y + 10} Q ${x + 60} ${y + 30} ${x + 30} ${y + 50} Q ${x + 20} ${y + 60} ${x} ${y + 60} Q ${x + 15} ${y + 30} ${x} ${y} Z`;
        path.setAttribute('d', d);
        path.setAttribute('class', 'gate-shape');
        g.appendChild(path);
        
        // Label
        const text = this.createText(x + 30, y + 35, label, 'gate-label');
        g.appendChild(text);
        
        // Input wires
        this.drawWire(g, x - 40, y + 15, x, y + 15, inputs[0]);
        this.drawWire(g, x - 40, y + 45, x, y + 45, inputs[1]);
        
        // Input labels and values
        g.appendChild(this.createText(x - 50, y + 15, 'A', 'input-label'));
        g.appendChild(this.createText(x - 50, y + 45, 'B', 'input-label'));
        g.appendChild(this.createText(x - 25, y + 12, inputs[0].toString(), inputs[0] ? 'signal-value' : 'signal-value low'));
        g.appendChild(this.createText(x - 25, y + 42, inputs[1].toString(), inputs[1] ? 'signal-value' : 'signal-value low'));
        
        // Output wire
        this.drawWire(g, x + 60, y + 30, x + 100, y + 30, output);
        g.appendChild(this.createText(x + 110, y + 30, output.toString(), output ? 'signal-value' : 'signal-value low'));
        
        svg.appendChild(g);
        return { x: x + 100, y: y + 30 };
    }

    // Draw XOR gate
    drawXOR(svg, x, y, inputs, output, label = 'XOR') {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Extra line for XOR
        const extraLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const el = `M ${x - 10} ${y} Q ${x + 5} ${y + 30} ${x - 10} ${y + 60}`;
        extraLine.setAttribute('d', el);
        extraLine.setAttribute('stroke', '#667eea');
        extraLine.setAttribute('stroke-width', '2');
        extraLine.setAttribute('fill', 'none');
        g.appendChild(extraLine);
        
        // Gate shape
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x} ${y} Q ${x + 20} ${y} ${x + 30} ${y + 10} Q ${x + 60} ${y + 30} ${x + 30} ${y + 50} Q ${x + 20} ${y + 60} ${x} ${y + 60} Q ${x + 15} ${y + 30} ${x} ${y} Z`;
        path.setAttribute('d', d);
        path.setAttribute('class', 'gate-shape');
        g.appendChild(path);
        
        // Label
        const text = this.createText(x + 30, y + 35, label, 'gate-label');
        g.appendChild(text);
        
        // Input wires
        this.drawWire(g, x - 40, y + 15, x, y + 15, inputs[0]);
        this.drawWire(g, x - 40, y + 45, x, y + 45, inputs[1]);
        
        // Input labels and values
        g.appendChild(this.createText(x - 50, y + 15, 'A', 'input-label'));
        g.appendChild(this.createText(x - 50, y + 45, 'B', 'input-label'));
        g.appendChild(this.createText(x - 25, y + 12, inputs[0].toString(), inputs[0] ? 'signal-value' : 'signal-value low'));
        g.appendChild(this.createText(x - 25, y + 42, inputs[1].toString(), inputs[1] ? 'signal-value' : 'signal-value low'));
        
        // Output wire
        this.drawWire(g, x + 60, y + 30, x + 100, y + 30, output);
        g.appendChild(this.createText(x + 110, y + 30, output.toString(), output ? 'signal-value' : 'signal-value low'));
        
        svg.appendChild(g);
        return { x: x + 100, y: y + 30 };
    }

    // Draw NOT gate
    drawNOT(svg, x, y, input, output, label = 'NOT') {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Triangle
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${x} ${y} L ${x + 50} ${y + 25} L ${x} ${y + 50} Z`;
        path.setAttribute('d', d);
        path.setAttribute('class', 'gate-shape');
        g.appendChild(path);
        
        // Circle for NOT
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x + 55);
        circle.setAttribute('cy', y + 25);
        circle.setAttribute('r', 5);
        circle.setAttribute('class', 'gate-shape');
        g.appendChild(circle);
        
        // Label
        const text = this.createText(x + 25, y + 30, label, 'gate-label');
        text.setAttribute('font-size', '12');
        g.appendChild(text);
        
        // Input wire
        this.drawWire(g, x - 40, y + 25, x, y + 25, input);
        g.appendChild(this.createText(x - 50, y + 25, 'A', 'input-label'));
        g.appendChild(this.createText(x - 25, y + 22, input.toString(), input ? 'signal-value' : 'signal-value low'));
        
        // Output wire
        this.drawWire(g, x + 60, y + 25, x + 100, y + 25, output);
        g.appendChild(this.createText(x + 110, y + 25, output.toString(), output ? 'signal-value' : 'signal-value low'));
        
        svg.appendChild(g);
        return { x: x + 100, y: y + 25 };
    }

    // Draw Full Adder circuit
    drawFullAdder(svg, x, y, a, b, carryIn, sum, carryOut) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Title
        const title = this.createText(x + 200, y - 20, 'Full Adder Circuit', 'diagram-title');
        g.appendChild(title);
        
        // First XOR for A XOR B
        const xor1Out = LogicGate.XOR(a, b);
        this.drawXOR(g, x, y, [a, b], xor1Out, 'XOR1');
        
        // First AND for A AND B
        const and1Out = LogicGate.AND(a, b);
        this.drawAND(g, x, y + 100, [a, b], and1Out, 'AND1');
        
        // Second XOR for (A XOR B) XOR Cin
        this.drawXOR(g, x + 200, y, [xor1Out, carryIn], sum, 'XOR2');
        
        // Second AND for (A XOR B) AND Cin
        const and2Out = LogicGate.AND(xor1Out, carryIn);
        this.drawAND(g, x + 200, y + 100, [xor1Out, carryIn], and2Out, 'AND2');
        
        // OR for final carry
        this.drawOR(g, x + 400, y + 50, [and1Out, and2Out], carryOut, 'OR');
        
        // Connect wires
        this.drawWire(g, x + 100, y + 30, x + 160, y + 30, xor1Out);
        this.drawWire(g, x + 100, y + 130, x + 360, y + 130, and1Out);
        this.drawWire(g, x + 300, y + 130, x + 360, y + 75, and2Out);
        
        // Carry in input
        this.drawWire(g, x + 160, y + 60, x + 160, y + 60, carryIn);
        g.appendChild(this.createText(x + 140, y + 60, 'Cin', 'input-label'));
        g.appendChild(this.createText(x + 165, y + 57, carryIn.toString(), carryIn ? 'signal-value' : 'signal-value low'));
        
        // Output labels
        g.appendChild(this.createText(x + 310, y + 27, 'Sum', 'output-label'));
        g.appendChild(this.createText(x + 510, y + 77, 'Cout', 'output-label'));
        
        svg.appendChild(g);
    }

    drawWire(parent, x1, y1, x2, y2, signal) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('class', signal ? 'wire active-high' : 'wire active-low');
        parent.appendChild(line);
    }

    createText(x, y, content, className) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('class', className);
        text.textContent = content;
        return text;
    }
}

class LogicGate {
    // Basic logic gate operations
    static AND(a, b) {
        return a & b;
    }

    static OR(a, b) {
        return a | b;
    }

    static XOR(a, b) {
        return a ^ b;
    }

    static NOT(a) {
        return ~a & 1;
    }

    static NAND(a, b) {
        return this.NOT(this.AND(a, b));
    }

    static NOR(a, b) {
        return this.NOT(this.OR(a, b));
    }
}

class LogicCalculator {
    constructor() {
        this.steps = [];
    }

    // Half Adder: Creates sum and carry using XOR and AND gates
    halfAdder(a, b) {
        const sum = LogicGate.XOR(a, b);
        const carry = LogicGate.AND(a, b);
        return { sum, carry };
    }

    // Full Adder: Adds three bits (two inputs + carry)
    fullAdder(a, b, carryIn) {
        const firstHalf = this.halfAdder(a, b);
        const secondHalf = this.halfAdder(firstHalf.sum, carryIn);
        const carryOut = LogicGate.OR(firstHalf.carry, secondHalf.carry);
        
        return {
            sum: secondHalf.sum,
            carry: carryOut
        };
    }

    // Binary Addition using cascaded full adders
    add(a, b, bits = 8) {
        this.steps = [];
        let result = 0;
        let carry = 0;

        this.steps.push('Starting Addition using Full Adders');

        for (let i = 0; i < bits; i++) {
            const bitA = (a >> i) & 1;
            const bitB = (b >> i) & 1;
            
            const adder = this.fullAdder(bitA, bitB, carry);
            result |= (adder.sum << i);
            carry = adder.carry;

            this.steps.push(
                `Bit ${i}: A=${bitA}, B=${bitB}, Carry_in=${carry} → ` +
                `Sum=${adder.sum}, Carry_out=${adder.carry}`
            );
        }

        return { result, carry, overflow: carry === 1 };
    }

    // Binary Subtraction using 2's complement
    subtract(a, b, bits = 8) {
        this.steps = [];
        this.steps.push('Starting Subtraction using 2\'s Complement');
        this.steps.push(`Original B: ${b.toString(2).padStart(bits, '0')}`);
        
        // Invert B (1's complement) using NOT gates
        let notB = 0;
        for (let i = 0; i < bits; i++) {
            const bit = (b >> i) & 1;
            const inverted = LogicGate.NOT(bit);
            notB |= (inverted << i);
        }
        
        this.steps.push(`1's Complement of B: ${notB.toString(2).padStart(bits, '0')}`);
        
        // Add 1 to get 2's complement
        const twosComp = this.add(notB, 1, bits);
        this.steps.push(`2's Complement (NOT B + 1): ${twosComp.result.toString(2).padStart(bits, '0')}`);
        
        // Add A and 2's complement of B
        this.steps.push('Adding A + 2\'s Complement of B');
        const result = this.add(a, twosComp.result, bits);
        
        return result;
    }

    // Binary Multiplication using shift and add
    multiply(a, b, bits = 8) {
        this.steps = [];
        this.steps.push('Starting Multiplication using Shift-and-Add');
        
        let result = 0;
        
        for (let i = 0; i < bits; i++) {
            const bitB = (b >> i) & 1;
            
            if (bitB === 1) {
                // Use AND gates to get partial product
                const partialProduct = a << i;
                this.steps.push(
                    `Bit ${i} of B is 1: Shift A left by ${i} = ${partialProduct.toString(2)}`
                );
                
                // Add partial product using full adders
                const addResult = this.add(result, partialProduct, bits * 2);
                result = addResult.result;
                
                this.steps.push(`Add to accumulator: ${result.toString(2)}`);
            } else {
                this.steps.push(`Bit ${i} of B is 0: Skip`);
            }
        }
        
        return { result, carry: 0, overflow: false };
    }

    // Binary Division using repeated subtraction
    divide(a, b, bits = 8) {
        this.steps = [];
        
        if (b === 0) {
            this.steps.push('Error: Division by zero!');
            return { result: 0, remainder: 0, error: true };
        }

        this.steps.push('Starting Division using Repeated Subtraction');
        
        let quotient = 0;
        let remainder = a;
        
        while (remainder >= b) {
            const subResult = this.subtract(remainder, b, bits);
            remainder = subResult.result;
            quotient++;
            
            this.steps.push(
                `Subtract ${b}: Remainder = ${remainder}, Quotient = ${quotient}`
            );
            
            // Prevent infinite loop
            if (quotient > 255) break;
        }
        
        this.steps.push(`Final: Quotient = ${quotient}, Remainder = ${remainder}`);
        
        return { result: quotient, remainder, error: false };
    }

    getSteps() {
        return this.steps;
    }
}

// UI Controller
class CalculatorUI {
    constructor() {
        this.calculator = new LogicCalculator();
        this.currentOperation = null;
        this.isSigned = false; // Default to unsigned
        this.currentInputTarget = null; // Track which input is being converted
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        this.input1 = document.getElementById('input1');
        this.input2 = document.getElementById('input2');
        this.decimal1 = document.getElementById('decimal1');
        this.decimal2 = document.getElementById('decimal2');
        this.signed1 = document.getElementById('signed1');
        this.signed2 = document.getElementById('signed2');
        this.resultBinary = document.getElementById('resultBinary');
        this.resultDecimal = document.getElementById('resultDecimal');
        this.resultSigned = document.getElementById('resultSigned');
        this.overflowIndicator = document.getElementById('overflowIndicator');
        this.operationDescription = document.getElementById('operationDescription');
        this.gateDisplay = document.getElementById('gateDisplay');
        this.stepByStep = document.getElementById('stepByStep');
        this.opButtons = document.querySelectorAll('.op-btn');
        this.modeButtons = document.querySelectorAll('.mode-btn');
        this.modeInfo = document.getElementById('modeInfo');
        this.signedValueSpans = document.querySelectorAll('.signed-value');
        this.signedResult = document.querySelector('.signed-result');
        
        // Converter modal elements
        this.converterBtn1 = document.getElementById('converterBtn1');
        this.converterBtn2 = document.getElementById('converterBtn2');
        this.converterModal = document.getElementById('converterModal');
        this.modalClose = document.getElementById('modalClose');
        this.decimalInput = document.getElementById('decimalInput');
        this.convertBtn = document.getElementById('convertBtn');
        this.useBtn = document.getElementById('useBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.conversionResult = document.getElementById('conversionResult');
        this.convertedBinary = document.getElementById('convertedBinary');
        this.convertedHex = document.getElementById('convertedHex');
        this.convertedDecimal = document.getElementById('convertedDecimal');
        this.conversionSteps = document.getElementById('conversionSteps');
        this.converterError = document.getElementById('converterError');
        this.conversionModeRadios = document.querySelectorAll('input[name="conversionMode"]');
    }

    attachEventListeners() {
        // Input validation and decimal conversion
        this.input1.addEventListener('input', (e) => this.handleInput(e, this.decimal1, this.signed1));
        this.input2.addEventListener('input', (e) => this.handleInput(e, this.decimal2, this.signed2));

        // Mode toggle buttons
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.modeButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.isSigned = e.target.dataset.mode === 'signed';
                this.updateModeInfo();
                this.updateDisplayMode();
                // Recalculate if inputs exist
                if (this.input1.value && this.input2.value && this.currentOperation) {
                    this.performOperation(this.currentOperation, document.querySelector('.op-btn.active'));
                }
            });
        });

        // Operation buttons
        this.opButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const operation = e.target.dataset.operation;
                this.performOperation(operation, e.target);
            });
        });
        
        // Converter button listeners
        this.converterBtn1.addEventListener('click', () => this.openConverter(this.input1));
        this.converterBtn2.addEventListener('click', () => this.openConverter(this.input2));
        
        // Modal listeners
        this.modalClose.addEventListener('click', () => this.closeConverter());
        this.cancelBtn.addEventListener('click', () => this.closeConverter());
        this.convertBtn.addEventListener('click', () => this.performConversion());
        this.useBtn.addEventListener('click', () => this.useBinaryValue());
        
        // Close modal on background click
        this.converterModal.addEventListener('click', (e) => {
            if (e.target === this.converterModal) {
                this.closeConverter();
            }
        });
        
        // Enter key to convert
        this.decimalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performConversion();
            }
        });
        
        // Clear error on input
        this.decimalInput.addEventListener('input', () => {
            this.converterError.classList.remove('show');
            this.converterError.textContent = '';
        });
    }

    updateModeInfo() {
        if (this.isSigned) {
            this.modeInfo.textContent = 'Signed: -128 to 127 (MSB is sign bit: 0=positive, 1=negative)';
        } else {
            this.modeInfo.textContent = 'Unsigned: 0 to 255 (no negative numbers)';
        }
    }

    updateDisplayMode() {
        this.signedValueSpans.forEach(span => {
            if (this.isSigned) {
                span.classList.add('show');
            } else {
                span.classList.remove('show');
            }
        });
        
        if (this.isSigned) {
            this.signedResult.classList.add('show');
        } else {
            this.signedResult.classList.remove('show');
        }
    }

    handleInput(event, decimalDisplay, signedDisplay) {
        let value = event.target.value;
        
        // Only allow 0 and 1
        value = value.replace(/[^01]/g, '');
        event.target.value = value;

        // Convert to decimal
        if (value) {
            const unsignedDecimal = parseInt(value, 2);
            decimalDisplay.textContent = unsignedDecimal;
            
            // Calculate signed value (two's complement)
            const signedDecimal = this.toSignedInt(unsignedDecimal, 8);
            signedDisplay.textContent = signedDecimal;
        } else {
            decimalDisplay.textContent = '0';
            signedDisplay.textContent = '0';
        }
    }

    // Convert unsigned to signed using two's complement
    toSignedInt(value, bits) {
        const maxVal = Math.pow(2, bits);
        const signBit = Math.pow(2, bits - 1);
        
        if (value >= signBit) {
            return value - maxVal;
        }
        return value;
    }

    // Convert signed to unsigned
    toUnsignedInt(value, bits) {
        const maxVal = Math.pow(2, bits);
        if (value < 0) {
            return maxVal + value;
        }
        return value;
    }

    validateInputs() {
        const bin1 = this.input1.value;
        const bin2 = this.input2.value;

        if (!bin1 || !bin2) {
            alert('Please enter both binary numbers!');
            return false;
        }

        return true;
    }

    performOperation(operation, clickedButton) {
        if (!this.validateInputs()) return;

        const a = parseInt(this.input1.value, 2);
        const b = parseInt(this.input2.value, 2);
        let result;

        // Remove active class from all buttons
        this.opButtons.forEach(btn => btn.classList.remove('active'));
        if (clickedButton) clickedButton.classList.add('active');

        this.currentOperation = operation;

        switch(operation) {
            case 'add':
                result = this.calculator.add(a, b);
                this.updateOperationInfo('Addition', 'Using cascaded Full Adders (XOR + AND gates)');
                break;
            case 'subtract':
                result = this.calculator.subtract(a, b);
                this.updateOperationInfo('Subtraction', 'Using 2\'s Complement method (NOT gates + Full Adders)');
                break;
            case 'multiply':
                result = this.calculator.multiply(a, b);
                this.updateOperationInfo('Multiplication', 'Using Shift-and-Add algorithm (AND gates + Full Adders)');
                break;
            case 'divide':
                result = this.calculator.divide(a, b);
                if (result.error) {
                    alert('Cannot divide by zero!');
                    return;
                }
                this.updateOperationInfo('Division', 'Using Repeated Subtraction (Comparators + Subtractors)');
                break;
        }

        this.displayResult(result, operation);
        this.visualizeGates(operation, a, b);
        this.displaySteps();
    }

    displayResult(result, operation) {
        const value = operation === 'divide' ? result.result : result.result;
        const maskedValue = value & 0xFF; // Mask to 8 bits
        
        this.resultBinary.textContent = maskedValue.toString(2).padStart(8, '0');
        this.resultDecimal.textContent = maskedValue;
        
        // Calculate signed value
        const signedValue = this.toSignedInt(maskedValue, 8);
        this.resultSigned.textContent = signedValue;

        // Show overflow indicator
        if (result.overflow || value > 255 || value < 0) {
            this.overflowIndicator.style.display = 'flex';
        } else {
            this.overflowIndicator.style.display = 'none';
        }

        if (operation === 'divide' && result.remainder !== undefined) {
            this.resultDecimal.textContent += ` (R: ${result.remainder})`;
            this.resultSigned.textContent = signedValue + ` (R: ${result.remainder})`;
        }
    }

    updateOperationInfo(title, description) {
        this.operationDescription.innerHTML = `<strong>${title}:</strong> ${description}`;
    }

    visualizeGates(operation, a, b) {
        const drawer = new LogicGateDrawer();
        let diagramHTML = '<div class="circuit-diagram">';
        
        switch(operation) {
            case 'add':
                diagramHTML += this.generateAdderDiagram(a, b, drawer);
                break;
            case 'subtract':
                diagramHTML += this.generateSubtractorDiagram(a, b, drawer);
                break;
            case 'multiply':
                diagramHTML += this.generateMultiplierDiagram(a, b, drawer);
                break;
            case 'divide':
                diagramHTML += this.generateDividerDiagram(a, b, drawer);
                break;
        }
        
        diagramHTML += '</div>';
        this.gateDisplay.innerHTML = diagramHTML;
    }

    generateAdderDiagram(a, b, drawer) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'gate-svg');
        svg.setAttribute('viewBox', '0 0 700 600');
        
        const container = document.createElement('div');
        container.innerHTML = `<div class="diagram-title">Full Adder Circuit - Processing All Bits</div>`;
        
        // Get binary strings
        const binaryA = a.toString(2).padStart(8, '0');
        const binaryB = b.toString(2).padStart(8, '0');
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Draw multiple bits (show 4 bits for clarity)
        let yOffset = 40;
        let carryIn = 0;
        
        for (let i = 0; i < 4; i++) {
            const bitPos = i;
            const bitA = (a >> bitPos) & 1;
            const bitB = (b >> bitPos) & 1;
            
            const calculator = new LogicCalculator();
            const result = calculator.fullAdder(bitA, bitB, carryIn);
            
            // Title for this bit
            const bitTitle = drawer.createText(350, yOffset, `Bit ${i} (${i === 0 ? 'LSB' : ''})`, 'gate-label');
            bitTitle.setAttribute('font-size', '14');
            bitTitle.setAttribute('font-weight', 'bold');
            g.appendChild(bitTitle);
            
            yOffset += 25;
            
            // Draw the full adder
            drawer.drawFullAdder(g, 50, yOffset, bitA, bitB, carryIn, result.sum, result.carry);
            
            // Draw result labels
            const sumLabel = drawer.createText(320, yOffset + 30, `Sum[${i}]=${result.sum}`, 'output-label');
            sumLabel.setAttribute('fill', result.sum ? '#4caf50' : '#999');
            sumLabel.setAttribute('font-weight', 'bold');
            g.appendChild(sumLabel);
            
            const carryLabel = drawer.createText(520, yOffset + 80, `Cout[${i}]=${result.carry}`, 'output-label');
            carryLabel.setAttribute('fill', result.carry ? '#4caf50' : '#999');
            carryLabel.setAttribute('font-weight', 'bold');
            g.appendChild(carryLabel);
            
            // Show carry propagation to next bit
            if (i < 3) {
                const carryArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                carryArrow.setAttribute('x1', 500);
                carryArrow.setAttribute('y1', yOffset + 80);
                carryArrow.setAttribute('x2', 200);
                carryArrow.setAttribute('y2', yOffset + 160);
                carryArrow.setAttribute('stroke', result.carry ? '#4caf50' : '#999');
                carryArrow.setAttribute('stroke-width', '2');
                carryArrow.setAttribute('marker-end', 'url(#arrowhead)');
                carryArrow.setAttribute('stroke-dasharray', '5,5');
                g.appendChild(carryArrow);
            }
            
            carryIn = result.carry;
            yOffset += 130;
        }
        
        // Define arrowhead marker
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', 'arrowhead');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '10');
        marker.setAttribute('refX', '5');
        marker.setAttribute('refY', '5');
        marker.setAttribute('orient', 'auto');
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', '0 0, 10 5, 0 10');
        polygon.setAttribute('fill', '#4caf50');
        marker.appendChild(polygon);
        defs.appendChild(marker);
        svg.appendChild(defs);
        
        svg.appendChild(g);
        container.appendChild(svg);
        
        // Add detailed explanation with actual values
        const calculator = new LogicCalculator();
        const finalResult = calculator.add(a, b, 8);
        
        container.innerHTML += `
            <div class="gate-row" style="margin-top: 20px;">
                <h4>Input Values (Your Entries)</h4>
                <div class="gate-item">Input A: <strong>${binaryA}</strong> (decimal: ${a})</div>
                <div class="gate-item">Input B: <strong>${binaryB}</strong> (decimal: ${b})</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Bit-by-Bit Processing (First 4 bits shown)</h4>
                ${[0, 1, 2, 3].map(i => {
                    const bitA = (a >> i) & 1;
                    const bitB = (b >> i) & 1;
                    return `<div class="gate-item">Bit ${i}: A=${bitA}, B=${bitB} → Sum=${((finalResult.result >> i) & 1)}, Carry propagates to next bit</div>`;
                }).join('')}
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Final Result</h4>
                <div class="gate-item">Binary: <strong>${finalResult.result.toString(2).padStart(8, '0')}</strong></div>
                <div class="gate-item">Decimal: <strong>${finalResult.result}</strong></div>
                ${finalResult.overflow ? '<div class="gate-item" style="color: #f5576c;">⚠️ Overflow occurred!</div>' : ''}
            </div>
        `;
        
        return container.innerHTML;
    }

    generateSubtractorDiagram(a, b, drawer) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'gate-svg');
        svg.setAttribute('viewBox', '0 0 700 400');
        
        const container = document.createElement('div');
        container.innerHTML = `<div class="diagram-title">Subtraction using 2's Complement: A - B</div>`;
        
        // Get binary strings
        const binaryA = a.toString(2).padStart(8, '0');
        const binaryB = b.toString(2).padStart(8, '0');
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Show first 4 bits of B being inverted
        let xPos = 50;
        const yStart = 60;
        
        const stepTitle = drawer.createText(350, 30, 'Step 1: Invert B (NOT gates)', 'gate-label');
        stepTitle.setAttribute('font-size', '16');
        stepTitle.setAttribute('font-weight', 'bold');
        g.appendChild(stepTitle);
        
        for (let i = 0; i < 4; i++) {
            const bitB = (b >> i) & 1;
            const notB = LogicGate.NOT(bitB);
            
            // Draw NOT gate for this bit
            drawer.drawNOT(g, xPos, yStart, bitB, notB, `NOT`);
            
            // Add bit label
            const bitLabel = drawer.createText(xPos + 50, yStart - 15, `B[${i}]`, 'input-label');
            bitLabel.setAttribute('font-size', '12');
            g.appendChild(bitLabel);
            
            xPos += 160;
        }
        
        // Show 2's complement addition
        const step2Title = drawer.createText(350, 180, 'Step 2: Add 1 (2\'s Complement)', 'gate-label');
        step2Title.setAttribute('font-size', '16');
        step2Title.setAttribute('font-weight', 'bold');
        g.appendChild(step2Title);
        
        // Calculate inverted B
        let notB = 0;
        for (let i = 0; i < 8; i++) {
            const bit = (b >> i) & 1;
            const inverted = LogicGate.NOT(bit);
            notB |= (inverted << i);
        }
        
        const binaryNotB = notB.toString(2).padStart(8, '0');
        const twosCompB = (notB + 1) & 0xFF;
        const binaryTwosCompB = twosCompB.toString(2).padStart(8, '0');
        
        // Show calculation
        const calc1 = drawer.createText(350, 210, `NOT B = ${binaryNotB}`, 'gate-label');
        calc1.setAttribute('font-size', '14');
        g.appendChild(calc1);
        
        const calc2 = drawer.createText(350, 235, `+ 00000001`, 'gate-label');
        calc2.setAttribute('font-size', '14');
        g.appendChild(calc2);
        
        const calc3 = drawer.createText(350, 260, `= ${binaryTwosCompB} (2's complement)`, 'gate-label');
        calc3.setAttribute('font-size', '14');
        calc3.setAttribute('fill', '#4caf50');
        calc3.setAttribute('font-weight', 'bold');
        g.appendChild(calc3);
        
        // Step 3
        const step3Title = drawer.createText(350, 300, 'Step 3: Add A + 2\'s Complement of B', 'gate-label');
        step3Title.setAttribute('font-size', '16');
        step3Title.setAttribute('font-weight', 'bold');
        g.appendChild(step3Title);
        
        const finalCalc = drawer.createText(350, 330, `${binaryA} + ${binaryTwosCompB}`, 'gate-label');
        finalCalc.setAttribute('font-size', '14');
        g.appendChild(finalCalc);
        
        svg.appendChild(g);
        container.appendChild(svg);
        
        // Calculate actual result
        const calculator = new LogicCalculator();
        const result = calculator.subtract(a, b, 8);
        
        container.innerHTML += `
            <div class="gate-row" style="margin-top: 20px;">
                <h4>Input Values (Your Entries)</h4>
                <div class="gate-item">Input A: <strong>${binaryA}</strong> (decimal: ${a})</div>
                <div class="gate-item">Input B: <strong>${binaryB}</strong> (decimal: ${b})</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>2's Complement Transformation</h4>
                <div class="gate-item">Step 1: Invert all bits of B: <strong>${binaryNotB}</strong></div>
                <div class="gate-item">Step 2: Add 1: <strong>${binaryTwosCompB}</strong></div>
                <div class="gate-item">Step 3: Add A + 2's complement using Full Adders</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Final Result</h4>
                <div class="gate-item">A - B = <strong>${result.result.toString(2).padStart(8, '0')}</strong> (decimal: ${result.result})</div>
                <div class="gate-item">Subtraction achieved through addition! Same Full Adder circuit used.</div>
            </div>
        `;
        
        return container.innerHTML;
    }

    generateMultiplierDiagram(a, b, drawer) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'gate-svg');
        svg.setAttribute('viewBox', '0 0 750 450');
        
        const container = document.createElement('div');
        container.innerHTML = `<div class="diagram-title">Multiplication: A × B using Shift-and-Add</div>`;
        
        // Get binary strings
        const binaryA = a.toString(2).padStart(8, '0');
        const binaryB = b.toString(2).padStart(8, '0');
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Show AND gates for first 4 bits
        const title = drawer.createText(375, 30, 'Partial Products (AND Gates)', 'gate-label');
        title.setAttribute('font-size', '16');
        title.setAttribute('font-weight', 'bold');
        g.appendChild(title);
        
        let yPos = 60;
        const partialProducts = [];
        
        for (let i = 0; i < 4; i++) {
            const bitB = (b >> i) & 1;
            
            // Show each bit of B
            const bitLabel = drawer.createText(80, yPos + 30, `B[${i}]=${bitB}`, 'input-label');
            bitLabel.setAttribute('font-size', '14');
            bitLabel.setAttribute('font-weight', 'bold');
            bitLabel.setAttribute('fill', bitB ? '#4caf50' : '#999');
            g.appendChild(bitLabel);
            
            if (bitB === 1) {
                // Show A being used
                const aLabel = drawer.createText(200, yPos + 30, `A=${binaryA}`, 'gate-label');
                aLabel.setAttribute('font-size', '13');
                g.appendChild(aLabel);
                
                // AND operation
                const andLabel = drawer.createText(420, yPos + 30, 'AND', 'gate-label');
                andLabel.setAttribute('font-size', '12');
                g.appendChild(andLabel);
                
                // Result (shifted)
                const shifted = a << i;
                const shiftedBinary = shifted.toString(2).padStart(16, '0');
                const resultLabel = drawer.createText(520, yPos + 30, `= ${shiftedBinary.slice(-8)} (shift ${i})`, 'output-label');
                resultLabel.setAttribute('font-size', '12');
                resultLabel.setAttribute('fill', '#4caf50');
                g.appendChild(resultLabel);
                
                partialProducts.push({ value: shifted, bit: i });
                
                // Draw visual AND gate
                drawer.drawAND(g, 150, yPos + 10, [1, bitB], bitB, '');
            } else {
                // Show skipped
                const skipLabel = drawer.createText(200, yPos + 30, `Skip (B[${i}]=0)`, 'gate-label');
                skipLabel.setAttribute('font-size', '13');
                skipLabel.setAttribute('fill', '#999');
                g.appendChild(skipLabel);
            }
            
            yPos += 80;
        }
        
        // Show addition of partial products
        const addTitle = drawer.createText(375, yPos + 20, 'Sum Partial Products (Full Adders)', 'gate-label');
        addTitle.setAttribute('font-size', '16');
        addTitle.setAttribute('font-weight', 'bold');
        g.appendChild(addTitle);
        
        yPos += 50;
        let accumulator = 0;
        partialProducts.forEach((pp, idx) => {
            const ppBinary = pp.value.toString(2).padStart(16, '0').slice(-8);
            const label = drawer.createText(375, yPos, `${idx === 0 ? 'Start: 00000000' : `+ ${ppBinary}`}`, 'gate-label');
            label.setAttribute('font-size', '12');
            g.appendChild(label);
            
            accumulator = (accumulator + pp.value) & 0xFFFF;
            yPos += 25;
        });
        
        svg.appendChild(g);
        container.appendChild(svg);
        
        // Calculate actual result
        const calculator = new LogicCalculator();
        const result = calculator.multiply(a, b, 8);
        
        container.innerHTML += `
            <div class="gate-row" style="margin-top: 20px;">
                <h4>Input Values (Your Entries)</h4>
                <div class="gate-item">Input A: <strong>${binaryA}</strong> (decimal: ${a})</div>
                <div class="gate-item">Input B: <strong>${binaryB}</strong> (decimal: ${b})</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Partial Products Generated</h4>
                ${[0, 1, 2, 3].map(i => {
                    const bitB = (b >> i) & 1;
                    if (bitB === 1) {
                        const pp = a << i;
                        return `<div class="gate-item">B[${i}]=1: A × 1, shifted left ${i} = ${pp.toString(2).padStart(16, '0').slice(-8)} (${pp & 0xFF})</div>`;
                    } else {
                        return `<div class="gate-item">B[${i}]=0: Skip (multiply by 0)</div>`;
                    }
                }).join('')}
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Final Result</h4>
                <div class="gate-item">Sum of all partial products: <strong>${result.result.toString(2).padStart(8, '0')}</strong></div>
                <div class="gate-item">Decimal: <strong>${result.result & 0xFF}</strong> (8-bit result)</div>
                <div class="gate-item">Full result: ${result.result} ${result.result > 255 ? '⚠️ (overflow - truncated to 8 bits)' : ''}</div>
            </div>
        `;
        
        return container.innerHTML;
    }

    generateDividerDiagram(a, b, drawer) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'gate-svg');
        svg.setAttribute('viewBox', '0 0 750 500');
        
        const container = document.createElement('div');
        container.innerHTML = `<div class="diagram-title">Division: A ÷ B using Repeated Subtraction</div>`;
        
        // Get binary strings
        const binaryA = a.toString(2).padStart(8, '0');
        const binaryB = b.toString(2).padStart(8, '0');
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Simulate division process
        let remainder = a;
        let quotient = 0;
        const steps = [];
        let yPos = 60;
        
        const title = drawer.createText(375, 30, 'Step-by-Step Division Process', 'gate-label');
        title.setAttribute('font-size', '16');
        title.setAttribute('font-weight', 'bold');
        g.appendChild(title);
        
        // Initial state
        const initLabel = drawer.createText(375, yPos, `Start: Dividend=${a}, Divisor=${b}, Quotient=0`, 'gate-label');
        initLabel.setAttribute('font-size', '14');
        initLabel.setAttribute('font-weight', 'bold');
        g.appendChild(initLabel);
        yPos += 40;
        
        // Perform division steps (show up to 8 steps)
        let stepCount = 0;
        while (remainder >= b && stepCount < 8) {
            steps.push({ remainder, quotient, canSubtract: true });
            
            // Draw comparison
            const compareLabel = drawer.createText(200, yPos, `Compare: ${remainder} ≥ ${b}?`, 'gate-label');
            compareLabel.setAttribute('font-size', '13');
            g.appendChild(compareLabel);
            
            const yesLabel = drawer.createText(430, yPos, 'YES ✓', 'gate-label');
            yesLabel.setAttribute('font-size', '13');
            yesLabel.setAttribute('fill', '#4caf50');
            yesLabel.setAttribute('font-weight', 'bold');
            g.appendChild(yesLabel);
            
            yPos += 25;
            
            // Draw subtraction
            remainder -= b;
            quotient++;
            
            const subtractLabel = drawer.createText(230, yPos, `Subtract: ${remainder + b} - ${b} = ${remainder}`, 'gate-label');
            subtractLabel.setAttribute('font-size', '13');
            g.appendChild(subtractLabel);
            
            const quotientLabel = drawer.createText(550, yPos, `Q=${quotient}`, 'output-label');
            quotientLabel.setAttribute('font-size', '13');
            quotientLabel.setAttribute('fill', '#667eea');
            quotientLabel.setAttribute('font-weight', 'bold');
            g.appendChild(quotientLabel);
            
            yPos += 35;
            stepCount++;
        }
        
        // Final check
        if (stepCount < 8) {
            const finalCompare = drawer.createText(200, yPos, `Compare: ${remainder} ≥ ${b}?`, 'gate-label');
            finalCompare.setAttribute('font-size', '13');
            g.appendChild(finalCompare);
            
            const noLabel = drawer.createText(430, yPos, 'NO ✗ - STOP', 'gate-label');
            noLabel.setAttribute('font-size', '13');
            noLabel.setAttribute('fill', '#f5576c');
            noLabel.setAttribute('font-weight', 'bold');
            g.appendChild(noLabel);
            
            yPos += 40;
        } else {
            const moreLabel = drawer.createText(375, yPos, `... (${quotient - stepCount} more steps)`, 'gate-label');
            moreLabel.setAttribute('font-size', '12');
            moreLabel.setAttribute('fill', '#999');
            g.appendChild(moreLabel);
            yPos += 40;
        }
        
        // Final result
        const resultBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        resultBox.setAttribute('x', 150);
        resultBox.setAttribute('y', yPos);
        resultBox.setAttribute('width', 450);
        resultBox.setAttribute('height', 60);
        resultBox.setAttribute('fill', '#f0f4ff');
        resultBox.setAttribute('stroke', '#667eea');
        resultBox.setAttribute('stroke-width', '2');
        resultBox.setAttribute('rx', '10');
        g.appendChild(resultBox);
        
        const resultLabel1 = drawer.createText(375, yPos + 25, `Final Result: Quotient = ${quotient}, Remainder = ${remainder}`, 'gate-label');
        resultLabel1.setAttribute('font-size', '15');
        resultLabel1.setAttribute('font-weight', 'bold');
        resultLabel1.setAttribute('fill', '#667eea');
        g.appendChild(resultLabel1);
        
        const resultLabel2 = drawer.createText(375, yPos + 45, `${a} ÷ ${b} = ${quotient} R ${remainder}`, 'gate-label');
        resultLabel2.setAttribute('font-size', '14');
        resultLabel2.setAttribute('fill', '#764ba2');
        g.appendChild(resultLabel2);
        
        svg.appendChild(g);
        container.appendChild(svg);
        
        // Calculate actual result
        const calculator = new LogicCalculator();
        const result = calculator.divide(a, b, 8);
        
        container.innerHTML += `
            <div class="gate-row" style="margin-top: 20px;">
                <h4>Input Values (Your Entries)</h4>
                <div class="gate-item">Dividend (A): <strong>${binaryA}</strong> (decimal: ${a})</div>
                <div class="gate-item">Divisor (B): <strong>${binaryB}</strong> (decimal: ${b})</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Division Process</h4>
                <div class="gate-item">Total subtractions performed: <strong>${quotient}</strong></div>
                <div class="gate-item">Each subtraction uses: Comparator + Full Adder (2's complement)</div>
                <div class="gate-item">Counter increments with each successful subtraction</div>
            </div>
            <div class="gate-row" style="margin-top: 10px;">
                <h4>Final Result</h4>
                <div class="gate-item">Quotient: <strong>${result.result}</strong> (binary: ${result.result.toString(2).padStart(8, '0')})</div>
                <div class="gate-item">Remainder: <strong>${result.remainder}</strong> (binary: ${result.remainder.toString(2).padStart(8, '0')})</div>
                <div class="gate-item">Verification: ${b} × ${result.result} + ${result.remainder} = ${b * result.result + result.remainder} = ${a} ✓</div>
            </div>
        `;
        
        return container.innerHTML;
    }

    displaySteps() {
        const steps = this.calculator.getSteps();
        let html = '<h3>Step-by-Step Execution</h3>';
        
        steps.forEach((step, index) => {
            html += `<div class="step">${index + 1}. ${step}</div>`;
        });

        this.stepByStep.innerHTML = html;
    }

    // Decimal to Binary Converter Methods
    openConverter(targetInput) {
        this.currentInputTarget = targetInput;
        this.converterModal.classList.add('show');
        this.decimalInput.value = '';
        this.conversionResult.style.display = 'none';
        this.useBtn.style.display = 'none';
        this.converterError.classList.remove('show');
        this.converterError.textContent = '';
        
        // Set the conversion mode based on current calculator mode (but allow user to change it)
        const isSignedMode = this.isSignedMode;
        const unsignedRadio = document.querySelector('input[name="conversionMode"][value="unsigned"]');
        const signedRadio = document.querySelector('input[name="conversionMode"][value="signed"]');
        
        // Default to current mode but enable both options
        if (isSignedMode) {
            signedRadio.checked = true;
        } else {
            unsignedRadio.checked = true;
        }
        
        // Enable both options so user can choose
        unsignedRadio.disabled = false;
        signedRadio.disabled = false;
        
        // Focus on input
        setTimeout(() => this.decimalInput.focus(), 100);
    }

    closeConverter() {
        this.converterModal.classList.remove('show');
        this.currentInputTarget = null;
        
        // Re-enable both radio buttons when closing
        const unsignedRadio = document.querySelector('input[name="conversionMode"][value="unsigned"]');
        const signedRadio = document.querySelector('input[name="conversionMode"][value="signed"]');
        unsignedRadio.disabled = false;
        signedRadio.disabled = false;
    }

    performConversion() {
        const decimalValue = parseInt(this.decimalInput.value);
        const isSignedMode = document.querySelector('input[name="conversionMode"]:checked').value === 'signed';
        
        // Validate input
        if (isNaN(decimalValue)) {
            this.showError('Please enter a valid number');
            return;
        }

        // Check range based on mode
        if (isSignedMode) {
            if (decimalValue < -128 || decimalValue > 127) {
                this.showError('For signed mode, enter a number between -128 and 127');
                return;
            }
        } else {
            if (decimalValue < 0 || decimalValue > 255) {
                this.showError('For unsigned mode, enter a number between 0 and 255');
                return;
            }
        }

        // Convert to binary
        let binaryValue;
        if (isSignedMode && decimalValue < 0) {
            // Convert negative to two's complement
            binaryValue = this.toUnsignedInt(decimalValue, 8);
        } else {
            binaryValue = decimalValue;
        }

        const binaryString = binaryValue.toString(2).padStart(8, '0');
        const hexString = '0x' + binaryValue.toString(16).toUpperCase().padStart(2, '0');

        // Display result
        this.convertedBinary.textContent = binaryString;
        this.convertedHex.textContent = hexString;
        this.convertedDecimal.textContent = `${decimalValue} (${isSignedMode ? 'signed' : 'unsigned'})`;

        // Show conversion steps
        this.showConversionSteps(decimalValue, binaryString, isSignedMode);

        this.conversionResult.style.display = 'block';
        this.useBtn.style.display = 'inline-block';
        this.converterError.classList.remove('show');
    }

    showConversionSteps(decimal, binary, isSigned) {
        let stepsHTML = '<h4>Conversion Steps:</h4>';

        if (isSigned && decimal < 0) {
            // Two's complement conversion steps
            const positiveValue = Math.abs(decimal);
            const positiveBinary = positiveValue.toString(2).padStart(8, '0');
            
            // Invert bits
            let inverted = '';
            for (let i = 0; i < 8; i++) {
                inverted += positiveBinary[i] === '0' ? '1' : '0';
            }
            
            const invertedValue = parseInt(inverted, 2);
            const twosComp = (invertedValue + 1) & 0xFF;
            
            stepsHTML += `
                <div class="step-item">1. Start with positive value: ${positiveValue} = ${positiveBinary}</div>
                <div class="step-item">2. Invert all bits (NOT): ${inverted}</div>
                <div class="step-item">3. Add 1: ${inverted} + 1 = ${binary}</div>
                <div class="step-item">4. Result: ${binary} represents ${decimal} in two's complement</div>
            `;
        } else {
            // Standard binary conversion
            const steps = [];
            let remaining = Math.abs(decimal);
            let position = 0;

            if (remaining === 0) {
                stepsHTML += `<div class="step-item">Value is 0, binary is 00000000</div>`;
            } else {
                while (remaining > 0 && position < 8) {
                    const bit = remaining % 2;
                    steps.unshift(`Bit ${position}: ${remaining} ÷ 2 = ${Math.floor(remaining / 2)} remainder ${bit}`);
                    remaining = Math.floor(remaining / 2);
                    position++;
                }

                steps.forEach((step, idx) => {
                    stepsHTML += `<div class="step-item">${idx + 1}. ${step}</div>`;
                });

                stepsHTML += `<div class="step-item">${steps.length + 1}. Result: ${binary} (padded to 8 bits)</div>`;
            }
        }

        this.conversionSteps.innerHTML = stepsHTML;
    }

    showError(message) {
        this.converterError.textContent = message;
        this.converterError.classList.add('show');
        this.conversionResult.style.display = 'none';
        this.useBtn.style.display = 'none';
    }

    useBinaryValue() {
        const binaryValue = this.convertedBinary.textContent;
        if (this.currentInputTarget && binaryValue) {
            this.currentInputTarget.value = binaryValue;
            
            // Trigger input event to update decimal displays
            const event = new Event('input', { bubbles: true });
            this.currentInputTarget.dispatchEvent(event);
            
            this.closeConverter();
        }
    }
}

// Initialize the calculator when page loads
document.addEventListener('DOMContentLoaded', () => {
    const calculatorUI = new CalculatorUI();
    console.log('Logic Gate Based Calculator initialized!');
});
