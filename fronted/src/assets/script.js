const API_URLS = {
    basico: "https://bitecingcom.ipage.com/testapi/basico.js",
    intermedio: "https://bitecingcom.ipage.com/testapi/intermedio.js"
};

async function getFlights(type) {
    const url = API_URLS[type];
    const flightResults = document.getElementById('flightsList');
    flightResults.innerHTML = "<li>Cargando...</li>";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener los vuelos");
        }
        const flights = await response.json();
        displayFlights(flights);
    } catch (error) {
        flightResults.innerHTML = `<li>${error.message}</li>`;
    }
}

function displayFlights(flights) {
    const flightResults = document.getElementById('flightsList');
    flightResults.innerHTML = ""; // Limpiar resultados previos

    flights.forEach(flight => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Origen:</strong> ${flight.DepartureStation} <br>
            <strong>Destino:</strong> ${flight.ArrivalStation} <br>
            <strong>Aerolínea:</strong> ${flight.FlightCarrier} <br>
            <strong>Número de Vuelo:</strong> ${flight.FlightNumber} <br>
            <strong>Precio:</strong> $${flight.Price}
        `;
        flightResults.appendChild(listItem);
    });
}
