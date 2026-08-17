var PRICE = 29;
var PRODUCT = 'QBCore Custom Script - FiveM';
var DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1537081777087053824/nLFfLwLvTrrZ4N53Qs6rG6M3W1jHt6LbB8Coh3FSDZtzhKFP45Sxo1UvI_GrgIEgenOv';
var ROLE_IDS = ['1538711612611895316'];

var lastReceiptText = '';
var currentLang = localStorage.getItem('fivem_lang') || 'ar';

// ── TRANSLATIONS ──
var TR = {
    ar: {
        nav_about: 'المنتج',
        nav_orders: 'الطلبات',
        nav_reviews: 'آراء',
        nav_faq: 'أسئلة',
        hero_label: 'QBCore Custom Script',
        hero_title: 'ملف سيرفر <span class="dot">FiveM</span> QBCore كوستم',
        hero_desc: 'ملف اسكربت مخصص لسيرفر QBCore. مبرمج من الصفر ومجرب على سيرفرات حقيقية. ما يبطي السيرفر ويشتغل بدون أي أخطاء. مع تعليمات تثبيت عربي.',
        hero_off: 'وفّر 62%',
        hero_cta: 'احصل على الملف',
        hero_trust: '+300 عميل · تحديثات مجانية · دعم فني',
        hero_tag: 'ملف واحد كامل',
        feat_title: 'ليش ملفنا؟',
        feat1_h: 'برمجة من الصفر',
        feat1_p: 'الملف مبرمج يدوياً بدون نسخ أو سرقة. كل سطر كود مكتوب خصيصاً لسيرفرك.',
        feat2_h: 'مجرب قبل لا يوصلك',
        feat2_p: 'يشتغل على سيرفر QBCore حقيقي. لو فيه أي مشكلة، ما ننزله.',
        feat3_h: 'خفييف على السيرفر',
        feat3_p: 'الملف محسّن وخفيف. ما يأثر على الـ FPS أو سرعة السيرفر.',
        feat4_h: 'تحديثات مجانية',
        feat4_p: 'اشتري مرة واحصل على كل التحديثات بدون رسوم إضافية.',
        pack_title: 'وش داخل الملف',
        pack1_h: 'ملف QBCore جاهز',
        pack1_p: 'ملف واحد كامل يشتغل على سيرفرك مباشرة',
        pack2_h: 'تعليمات عربي',
        pack2_p: 'شرح مفصّل خطوة بخطوة بالعربي',
        pack3_h: 'إعداد سهل',
        pack3_p: 'تثبيت في دقائق بدون تعقيد',
        pack4_h: 'متوافق مع QBCore',
        pack4_p: 'يشتغل مع جميع إصدارات QBCore',
        pack5_h: 'آمن ومضمون',
        pack5_p: 'ما فيه فيروسات أو كود ضار',
        pack6_h: 'دعم فني',
        pack6_p: 'نساعدك لو واجهتك أي مشكلة',
        rev_title: 'عملاؤنا يقولون',
        rev1_t: '"الملف شغال تمام على سيرفري. التثبيت كان سهل والشرح عربي واضح."',
        rev1_n: 'أحمد — السعودية',
        rev2_t: '"خفيف وما يبطي السيرفر. جربت ملفات ثانية قبل كذا كانت تسبب مشاكل."',
        rev2_n: 'محمد — الكويت',
        rev3_t: '"وقف معاي وقت التثبيت وردّ علي بسرعة. خدمة ممتازة."',
        rev3_n: 'خالد — الإمارات',
        buy_tag: 'عرض محدود',
        buy_title: 'ملف QBCore كوستم',
        buy1: '✅ ملف اسكربت مخصص',
        buy2: '✅ تعليمات تثبيت عربي',
        buy3: '✅ متوافق مع QBCore',
        buy4: '✅ تحديثات مجانية',
        buy5: '✅ دعم فني مباشر',
        buy6: '✅ تثبيت في دقائق',
        buy_btn: 'اشترِ الآن',
        buy_sub: 'دفع آمن عبر PayPal',
        faq_title: 'أسئلة شائعة',
        faq1_q: 'كيف أستلم الملف بعد الدفع؟',
        faq1_a: 'بعد الدفع، راح نرسل لك الملف على البريد حقك. وأيضاً تقدر تحمّله من صفحة التأكيد.',
        faq2_q: 'الملف يشتغل على أي سيرفر؟',
        faq2_a: 'يشتغل على أي سيرفر QBCore. بس تأكد إن الـ QBCore عندك محدّث.',
        faq3_q: 'وش أحتاج عشان أثبّت؟',
        faq3_a: 'سيرفر FiveM شغال + QBCore. الملف مع مع تعليمات عربي مفصّلة.',
        faq4_q: 'أقدر أطلب تعديلات على الملف؟',
        faq4_a: 'أيوا، تقدر تتواصل معنا ونسوي لك التعديل اللي تبيه.',
        orders_title: 'الطلبات المسبقة',
        orders_empty: 'ما في طلبات سابقة بعد',
        footer: '© 2026 FiveM Files — جميع الحقوق محفوظة',
        popup_title: 'إتمام الطلب',
        popup_product: 'ملف QBCore كوستم',
        popup_total: 'الإجمالي',
        popup_note: 'الأموال تتحول مباشرة لحسابنا عبر PayPal',
        receipt_print: 'طباعة',
        receipt_copy: 'نسخ',
        receipt_title: 'إيصال طلب',
        order_buyer: 'المشتري',
        order_email_label: 'البريد',
        order_receipt_btn: 'عرض الإيصال',
        toast_success: 'تم الدفع بنجاح!',
        toast_copy: 'تم نسخ الإيصال!',
        toast_error: 'حدث خطأ أثناء الدفع'
    },
    en: {
        nav_about: 'Product',
        nav_orders: 'Orders',
        nav_reviews: 'Reviews',
        nav_faq: 'FAQ',
        hero_label: 'QBCore Custom Script',
        hero_title: 'FiveM QBCore <span class="dot">Custom Script</span> File',
        hero_desc: 'Custom script file for QBCore servers. Hand-coded from scratch and tested on real servers. No lag, no errors. Comes with English installation guide.',
        hero_off: 'SAVE 62%',
        hero_cta: 'Get the File',
        hero_trust: '+300 clients · Free updates · Support',
        hero_tag: 'One Complete File',
        feat_title: 'Why Our Script?',
        feat1_h: 'Hand-Coded',
        feat1_p: 'Built from scratch with zero copied code. Every line written specifically for your server.',
        feat2_h: 'Tested Before Delivery',
        feat2_p: 'Runs on a real QBCore server. If there\'s any issue, we don\'t ship it.',
        feat3_h: 'Lightweight',
        feat3_p: 'Optimized and lightweight. Won\'t affect FPS or server performance.',
        feat4_h: 'Free Updates',
        feat4_p: 'Buy once and get all future updates at no extra cost.',
        pack_title: 'What\'s Included',
        pack1_h: 'Ready QBCore File',
        pack1_p: 'One complete file that runs on your server instantly',
        pack2_h: 'Installation Guide',
        pack2_p: 'Step-by-step guide in clear English',
        pack3_h: 'Easy Setup',
        pack3_p: 'Install in minutes with no complications',
        pack4_h: 'QBCore Compatible',
        pack4_p: 'Works with all QBCore versions',
        pack5_h: 'Safe & Secure',
        pack5_p: 'No viruses, no malicious code',
        pack6_h: 'Tech Support',
        pack6_p: 'We help you if you run into any issues',
        rev_title: 'What Clients Say',
        rev1_t: '"The script works perfectly on my server. Installation was easy and the guide was clear."',
        rev1_n: 'Ahmad — Saudi Arabia',
        rev2_t: '"Lightweight and doesn\'t lag the server. I tried other scripts before that caused problems."',
        rev2_n: 'Mohammed — Kuwait',
        rev3_t: '"They helped me during installation and responded fast. Great service."',
        rev3_n: 'Khalid — UAE',
        buy_tag: 'LIMITED OFFER',
        buy_title: 'QBCore Custom Script',
        buy1: '✅ Custom script file',
        buy2: '✅ English install guide',
        buy3: '✅ QBCore compatible',
        buy4: '✅ Free updates',
        buy5: '✅ Direct support',
        buy6: '✅ Install in minutes',
        buy_btn: 'Buy Now',
        buy_sub: 'Secure payment via PayPal',
        faq_title: 'Frequently Asked Questions',
        faq1_q: 'How do I receive the file after payment?',
        faq1_a: 'After payment, we\'ll send the file to your email. You can also download it from the confirmation page.',
        faq2_q: 'Does it work on any server?',
        faq2_a: 'It works on any QBCore server. Just make sure your QBCore is up to date.',
        faq3_q: 'What do I need to install it?',
        faq3_a: 'A running FiveM server + QBCore. The file comes with a detailed English guide.',
        faq4_q: 'Can I request custom modifications?',
        faq4_a: 'Yes, you can contact us and we\'ll make the modifications you need.',
        orders_title: 'Previous Orders',
        orders_empty: 'No orders yet',
        footer: '© 2026 FiveM Files — All rights reserved',
        popup_title: 'Complete Order',
        popup_product: 'QBCore Custom Script',
        popup_total: 'Total',
        popup_note: 'Payment goes directly to our PayPal account',
        receipt_print: 'Print',
        receipt_copy: 'Copy',
        receipt_title: 'Order Receipt',
        order_buyer: 'Buyer',
        order_email_label: 'Email',
        order_receipt_btn: 'View Receipt',
        toast_success: 'Payment successful!',
        toast_copy: 'Receipt copied!',
        toast_error: 'Payment error'
    }
};

