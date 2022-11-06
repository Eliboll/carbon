
 export default async function GETMakesByYear(Year) {
    var url = 'http://192.168.1.212:5000/year?';

    // Append parameters
    url += 'year=';
    url += Year;

    // GET request
    await fetch(url, {
    method: 'GET',
    })
        .then((response) => response.json())
        // Check if response is a JSON
        .then((responseJson) => {
        // Success
        //alert(JSON.stringify(responseJson));
        reply = JSON.stringify(responseJson).toString();
        console.log("CALL LOG: " + (reply));
        console.log("Len: " + (reply.length))
        return reply;
        })
        // Throw error
        .catch((error) => { 
        //alert("Alerting 'error'")
        //alert(JSON.stringify(error));
        console.error(error);
    });
}
