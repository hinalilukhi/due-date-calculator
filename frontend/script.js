document.getElementById('dueDateForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const submitDate = document.getElementById('submitDate').value;
    const turnaroundHours = document.getElementById('turnaroundHours').value;

    try {
        const response = await fetch('http://localhost:3001/calculateDueDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ submitDate, turnaroundHours })
        });

        const data = await response.json();
        document.getElementById('result').innerText = `Due Date: ${data.dueDate}, Due Time: ${data.dueTime}`;

        if (!response.ok) {
            throw new Error(data.message || 'Failed to calculate due date.');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
});
