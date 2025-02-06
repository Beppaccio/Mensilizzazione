document.getElementById('loanCalculator').addEventListener('submit', function (e) {
  e.preventDefault();

  // Recupera i valori inseriti dall'utente
  const amount = parseFloat(document.getElementById('amount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);

  if (isNaN(amount) || isNaN(interestRate)) {
    alert('Inserisci valori validi per importo e tasso di interesse.');
    return;
  }

  // Calcola la rata mensile
  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfMonths = 12;
  const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));

  // Calcola la somma totale del finanziamento
  const totalAmount = monthlyPayment * numberOfMonths;

  // Calcola l'importo finanziato aumentato del 4%
  const increasedAmount = amount * 1.04;

  // Mostra i risultati
  document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
  document.getElementById('increasedAmount').textContent = increasedAmount.toFixed(2);

  document.getElementById('results').style.display = 'block';
});
