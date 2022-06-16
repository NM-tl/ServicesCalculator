document.addEventListener('DOMContentLoaded', () => {
    const listDesign = document.querySelector('.form-design')
    const listServices = document.querySelector('.form-services')
    const listCountry = document.querySelector('.countries');
    const listCountries = document.querySelector('.grid-countries')
    const total = document.querySelector('.total')
    const resultInfo = document.querySelector('.result-info')

    const renderCountryList = countries.map(renderSelectCountry)
    const renderDesignList = design.map(renderDesign)
    const renderServicesList = services.map(renderService)
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

    const select = document.querySelector('select');
    const inputs = document.querySelectorAll('input')
    const resultList = document.querySelector('.result')
    const resultTotal = document.querySelector('.result-total')

    function calc() {
        let totalPrice = 0;

        for (const input of inputs) {
            input.addEventListener('input', function() {
                if (input.checked) {
                    let option = select.options[select.selectedIndex];

                    let selectedCountryName = option.text;
                    let selectedCountryImg = option.id;
                    let selectedCountryPercent = option.value;

                    let selectedOption = [{
                        name: selectedCountryName,
                        percent: selectedCountryPercent,
                        img: selectedCountryImg
                    }];

                    const resultInfoValues = selectedOption.map(renderInfo)

                    if(resultInfo && Array.isArray(resultInfoValues)) {
                        resultInfo.innerHTML = resultInfoValues.join('');
                    }

                    let countryPercent = listCountry.value;
                    // TotalResult
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
                    // TotalResult
                    totalPrice -= parseInt(input.value);
                    total.innerHTML = `${totalPrice}$`;
                    // ResultInfo
                    resultTotal.innerHTML = `${totalPrice}`;
                    // FooterResult - fix
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


function renderInfo(item) {
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

const switchBtn = document.querySelector('.switch');

switchBtn.addEventListener('click', function switchMode () {
    const el = document.body;
    const header = document.querySelector('.header');
    const switchBtn = document.querySelector('.switch');
    const resultBlock = document.querySelector('.result-block');
    const resultCurrency = document.querySelector('.result-currency');
    const wCountries = document.querySelector('.wrapper-countries')

    el.classList.toggle('body-dark');
    header.classList.toggle('header-dark');
    switchBtn.classList.toggle('switch-dark');
    resultBlock.classList.toggle('result-block__dark');
    resultCurrency.classList.toggle('result-currency__dark');
    wCountries.classList.toggle('wrapper-countries__dark')
});

