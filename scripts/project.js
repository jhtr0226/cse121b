// backup one: https://api.exchangeratesapi.io/v1/latest?access_key = d29a76ce296cebee05b48740917edced


/*function convertingCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCountry = document.getElementById("fromCountry").value;
    const toCountry = document.getElementById("toCountry").value;


    const accessKey = 'fc45294bf2a61e1317e3d08976876113';
    
    const targetCurrency = '';

    const apiUrl = `http://data.fixer.io/api/latest?access_key=${accessKey}&base=${baseCurrency}&symbols=${targetCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCountry];
            const finalconversion = amount * exchangeRate;
            console.log(data);

            document.getElementById("finalconversion").textContent = finalconversion.toFixed(2);

        })
        .catch(error => console.error('Error:', error));
}
document.getElementById("button").addEventListener("click", convertingCurrency)
*/


document.addEventListener("DOMContentLoaded", () => {
    const accessKey = "fc45294bf2a61e1317e3d08976876113";
    const baseCurrency = "";
    const targetCurrency = "";

    const apiUrl = const apiUrl = `https://data.fixer.io/api/latest?access_key=${accessKey}&base=${baseCurrency}&symbols=${targetCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            rates = data.rates;
            const fromCountry = document.getElementById("fromCountry");
            const toCountry = document.getElementById("toCountry");

            for (const wwc in rates) {
                const drop1 = document.createElement("option");
                drop1.value = wwc;
                drop1.textContent = wwc;

                const drop2 = document.createElement("option")
                drop2.value = wwc;
                drop2.textContent = wwc;

                fromCountry.appendChild(drop1);
                toCountry.appendChild(drop2);
            }
        })
        .catch(error => console.error("Error", error));


    function swapping() {
        const fromCountry = document.getElementById("fromCountry");
        const toCountry = document.getElementById("toCountry");

        const temp = fromCountry.value;
        fromCountry.value = toCountry.value;
        toCountry.value = temp;

        converting();
    }


    function converting() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCountryValue = document.getElementById("fromCountry").value;
        const toCountryValue = document.getElementById("toCountry").value;

        const exchangeRate = rates[toCountryValue];
        const finalconversion = amount * exchangeRate;

        document.getElementById("finalconversion").textContent = finalconversion.toFixed(2);
    }


    document.getElementById("button").addEventListener("click", converting);

    document.getElementById("swap").addEventListener("click", swapping);



});