// ── LANGUAGE TOGGLE ──
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('fivem_lang', lang);
    document.getElementById('langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';

    if (lang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    }

    var els = document.querySelectorAll('[data-t]');
    els.forEach(function(el) {
        var key = el.getAttribute('data-t');
        if (TR[lang] && TR[lang][key]) {
            el.innerHTML = TR[lang][key];
        }
    });
}

function toggleLang() {
    var newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
}

// ── PAYPAL ──
function openPay() {
    document.getElementById('overlay').classList.add('on');
    loadPayPal();
}

function closePay() {
    document.getElementById('overlay').classList.remove('on');
}

function closeReceipt() {
    document.getElementById('receiptOverlay').classList.remove('on');
}

function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('on');
    setTimeout(function() { t.classList.remove('on'); }, 3000);
}

function loadPayPal() {
    var box = document.getElementById('paypal-box');
    box.innerHTML = '';

    if (typeof paypal === 'undefined') {
        box.innerHTML = '<p style="text-align:center;color:#71717e;font-size:.85rem;padding:16px 0">Loading PayPal...</p>';
        return;
    }

    paypal.Buttons({
        style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', height: 48 },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    description: PRODUCT,
                    amount: { currency_code: 'USD', value: PRICE + '.00' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                var name = details.payer.name.given_name + ' ' + (details.payer.name.surname || '');
                var email = details.payer.email_address;
                var orderId = data.orderID;
                var now = new Date();
                var locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';
                var dateStr = now.toLocaleDateString(locale) + ' ' + now.toLocaleTimeString(locale);

                var order = { id: orderId, name: name, email: email, product: PRODUCT, price: PRICE, date: dateStr, timestamp: now.getTime() };
                saveOrder(order);
                sendDiscord(name, email, orderId, dateStr);

                var successMsg = currentLang === 'ar' ? 'تم الدفع بنجاح!' : 'Payment successful!';
                var thankMsg = currentLang === 'ar' ? 'شكراً لك ' + name : 'Thank you, ' + name;
                var shipMsg = currentLang === 'ar' ? 'راح تستلم الملف على بريدك قريباً' : 'You\'ll receive the file at your email soon';

                box.innerHTML = '<div style="text-align:center;padding:24px 0"><div style="font-size:2.5rem;margin-bottom:8px">✅</div><h3 style="color:#f97316;margin-bottom:6px">' + successMsg + '</h3><p style="color:#71717e;font-size:.88rem">' + thankMsg + '</p><p style="color:#71717e;font-size:.82rem;margin-top:4px">' + shipMsg + '</p></div>';
                toast(successMsg);

                setTimeout(function() { showReceipt(name, email, orderId, dateStr); }, 1500);
            });
        },
        onError: function() {
            var errMsg = currentLang === 'ar' ? 'حدث خطأ أثناء الدفع' : 'Payment error';
            var retryMsg = currentLang === 'ar' ? 'حاول مرة ثانية' : 'Please try again';
            var retryBtn = currentLang === 'ar' ? 'إعادة المحاولة' : 'Retry';
            box.innerHTML = '<div style="text-align:center;padding:24px 0"><div style="font-size:2.5rem;margin-bottom:8px">❌</div><h3 style="color:#ef4444">' + errMsg + '</h3><p style="color:#71717e;font-size:.85rem;margin-top:4px">' + retryMsg + '</p><button onclick="loadPayPal()" style="margin-top:12px;padding:9px 22px;background:#f97316;color:#000;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-family:inherit">' + retryBtn + '</button></div>';
            toast(errMsg);
        }
    }).render('#paypal-box');
}

