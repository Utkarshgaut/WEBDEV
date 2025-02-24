function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerText = `Your age is: ${years} years, ${months} months, and ${days} days.`;
}