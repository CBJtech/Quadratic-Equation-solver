function solveQuadratic() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  const result = document.getElementById('result');
  result.style.backgroundColor = 'beige'
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      result.innerText = `Roots for the equation: ${root1.toFixed(2)} and ${root2.toFixed(2)}`;
      // SET TIMEOUT
      setTimeout(function(){
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('c').value = '';
      }, 3000)
  } else if (discriminant === 0) {
      const root = -b / (2 * a);
      result.innerText = `Double Root: ${root.toFixed(2)}`;
  } else {
      result.innerText = "No Real Roots for this equation";
  }
}