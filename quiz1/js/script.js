// Function to load content based on the page parameter
function loadContent(page) {
    // Get the content container element
    const contentDiv = document.getElementById('content');

    // Define content for each page
    const contentMap = {
        homepage: `
            <h2>Welcome to My Website</h2>
            <p>This is the homepage content.</p>
        `,
        profile: `
            <h2>Profile</h2>
            <p>This is the profile page content.</p>
        `,
        hometown: `
            <h2>Hometown</h2>
            <p>This is the hometown description.</p>
        `,
        food: `
            <h2>Local Food</h2>
            <p>This is the local food description.</p>
        `,
        tourist: `
            <h2>Tourist Places</h2>
            <p>This is the tourist places description.</p>
        `,
    };

    // Check if the requested page exists in the contentMap
    if (contentMap.hasOwnProperty(page)) {
        contentDiv.innerHTML = contentMap[page];
    } else {
        // Page not found, you can handle this case accordingly
        contentDiv.innerHTML = '<h2>Page Not Found</h2>';
    }
}







function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove the '#' character
    const page = hash || 'homepage';
    loadContent(page);
}

// Add an event listener to handle hash changes
window.addEventListener('hashchange', handleHashChange);

// Initial page load
handleHashChange();