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
        if(data.dueDate){
        document.getElementById('result').innerText = `Due Date: ${data.dueDate}, Due Time: ${data.dueTime}`;
        }
        else
        {
            const resultDiv = document.getElementById('result');
            resultDiv.innerText = 'Please add request on working time';

            const button = document.createElement('button');
            button.textContent = 'Submit Anyway';
            button.addEventListener('click', async function() {
                console.log('Submit Anyway button clicked');
                if(confirm("Are you sure you want to submit forcefully!\nEither OK or Cancel.")){
                const response = await fetch('http://localhost:3001/calculateDueDate-force', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ submitDate, turnaroundHours })
                });
                button.remove();
                const data = await response.json();
                document.getElementById('result').innerText = `Due Date: ${data.dueDate}, Due Time: ${data.dueTime}`;
            }
                button.remove();
            });
            document.body.appendChild(button);
        }
        if (!response.ok) {
            throw new Error(data.message || 'Failed to calculate due date.');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
});
