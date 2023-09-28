
function loadContent(page) {

    const contentDiv = document.getElementById('content');


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


    if (contentMap.hasOwnProperty(page)) {
        contentDiv.innerHTML = contentMap[page];
    } else {
        
        contentDiv.innerHTML = '<h2>Page Not Found</h2>';
    }
}



function handleHashChange() {
    const hash = window.location.hash.slice(1); 
    const page = hash || 'homepage';
    loadContent(page);
}


window.addEventListener('hashchange', handleHashChange);


handleHashChange();
