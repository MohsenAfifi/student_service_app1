function login() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    if (phone && password) { alert("تم تسجيل الدخول بنجاح!"); }
    else { alert("❌ يرجى إدخال جميع البيانات!"); }
}