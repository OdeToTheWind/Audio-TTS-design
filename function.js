function makeApiRequest(text, url) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        // Handle the data returned from the API
        console.log(data);
        // You can add code here to show the form or perform other actions.
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}
