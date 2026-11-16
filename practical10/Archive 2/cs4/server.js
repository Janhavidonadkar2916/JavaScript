const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3001;
const dataFile = path.join(__dirname, "items.json");

function sendJson(response, statusCode, data) {
    response.writeHead(statusCode, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data));
}

function readOrders() {
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

const server = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/api/orders") {
        try {
            sendJson(response, 200, readOrders());
        } catch (error) {
            sendJson(response, 500, { error: "Orders cannot be loaded" });
        }
        return;
    }

    if (request.method === "POST" && request.url === "/api/orders") {
        let body = "";

        request.on("data", chunk => {
            body += chunk;
        });

        request.on("end", () => {
            try {
                const newOrder = JSON.parse(body);
                const orders = readOrders();

                if (!newOrder.orderId || !newOrder.customerName || !newOrder.foodItem ||
                    !Number.isInteger(newOrder.quantity) || newOrder.quantity < 1 ||
                    !Number.isFinite(newOrder.totalAmount) || newOrder.totalAmount <= 0) {
                    sendJson(response, 400, { error: "Please provide valid order details" });
                    return;
                }

                if (orders.some(order => order.orderId === newOrder.orderId)) {
                    sendJson(response, 409, { error: "That order ID already exists" });
                    return;
                }

                orders.push(newOrder);
                fs.writeFileSync(dataFile, `${JSON.stringify(orders, null, 2)}\n`);
                sendJson(response, 201, newOrder);
            } catch (error) {
                sendJson(response, 400, { error: "Invalid order data" });
            }
        });
        return;
    }

    const requestedFile = request.url === "/" ? "text.html" : request.url.slice(1);
    const filePath = path.join(__dirname, requestedFile);

    if (filePath !== path.join(__dirname, "text.html") && filePath !== dataFile) {
        response.writeHead(404);
        response.end("Not found");
        return;
    }

    const contentType = filePath.endsWith(".json") ? "application/json" : "text/html";
    response.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
    console.log(`Order app running at http://localhost:${port}`);
});