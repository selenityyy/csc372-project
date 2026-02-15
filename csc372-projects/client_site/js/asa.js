// api key
const key = "AIzaSyDlc8NJwhz80XHsFzwpzMFHBFspV1Tymlc";
// calendar id
const cal_id = "c_9154dbaef154fed4454a552c0b883da497eb48b3effda7f4dad6837e80c43dca@group.calendar.google.com";

async function fetchEvents() {
    const container = document.getElementById("events-list");
    // spinning koi fish loader
    container.innerHTML = `<div class="loader">𓆝</div>`;

    try {
        // fetches the Google Calendar API
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(cal_id)}/events?key=${key}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}&maxResults=10`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            container.innerHTML = "No events found.";
            return;
        }
        // can create new events here
        container.innerHTML = data.items.map(event => {
            const date = new Date(event.start.dateTime || event.start.date);
            return `
                <div class="event">
                    <h3>${event.summary}</h3>
                    <p>${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>`;
        }).join("");
    }
    catch (error) {
        console.error("Error fetching events:", error);
        document.getElementById("events-list").innerHTML = "Error fetching events.";
    }
}

fetchEvents();

// goes back to homepage when logo is clicked
function goHome() {
    window.location.href = "/csc372-projects/client_site/index.html";
}