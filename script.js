const PRODUCT_PRICE = 29.99;
const PRODUCT_NAME = 'FiveM Custom Files Pack';

function openPayment() {
    document.getElementById('paymentModal').classList.add('active');
    renderPayPal();
}

function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
}

function renderPayPal() {
    const container = document.getElementById('paypal-container');
    container.innerHTML = '';

    if (typeof paypal === 'undefined') {
        container.innerHTML = '<p style="text-align:center;color:#7c8da2;font-size:0.85rem;padding:20px 0;">جاري تحميل PayPal...</p>';
        return;
    }

    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'pay',
            height: 48
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: PRODUCT_NAME,
                    amount: {
                        currency_code: 'USD',
                        value: PRODUCT_PRICE.toFixed(2)
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                document.getElementById('paypal-container').innerHTML = `
                    <div style="text-align:center;padding:20px 0;">
                        <div style="font-size:3rem;margin-bottom:12px;">✅</div>
                        <h3 style="margin-bottom:8px;color:#10b981;">تم الدفع بنجاح!</h3>
                        <p style="color:#7c8da2;font-size:0.9rem;">شكراً لك ${details.payer.name.given_name}</p>
                        <p style="color:#7c8da2;font-size:0.85rem;margin-top:8px;">سيتم إرسال الملفات على بريدك خلال دقائق</p>
                    </div>
                `;
                showToast('تم الدفع بنجاح! شكراً لك.');
            });
        },
        onError: function(err) {
            document.getElementById('paypal-container').innerHTML = `
                <div style="text-align:center;padding:20px 0;">
                    <div style="font-size:3rem;margin-bottom:12px;">❌</div>
                    <h3 style="margin-bottom:8px;color:#ef4444;">حدث خطأ</h3>
                    <p style="color:#7c8da2;font-size:0.9rem;"> حاول مرة أخرى أو تواصل معنا</p>
                    <button onclick="renderPayPal()" style="margin-top:12px;padding:8px 20px;background:#10b981;color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-weight:600;">إعادة المحاولة</button>
                </div>
            `;
            showToast('حدث خطأ أثناء الدفع.');
            console.error('PayPal Error:', err);
        }
    }).render('#paypal-container');
}

function toggleFaq(el) {
    el.parentElement.classList.toggle('open');
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('active');
    setTimeout(() => t.classList.remove('active'), 3000);
}

document.getElementById('paymentModal').addEventListener('click', function(e) {
    if (e.target === this) closePayment();
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    const bar = document.querySelector('.topbar');
    bar.style.background = window.scrollY > 40
        ? 'rgba(11, 15, 20, 0.97)'
        : 'rgba(11, 15, 20, 0.92)';
});
