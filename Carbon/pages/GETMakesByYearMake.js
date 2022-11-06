
export default function GETMakesByYear(Year, Make) {
    var url = 'http://192.168.1.212:5000/yearmake?';

    // Append parameters
    url += 'year=';
    url += Year;
    url += '&make=';
    url += Make;

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
        //alert(JSON.stringify(error));
        console.error(error);
    });
}