// ── RECEIPT ──
function showReceipt(name, email, orderId, dateStr) {
    var isAr = currentLang === 'ar';
    var receiptText =
        '━━━━━━━━━━━━━━━━━━━━━━━━\n' +
        '       FIVEM.FILES\n' +
        '         ' + (isAr ? 'إيصال طلب' : 'ORDER RECEIPT') + '\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        (isAr ? 'رقم الطلب:  ' : 'Order ID:   ') + orderId + '\n' +
        (isAr ? 'التاريخ:    ' : 'Date:       ') + dateStr + '\n\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━\n' +
        (isAr ? 'المنتج:     ' : 'Product:    ') + PRODUCT + '\n' +
        (isAr ? 'الكمية:     ' : 'Quantity:   ') + '1\n' +
        (isAr ? 'الإجمالي:   ' : 'Total:      ') + '$' + PRICE + '\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        (isAr ? 'المشتري:    ' : 'Buyer:      ') + name + '\n' +
        (isAr ? 'البريد:     ' : 'Email:      ') + email + '\n\n' +
        '━━━━━━━━━━━━━━━━━━━━━━━━\n' +
        (isAr ? 'تم الدفع بنجاح عبر PayPal.\nراح تستلم الملف على بريدك قريباً.\n\nFiveM Files Store — شكراً لك' : 'Payment completed via PayPal.\nYou\'ll receive the file at your email soon.\n\nFiveM Files Store — Thank you');

    lastReceiptText = receiptText;
    document.getElementById('receiptContent').innerHTML = '<pre class="receipt-pre">' + receiptText + '</pre>';
    document.getElementById('receiptOverlay').classList.add('on');
}

