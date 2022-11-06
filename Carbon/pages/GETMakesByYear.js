
export default function GETMakesByYear(Year) {
    var url = 'http://192.168.1.212:5000/year?';

    // Append parameters
    url += 'year=';
    url += Year;

    // GET request
    fetch(url, {
    method: 'GET',
    })
        .then((response) => response.json())
        // Check if response is a JSON
        .then((responseJson) => {
        // Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
        return responseJson;
        })
        // Throw error
        .catch((error) => { 
        alert(JSON.stringify(error));
        console.error(error);
    });
}
