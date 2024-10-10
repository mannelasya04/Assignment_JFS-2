document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for this prototype

    // Retrieve form values
    const title = document.getElementById('title').value;
    const type = document.getElementById('type').value;
    const department = document.getElementById('department').value;
    const country = document.getElementById('country').value;
    const description = document.getElementById('description').value;
    const openingDate = document.getElementById('openingDate').value;
    openingDate = document.getElementById("openingDate").value;

// Validate required fields
if (!title || !type || !department || !country || !description || !openingDate) {
alert("Please fill in all required fields.");
return false;
}

// Validate date
const currentDate = new Date();
const selectedDate = new Date(openingDate);
if (selectedDate > currentDate) {
alert("Opening date cannot be in the future.");
return false;
}

return true;
});