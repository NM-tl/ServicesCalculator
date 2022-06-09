document.addEventListener('DOMContentLoaded', () => {
    const listDesign = document.querySelector('.form-design')
    const listServices = document.querySelector('.form-services')
    const listCountry = document.querySelector('.countries');

    const listCountries = document.querySelector('.grid-countries')

    const total = document.querySelector('.total')

    const renderDesignList = design.map(renderDesign)
    const renderServicesList = services.map(renderService)
    const renderCountryList = countries.map(renderSelectCountry)
    const percent = countries.map(getPercent)

    const renderCountriesList = countries.map(renderCountry)

    if (listServices && Array.isArray(renderServicesList)) {
        listServices.innerHTML = renderServicesList.join('');
    }

    if (listDesign && Array.isArray(renderDesignList)) {
        listDesign.innerHTML = renderDesignList.join('');
    }

    if (listCountry && Array.isArray(renderCountryList)) {
        listCountry.innerHTML = renderCountryList.join('');
    }

    if(listCountries && Array.isArray(renderCountriesList)) {
        listCountries.innerHTML = renderCountriesList.join('');
    }

    const inputs = document.querySelectorAll('input')
    const resultList = document.querySelector('.result')
    // variable for test
    const resultTotal = document.querySelector('.result-total')

    function calc() {
        let totalPrice = 0;

        for (const input of inputs) {
            input.addEventListener('input', function() {
                if (input.checked) {

                    totalPrice += parseInt(input.value);
                    total.innerHTML = `${totalPrice}$`;

                    resultTotal.innerHTML = `${totalPrice}`;

                    const result = percent.map((num) => parseInt(totalPrice) / 100 * num + parseInt(totalPrice));
                    const renderResultList = result.map(renderResult)

                    if(resultList && Array.isArray(renderResultList)) {
                        resultList.innerHTML = renderResultList.join('');
                    }
                } else if (!input.checked) {
                    totalPrice -= parseInt(input.value);
                    total.innerHTML = `${totalPrice}$`;

                    resultTotal.innerHTML = `${totalPrice}`;


                    const result = percent.map((num) => parseInt(totalPrice) / 100 * num + parseInt(totalPrice));
                    const renderResultList = result.map(renderResult)

                    if(resultList && Array.isArray(renderResultList)) {
                        resultList.innerHTML = renderResultList.join('');
                    }
                }

            })
        }
    }
    calc();
})

const design = [
    {name: 'LandingPage', price: 350},
    {name: 'Application', price: 1000}
];

const services = [
    {name: 'Web', price: 1000},
    {name: 'Android', price: 1500},
    {name: 'IOS', price: 2000}
];

const countries = [
    {name: 'Ukraine', percent: 5, img: 'ua'},
    {name: 'USA', percent: 10, img: 'usa'},
    {name: 'Australia', percent: 15, img: 'aus'},
    {name: 'Germany', percent: 10, img: 'ger'},
    {name: 'Japan', percent: 20, img: 'jap'}
];


const toLowerCase = (str) => typeof srt === 'string' ? str.toLowerCase() : str;

function renderResult(item) {
    return `<div class="result-item">${item}$</div>`
}

function renderDesign(item) {
    return `<span class="ds">
                <input type="checkbox" name="checkbox" class="design" value="${item.price}" id="cb-${item.name.toLowerCase()}">
                <label for="cb-${item.name.toLowerCase()}"></label>${item.name}
            </span>`
}

function renderService(item) {
    return `<span class="sv">
                <input type="checkbox" name="checkbox" class="service" value="${item.price}" id="cb-${item.name.toLowerCase()}">
                <label for="cb-${item.name.toLowerCase()}"></label>${item.name}
            </span>`
}

function renderSelectCountry(item) {
    return `<option value="${item.name.toLowerCase()}">${item.name}</option>`
}

function renderCountry(items) {
    return `<div class="countries-container">
                <div class="countries-flag" style="background-image: url('assets/images/${items.img}.svg')"></div>
                <div class="item-name">${items.name}</div>
                <!--<div class="country-price">${items.percent}%</div>-->
</div>`
}

function getPercent(item) {
    return item.percent;
}