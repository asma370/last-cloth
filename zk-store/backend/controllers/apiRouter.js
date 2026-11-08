// ZK STORE — REST API Controller & Request Dispatcher
const url = require('url');
const db = require('../data/db.js');

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Guard against giant payloads (max 1MB)
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

async function handleApiRequest(req, res) {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;
  const method = req.method;
  const query = parsed.query;

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return true;
  }

  // API Route Matching

  // 1. Health check
  if (pathname === '/api/health' && method === 'GET') {
    sendJson(res, 200, {
      status: 'healthy',
      atelier: 'ZK STORE Haute Luxury Atelier',
      version: '2.4.0',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      productsCount: db.products.length,
      ordersCount: db.getOrders().length
    });
    return true;
  }

  // 2. Products List: GET /api/products
  if (pathname === '/api/products' && method === 'GET') {
    const products = db.getProducts(query);
    sendJson(res, 200, {
      success: true,
      count: products.length,
      products: products
    });
    return true;
  }

  // 3. Single Product: GET /api/products/:id
  const prodMatch = pathname.match(/^\/api\/products\/([A-Za-z0-9_-]+)$/);
  if (prodMatch && method === 'GET') {
    const id = prodMatch[1];
    const product = db.getProductById(id);
    if (product) {
      sendJson(res, 200, { success: true, product });
    } else {
      sendJson(res, 404, { success: false, message: 'Garment not found in atelier catalog' });
    }
    return true;
  }

  // 4. Product Review: POST /api/products/:id/reviews
  const revMatch = pathname.match(/^\/api\/products\/([A-Za-z0-9_-]+)\/reviews$/);
  if (revMatch && method === 'POST') {
    const id = revMatch[1];
    const body = await parseBody(req);
    const added = db.addReview(id, body);
    if (added) {
      sendJson(res, 201, { success: true, message: 'Review recorded successfully' });
    } else {
      sendJson(res, 404, { success: false, message: 'Garment not found' });
    }
    return true;
  }

  // 5. Categories: GET /api/categories
  if (pathname === '/api/categories' && method === 'GET') {
    sendJson(res, 200, {
      success: true,
      categories: db.getCategories()
    });
    return true;
  }

  // 6. Orders List: GET /api/orders
  if (pathname === '/api/orders' && method === 'GET') {
    sendJson(res, 200, {
      success: true,
      orders: db.getOrders()
    });
    return true;
  }

  // 7. Single Order / Tracking: GET /api/orders/:id
  const orderMatch = pathname.match(/^\/api\/orders\/([A-Za-z0-9_-]+)$/);
  if (orderMatch && method === 'GET') {
    const id = orderMatch[1];
    const order = db.getOrderById(id);
    if (order) {
      sendJson(res, 200, { success: true, order });
    } else {
      sendJson(res, 404, { success: false, message: `Order ${id} not found in atelier tracking registry` });
    }
    return true;
  }

  // 8. Create Order: POST /api/orders
  if (pathname === '/api/orders' && method === 'POST') {
    const body = await parseBody(req);
    if (!body.items || body.items.length === 0) {
      sendJson(res, 400, { success: false, message: 'Shopping bag cannot be empty for checkout' });
      return true;
    }
    const order = db.createOrder(body);
    sendJson(res, 201, {
      success: true,
      message: 'Atelier order confirmed and queued for TCS Express Prime dispatch',
      order: order
    });
    return true;
  }

  // 9. Coupon Validation: POST /api/coupons/validate
  if (pathname === '/api/coupons/validate' && method === 'POST') {
    const body = await parseBody(req);
    const result = db.validateCoupon(body.code, Number(body.subtotal) || 0);
    sendJson(res, result.valid ? 200 : 400, result);
    return true;
  }

  // 10. Concierge Contact: POST /api/contact
  if (pathname === '/api/contact' && method === 'POST') {
    const body = await parseBody(req);
    const saved = db.saveMessage(body);
    sendJson(res, 200, {
      success: true,
      message: 'Your inquiry has been delivered to the VIP concierge team',
      inquiryId: saved.id
    });
    return true;
  }

  // 11. VIP Newsletter: POST /api/newsletter
  if (pathname === '/api/newsletter' && method === 'POST') {
    const body = await parseBody(req);
    const ok = db.saveSubscriber(body.email);
    if (ok) {
      sendJson(res, 200, {
        success: true,
        message: 'Welcome to the Private Atelier Circle. Voucher code WELCOMEZK unlocked.'
      });
    } else {
      sendJson(res, 400, { success: false, message: 'Invalid email address' });
    }
    return true;
  }

  // 12. Auth Login: POST /api/auth/login
  if (pathname === '/api/auth/login' && method === 'POST') {
    const body = await parseBody(req);
    const auth = db.authenticate(body.email || 'daniyal@example.com', body.password);
    sendJson(res, 200, auth);
    return true;
  }

  // Not an API route
  return false;
}

module.exports = { handleApiRequest };