function printReceipt() {
    var w = window.open('', '_blank', 'width=400,height=600');
    var dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    w.document.write(
        '<!DOCTYPE html><html><head><title>Receipt</title>' +
        '<style>body{font-family:monospace;text-align:center;direction:' + dir + ';padding:30px;color:#000}h2{margin:0 0 4px;font-size:18px}pre{white-space:pre-wrap;font-size:14px;line-height:1.8;text-align:' + (currentLang === 'ar' ? 'right' : 'left') + '}@media print{body{padding:10px}}</style></head><body>' +
        '<h2>FIVEM.FILES</h2>' +
        '<pre>' + lastReceiptText + '</pre>' +
        '<script>window.onload=function(){window.print();window.close()}<\/script>' +
        '</body></html>'
    );
    w.document.close();
}

function copyReceipt() {
    var msg = currentLang === 'ar' ? 'تم نسخ الإيصال!' : 'Receipt copied!';
    if (navigator.clipboard) {
        navigator.clipboard.writeText(lastReceiptText).then(function() { toast(msg); });
    } else {
        var ta = document.createElement('textarea');
        ta.value = lastReceiptText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast(msg);
    }
}

// ── ORDERS ──
function saveOrder(order) {
    var orders = getOrders();
    orders.unshift(order);
    localStorage.setItem('fivem_orders', JSON.stringify(orders));
    renderOrders();
}

function getOrders() {
    var data = localStorage.getItem('fivem_orders');
    return data ? JSON.parse(data) : [];
}

function renderOrders() {
    var orders = getOrders();
    var el = document.getElementById('ordersList');
    if (!el) return;

    if (orders.length === 0) {
        el.innerHTML = '<p class="orders-empty">' + (currentLang === 'ar' ? 'ما في طلبات سابقة بعد' : 'No orders yet') + '</p>';
        return;
    }

    var isAr = currentLang === 'ar';
    var html = '';
    for (var i = 0; i < orders.length; i++) {
        var o = orders[i];
        html += '<div class="order-card">' +
            '<div class="order-top"><span class="order-id">' + o.id + '</span><span class="order-date">' + o.date + '</span></div>' +
            '<div class="order-mid">' +
                '<div class="order-info"><span class="order-label">' + (isAr ? 'المشتري' : 'Buyer') + '</span><span>' + o.name + '</span></div>' +
                '<div class="order-info"><span class="order-label">' + (isAr ? 'البريد' : 'Email') + '</span><span>' + o.email + '</span></div>' +
            '</div>' +
            '<div class="order-bottom"><span class="order-product">' + o.product + '</span><span class="order-price">$' + o.price + '</span></div>' +
            '<button class="order-receipt-btn" onclick="showOrderReceipt(' + i + ')">' + (isAr ? 'عرض الإيصال' : 'View Receipt') + '</button>' +
        '</div>';
    }
    el.innerHTML = html;
}

