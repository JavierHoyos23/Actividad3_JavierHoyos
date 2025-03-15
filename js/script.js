document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const userCount = document.getElementById("userCount");

    openSidebar.addEventListener("click", () => {
        sidebar.classList.remove("-translate-x-full");
        sidebar.setAttribute("aria-hidden", "false");
    });
    
    closeSidebar.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
        sidebar.setAttribute("aria-hidden", "true");
    });
    
    setTimeout(() => {
        userCount.textContent = Math.floor(Math.random() * 100);
    }, 1000);
});
