document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const userCount = document.getElementById("userCount");

    openSidebar.addEventListener("click", () => {
        sidebar.classList.remove("-translate-x-full");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
    });

    setTimeout(() => {
        userCount.textContent = Math.floor(Math.random() * 100);
    }, 1000);
});
