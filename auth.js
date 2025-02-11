document.addEventListener("DOMContentLoaded", function () {
    const currentUser = localStorage.getItem("user");
    const allowedPages = ["registration.html", "registr.html", "login.html", "forgot_password.html"];

    const currentPage = window.location.pathname.split("/").pop();

    // Если пользователь не вошел и находится на защищенной странице, перенаправляем на страницу входа
    if (!currentUser && !allowedPages.includes(currentPage)) {
        alert("You must be logged in to access this page.");
        window.location.href = "registration.html";
    }
});
