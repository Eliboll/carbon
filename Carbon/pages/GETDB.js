
export default function GETDB(Trip_Name, Make, Model, Year, Date, Distance, CO2) {
    var url = 'http://192.168.1.212:5000/insert?';

    // Append parameters
    url += 'Trip_Name=';
    url += Trip_Name;
    url += '&Make=';
    url += Make;
    url += '&Model=';
    url += Model;
    url += '&Year=';
    url += Year;
    url += '&Date=';
    url += Date;
    url += '&Distance=';
    url += Distance;
    url += '&CO2=';
    url += CO2;

    // GET request
    fetch(url, {
    method: 'GET',
    })
        .then((response) => response.json())
        // Check if response is a JSON
        .then((responseJson) => {
        // Success
        let coTwo = responseJson["CO2"]
        alert("Trip created Succesfully! (Produced " + coTwo + " KG of CO2)");
        console.log(responseJson);
        return responseJson;
        })
        // Throw error
        .catch((error) => { 
        //alert(JSON.stringify(error));
        console.error(error);
    });
}
