function calculateBill() {

    // Get Input Values
    var customerName = document.getElementById("Name").value;
    var product = document.getElementById("Product").value;
    var price = Number(document.getElementById("Price").value);
    var quantity = Number(document.getElementById("Quantity").value);
    var discount = Number(document.getElementById("Discount").value);

    const GST = 0.18;

    // Calculations
    let subtotal = price * quantity;
    let discountAmount = (subtotal * discount) / 100;
    let amountAfterDiscount = subtotal - discountAmount;
    let gstAmount = amountAfterDiscount * GST;
    let total = amountAfterDiscount + gstAmount;

    // Bill Object
    const bill = {
        customerName,
        product,
        price,
        quantity,
        subtotal,
        discount,
        discountAmount,
        gstAmount,
        total
    };

    // Generate Invoice
    document.getElementById("output").innerHTML = `
        <div class="bill">

            <h2>🛒 Shopping Invoice</h2>

            <table>

                <tr>
                    <td><strong>Customer Name</strong></td>
                    <td>${bill.customerName}</td>
                </tr>

                <tr>
                    <td><strong>Product</strong></td>
                    <td>${bill.product}</td>
                </tr>

                <tr>
                    <td><strong>Price</strong></td>
                    <td>₹${bill.price.toFixed(2)}</td>
                </tr>

                <tr>
                    <td><strong>Quantity</strong></td>
                    <td>${bill.quantity}</td>
                </tr>

                <tr>
                    <td><strong>Subtotal</strong></td>
                    <td>₹${bill.subtotal.toFixed(2)}</td>
                </tr>

                <tr>
                    <td><strong>Discount (${bill.discount}%)</strong></td>
                    <td>- ₹${bill.discountAmount.toFixed(2)}</td>
                </tr>

                <tr>
                    <td><strong>GST (18%)</strong></td>
                    <td>₹${bill.gstAmount.toFixed(2)}</td>
                </tr>

                <tr class="total">
                    <td><strong>Total Amount</strong></td>
                    <td><strong>₹${bill.total.toFixed(2)}</strong></td>
                </tr>

            </table>

            <div class="footer">
                ❤️ Thank You for Shopping With Us ❤️ <br>
                Visit Again!
            </div>

        </div>
    `;

    // Console Output
    console.log("===== SHOPPING BILL =====");
    console.log("Customer Name :", bill.customerName);
    console.log("Product :", bill.product);
    console.log("Price :", bill.price);
    console.log("Quantity :", bill.quantity);
    console.log("Subtotal :", bill.subtotal);
    console.log("Discount :", bill.discount + "%");
    console.log("Discount Amount :", bill.discountAmount);
    console.log("GST Amount :", bill.gstAmount);
    console.log("Total :", bill.total);
}