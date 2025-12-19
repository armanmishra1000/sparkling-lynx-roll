const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

console.log('--- Telegram Verification Script ---');
console.log('Token Present:', !!token);
console.log('ChatID Present:', !!chatId);

if (!token || !chatId) {
    console.error('ERROR: Missing credentials. Please check .env.local');
    process.exit(1);
}

const message = `
🧪 <b>TEST NOTIFICATION</b>

This is a test message from your verification script.
If you see this, your credentials work!

<b>Special Chars Check:</b> & < > " '
`;

const postData = JSON.stringify({
    chat_id: chatId,
    text: message,
    parse_mode: 'HTML'
});

const options = {
    hostname: 'api.telegram.org',
    port: 443,
    path: `/bot${token}/sendMessage`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            if (response.ok) {
                console.log('✅ SUCCESS: Message sent successfully!');
            } else {
                console.error('❌ FAILED: Telegram API Error');
                console.error('Error Code:', response.error_code);
                console.error('Description:', response.description);
            }
        } catch (e) {
            console.error('❌ FAILED: Invalid response from Telegram');
            console.error(data);
        }
    });
});

req.on('error', (e) => {
    console.error('❌ FAILED: Network Error', e);
});

req.write(postData);
req.end();
