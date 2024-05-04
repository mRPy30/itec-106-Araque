function generateFibonacci() {
    var input = document.getElementById('numTerms').value.trim();
  
    if (!/^\d+$/.test(input)) {
      document.getElementById('result').textContent = 'Please enter a valid number less than 100.';
      return;
    }
  
    var numTerms = parseInt(input);
  
    if (isNaN(numTerms) || numTerms >= 100 || numTerms < 1) {
      document.getElementById('result').textContent = 'Please enter a valid number less than 100.';
      return;
    }
  
    var fibonacciSequence = [];
    var a = 0, b = 1, temp;
  
    for (var i = 0; i < numTerms; i++) {
      fibonacciSequence.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
  
    document.getElementById('result').textContent = 'Fibonacci Sequence: ' + fibonacciSequence.join(', ');
  }
  