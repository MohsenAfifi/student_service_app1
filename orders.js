function submitOrder() {
    let details = document.getElementById("orderDetails").value;
    if (details) { alert("✅ تم إرسال الطلب بنجاح!"); }
    else { alert("❌ الرجاء إدخال تفاصيل الطلب!"); }
}