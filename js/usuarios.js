document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("userList");

    try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        
        data.results.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "bg-white p-4 rounded shadow";
            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="Foto de ${user.name.first}" class="rounded-full w-16 h-16 mx-auto">
                <h3 class="text-center text-lg font-semibold mt-2">${user.name.first} ${user.name.last}</h3>
                <p class="text-center text-gray-500">${user.email}</p>
            `;
            userList.appendChild(userCard);
        });
    } catch (error) {
        console.error("Error cargando usuarios:", error);
    }
});
