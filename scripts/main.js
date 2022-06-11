document.addEventListener('DOMContentLoaded', () => {
    const listDesign = document.querySelector('.form-design')
    const listServices = document.querySelector('.form-services')
    const listCountry = document.querySelector('.countries');
    const resultInfo = document.querySelector('.result-info')
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
    const resultTotal = document.querySelector('.result-total')

    function calc() {
        let totalPrice = 0;

        for (const input of inputs) {
            input.addEventListener('input', function() {
                if (input.checked) {
                    const select = document.querySelector('select');
                    let option = select.options[select.selectedIndex];

                    let selectedCountryName = option.text;
                    let selectedCountryImg = option.id;
                    let selectedCountryPercent = option.value;

                    let op = [{
                        name: selectedCountryName,
                        percent: selectedCountryPercent,
                        img: selectedCountryImg
                    }];

                    const resInfo = op.map(renderI)

                    if(resultInfo && Array.isArray(resInfo)) {
                        resultInfo.innerHTML = resInfo.join('');
                    }

                    let countryPercent = listCountry.value;
                    // Total result
                    totalPrice += parseInt(input.value);
                    total.innerHTML = `${totalPrice}$`;
                    // ResultInfo
                    const finalResult = parseInt(totalPrice) / 100 * countryPercent + parseInt(totalPrice);
                    resultTotal.innerHTML = `${finalResult}`;
                    // FooterResult
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


function renderI(item) {
    console.log(item)
    return `<div class="country-name">${item.name}</div>
            <div class="country-icon" style="background-image: url('assets/images/${item.img}.svg')"></div>
            <div class="country-percent">${item.percent}%</div>`
}

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
    return `<option value="${item.percent}" id="${item.img}">${item.name}</option>`
}

function renderCountry(items) {
    return `<div class="countries-container">
                <div class="countries-flag" style="background-image: url('assets/images/${items.img}.svg')"></div>
                <div class="item-name">${items.name}</div>
</div>`
}

function getPercent(item) {
    return item.percent;
}