function showOrderReceipt(index) {
    var orders = getOrders();
    var o = orders[index];
    if (!o) return;
    showReceipt(o.name, o.email, o.id, o.date);
}

// ── DISCORD ──
function sendDiscord(name, email, orderId, dateStr) {
    var mentions = ROLE_IDS.map(function(id) { return '<@&' + id + '>'; }).join(' ');
    var isAr = currentLang === 'ar';

    var receiptMsg =
        '```\n━━━━━━━━━━━━━━━━━━━━━━━━\n       FIVEM.FILES\n         ' + (isAr ? 'إيصال طلب' : 'ORDER RECEIPT') + '\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        (isAr ? 'رقم الطلب' : 'Order ID') + ':  ' + orderId + '\n' +
        (isAr ? 'التاريخ' : 'Date') + ':    ' + dateStr + '\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n' +
        (isAr ? 'المنتج' : 'Product') + ':     ' + PRODUCT + '\n' +
        (isAr ? 'الكمية' : 'Qty') + ':       1\n' +
        (isAr ? 'الإجمالي' : 'Total') + ':   $' + PRICE + '\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
        (isAr ? 'المشتري' : 'Buyer') + ':    ' + name + '\n' +
        (isAr ? 'البريد' : 'Email') + ':     ' + email + '\n━━━━━━━━━━━━━━━━━━━━━━━━\n```';

    var embed = {
        title: (isAr ? '🛒 طلب جديد!' : '🛒 New Order!'),
        color: 16750848,
        description: receiptMsg,
        fields: [
            { name: isAr ? 'المشتري' : 'Buyer', value: name, inline: true },
            { name: isAr ? 'البريد' : 'Email', value: email, inline: true },
            { name: isAr ? 'رقم الطلب' : 'Order ID', value: orderId, inline: false },
            { name: isAr ? 'المنتج' : 'Product', value: PRODUCT, inline: true },
            { name: isAr ? 'المبلغ' : 'Amount', value: '$' + PRICE, inline: true },
            { name: isAr ? 'التاريخ' : 'Date', value: dateStr, inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: 'FiveM Files Store' }
    };

    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mentions, username: 'FiveM Store', embeds: [embed] })
    }).catch(function() {});
}

// ── CURSOR ──
(function() {
    var glow = document.getElementById('cursorGlow');
    var dot = document.getElementById('cursorDot');
    var mx = -100, my = -100;
    var gx = -100, gy = -100;
    var dx = -100, dy = -100;

    document.addEventListener('mousemove', function(e) {
        mx = e.clientX;
        my = e.clientY;
    });

    document.addEventListener('mouseenter', function() {
        glow.style.opacity = '1';
        dot.style.opacity = '1';
    });
    document.addEventListener('mouseleave', function() {
        glow.style.opacity = '0';
        dot.style.opacity = '0';
    });

    // hover detection
    document.addEventListener('mouseover', function(e) {
        var t = e.target;
        if (t.closest('a, button, .cta, .buy-btn, details, .lang-btn, .order-receipt-btn, .receipt-btn, .popup-x')) {
            dot.classList.add('hover');
        }
    });
    document.addEventListener('mouseout', function(e) {
        var t = e.target;
        if (t.closest('a, button, .cta, .buy-btn, details, .lang-btn, .order-receipt-btn, .receipt-btn, .popup-x')) {
            dot.classList.remove('hover');
        }
    });

    function loop() {
        gx += (mx - gx) * 0.07;
        gy += (my - gy) * 0.07;
        dx += (mx - dx) * 0.15;
        dy += (my - dy) * 0.15;
        glow.style.left = gx + 'px';
        glow.style.top = gy + 'px';
        dot.style.left = dx + 'px';
        dot.style.top = dy + 'px';
        requestAnimationFrame(loop);
    }
    loop();
})();

// ── TILT ──
(function() {
    var cards = document.querySelectorAll('.feat-card, .pack-item, .rev-card, .buy-box, .vis-card');
    cards.forEach(function(card) {
        card.classList.add('tilt-card');
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var cx = rect.width / 2;
            var cy = rect.height / 2;
            var rotateX = ((y - cy) / cy) * -6;
            var rotateY = ((x - cx) / cx) * 6;
            card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        });
    });
})();

// ── INIT ──
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var el = document.querySelector(this.getAttribute('href'));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', function() {
    var h = document.querySelector('.head');
    h.style.background = window.scrollY > 30 ? 'rgba(12,12,16,.97)' : 'rgba(12,12,16,.92)';
});

setLang(currentLang);
renderOrders();
