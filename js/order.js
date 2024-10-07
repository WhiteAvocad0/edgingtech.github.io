//Javascript file for order.html
function redirect(event) {
    alert("Order submitted successfully!");
    event.preventDefault();
    window.location.href = "payment.html";
}

function calculatePrice() {
    const weight = document.getElementById('weight-total').value;
    const paymentMethod = document.getElementById('payment-method').value;
    let pricePerKg = 5;
    let totalPrice = weight * pricePerKg;

    // Full Payment Calculation
    if (paymentMethod === "full") {
        document.getElementById('price-output').textContent = `Total Price: RM${totalPrice.toFixed(2)}`;
        document.getElementById('installment-output').style.display = 'none';
    }
    
    // Installment Payment Calculation
    if (paymentMethod === "installment") {
        let installmentMonths = 3; // Assuming a 3-month installment
        let monthlyPayment = (totalPrice / installmentMonths).toFixed(2);
        document.getElementById('installment-output').textContent = `Monthly Payment: RM${monthlyPayment}`;
        document.getElementById('price-output').textContent = `Total Price: RM${totalPrice.toFixed(2)}`;
        document.getElementById('installment-output').style.display = 'block';
    }
}