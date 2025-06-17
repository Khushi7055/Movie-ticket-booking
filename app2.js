document.addEventListener("DOMContentLoaded", function() {
    const movieSelect = document.getElementById("movie");
    const showtime = document.getElementById("showtime");
    const ticketCount = document.getElementById("countticket");
    const totalPriceElement = document.getElementById("total price")
    const bookButton = document.getElementById("book-button");

    // Function to update the total price
    function updateTotalPrice() {
        const moviePrice = parseFloat(movieSelect.value);
        const tickets = parseInt(ticketCount.value);
        const totalPrice = moviePrice * tickets;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Event listeners to update the total price on changes
    movieSelect.addEventListener("change", updateTotalPrice);
    ticketCount.addEventListener("input", updateTotalPrice);

    // Event listener for the booking button
    bookButton.addEventListener("click", function() {
        const movie = movieSelect.options[movieSelect.selectedIndex].text;
        const tickets = ticketCount.value;
        const totalPrice = totalPriceElement.textContent;

        alert(`You have booked ${tickets} tickets for "${movie}". Total: $${totalPrice}`);
    });

    // Initial total price update
    updateTotalPrice();
});
