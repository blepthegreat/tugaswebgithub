document.getElementById('preOrderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var color = document.getElementById('color').value;
    var notes = document.getElementById('notes').value;

    // Basic validation
    if (name === '' || email === '' || phone === '' || color === '') {
        alert("Semua field wajib diisi!");
        return;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email tidak valid!");
        return;
    }

    // Show success message
    alert("Terima kasih telah melakukan pre-order!");

    // Optionally, reset the form
    document.getElementById('preOrderForm').reset();
});
