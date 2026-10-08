import http from 'http';

function postJson(urlPath, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = http.request({
      hostname: 'localhost',
      port: 3001,
      path: urlPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    }, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (_e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function testBackend() {
  console.log('=== VERIFYING EXECUTIVE BACKEND APIS ON PORT 3001 ===');

  // Test /api/visits
  const visitRes = await postJson('/api/visits', {
    page: '/',
    referrer: 'direct',
    device: 'desktop'
  });
  console.log('API /api/visits Status:', visitRes.status, visitRes.data);

  // Test /api/inquiries (validation failure expected on empty fields)
  const inquiryInvalid = await postJson('/api/inquiries', {});
  console.log('API /api/inquiries Validation Check:', inquiryInvalid.status, inquiryInvalid.data);

  // Test /api/inquiries (valid test submission)
  const inquiryValid = await postJson('/api/inquiries', {
    name: 'QA Test Verification',
    email: 'qa@test.com',
    phone: '+40700000000',
    interest: 'Executive Advisory',
    message: 'Automated visual QA backend validation test message.'
  });
  console.log('API /api/inquiries Submission:', inquiryValid.status, inquiryValid.data);
}

testBackend().catch(err => {
  console.error('Backend verification failed:', err);
  process.exit(1);
});
