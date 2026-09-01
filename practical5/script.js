// Array to store cart items
let cart = [];

// Function to add product to cart
function addToCart() {

    let product = document.getElementById("product");
    let quantity = Number(document.getElementById("quantity").value);

    let item = {

        name: product.options[product.selectedIndex].text,
        price: Number(product.value),
        quantity: quantity

    };

    cart.push(item);

    alert("Product Added Successfully!");

}

// Function to calculate total and display bill
function calculateTotal() {

    if (cart.length == 0) {

        document.getElementById("output").innerHTML =
            "<h3 style='color:red;'>Cart is Empty!</h3>";

        return;
    }

    let discount = Number(document.getElementById("discount").value);

    // Calculate subtotal using reduce()
    let total = cart.reduce(function (sum, item) {

        return sum + (item.price * item.quantity);

    }, 0);

    let discountAmount = total * discount / 100;

    let finalTotal = total - discountAmount;

    let result = `
        <h2 style="text-align:center;color:#007BFF;">
            Shopping Cart Summary
        </h2>

        <table border="1"
        cellspacing="0"
        cellpadding="10"
        width="100%">

        <tr style="background:#007BFF;color:white;">

            <th>Product</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Total (₹)</th>

        </tr>
    `;

    // Display all products using forEach()
    cart.forEach(function (item) {

        result += `
        <tr>

            <td>${item.name}</td>

            <td>${item.price}</td>

            <td>${item.quantity}</td>

            <td>${item.price * item.quantity}</td>

        </tr>
        `;

    });

    result += `

        <tr>

            <td colspan="3"><b>Subtotal</b></td>
,
            <td><b>₹${total}</b></td>

        </tr>

        <tr>

            <td colspan="3"><b>Discount (${discount}%)</b></td>

            <td><b>- ₹${discountAmount}</b></td>

        </tr>

        <tr style="background:#e8f5e9;">

            <td colspan="3"><b>Final Total</b></td>

            <td style="color:green;">
                <b>₹${finalTotal}</b>
            </td>

        </tr>

        </table>
    `;

    document.getElementById("output").innerHTML = result;

}