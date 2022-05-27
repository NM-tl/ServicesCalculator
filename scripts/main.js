document.addEventListener('DOMContentLoaded', () => {
    const listServices = document.querySelector('.form-services')
    const listDesign = document.querySelector('.form-design')
    const listPercent = document.querySelector('.grid-countries')

    const renderServicesList = services.map(renderService)
    const renderDesignList = design.map(renderDesign)
    const renderCountriesList = countries.map(renderCountry)

    if (listServices && Array.isArray(renderServicesList)) {
        listServices.innerHTML = renderServicesList.join('');
    }

    if (listDesign && Array.isArray(renderDesignList)) {
        listDesign.innerHTML = renderDesignList.join('');
    }

    if(listPercent && Array.isArray(renderCountriesList)) {
        listPercent.innerHTML = renderCountriesList.join('');
    }

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

function renderService(item) {
    return `<div><input type="checkbox" id="service" value="${item.name}">
            <label for="service">${item.name}</label></div>`
}

function renderDesign(item) {
    return `<option value="${item.name}" >${item.name}</option>`
}

function renderCountry(items) {
    return `<div class="countries-container">
                <div class="countries-flag" style="background-image: url('assets/images/${items.img}.svg')"></div>
                <div className="item-name">${items.name}</div>
</div>`
}

function calc() {
    const designPrice = services.map((i) => i.price);
    const servicesPrice = design.map((i) => i.price);
    const countriesPercent = countries.map((i) => i.percent);

    // return console.log(...designPrice)

    function arraySum(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }

    const total = () => (arraySum(designPrice) + arraySum(servicesPrice)) / 100 * arraySum(countriesPercent);


    function renderTotal(totalPrice) {
        return document.querySelector('.total').innerHTML = total(totalPrice);
    }

    renderTotal()
}

calc();



