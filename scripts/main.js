document.addEventListener('DOMContentLoaded', () => {
    const listDesign = document.querySelector('.form-design')
    const listServices = document.querySelector('.form-services')
    const listCountries = document.querySelector('.grid-countries')

    const total = document.querySelector('.total')


    const renderDesignList = design.map(renderDesign)
    const renderServicesList = services.map(renderService)
    const renderCountriesList = countries.map(renderCountry)
    // const percent = countries.map(getPercent)

    if (listServices && Array.isArray(renderServicesList)) {
        listServices.innerHTML = renderServicesList.join('');
    }

    if (listDesign && Array.isArray(renderDesignList)) {
        listDesign.innerHTML = renderDesignList.join('');
    }

    if(listCountries && Array.isArray(renderCountriesList)) {
        listCountries.innerHTML = renderCountriesList.join('');
    }


    // selectDesign();
    // selectCheckbox();

    // let designVal = selectDesign();
    //
    // if(designVal === undefined) {
    //     designVal = 0;
    // }
    //
    // console.log(`DesVal: ${designVal}`);
    //
    // let serviceVal = selectCheckbox();
    //
    // if(serviceVal === undefined) {
    //     serviceVal = 0;
    // }
    //
    // console.log(`ServVal: ${serviceVal}`);
    //
    // let sum = designVal + serviceVal;
    //
    // console.log(`Total: ${sum}`);

    // calc();


    // const serviceCheck = document.querySelectorAll('.service')
    // const designCheck = document.querySelectorAll('.design')

    // let designValue = getDesignValue(designCheck);
    // let cbVal = getServiceValue(serviceCheck);


    const percentTotal = document.querySelectorAll('.country-price')
    const inputs = document.querySelectorAll('input')


    function calc() {
        let totalPrice = 0;

        for(const input of inputs) {
            input.addEventListener('input', function() {
                if(input.checked){
                    totalPrice += parseInt(input.value);
                    console.log(`TotalPrice: ${totalPrice}`);
                    total.innerHTML = `Total Price: ${totalPrice}$`;
                    percentTotal.innerHTML = totalPrice / 100 * 5

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

function renderCountry(items) {
    return `<div class="countries-container">
                <div class="countries-flag" style="background-image: url('assets/images/${items.img}.svg')"></div>
                <div class="item-name">${items.name}</div>
                <div class="country-price">${items.percent}%</div>
</div>`
}

function getPercent(item) {
    let countryPercent = item.percent;
    return console.log(countryPercent);
}



// function getDesignValue(designCheck) {
//     designCheck.forEach((checkbox) => {
//         checkbox.addEventListener('change', (event) => {
//
//             if (event.target.checked) {
//                 let designValue = event.target.value;
//                 return designValue;
//             }
//         })
//     })
// }
//
// function getServiceValue(allCheckbox) {
//     allCheckbox.forEach((checkbox) => {
//         checkbox.addEventListener('change', (event) => {
//
//             if (event.target.checked) {
//                 let serviceVal = event.target.value;
//                 return console.log(serviceVal);
//             }
//         })
//     })
// }

// переписать селект на инпут чек-бокс






// function selectDesign() {
//     const select = document.getElementById('design');
//
//     select.addEventListener('change', function() {
//         let getVal = this.value;
//         return console.log(getVal);
//     })
// }

// function selectCheckbox(serviceVal) {
//     const allCheckbox = document.querySelectorAll('.service')
//
//     allCheckbox.forEach((checkbox) => {
//         checkbox.addEventListener('change', (event) => {
//
//             if (event.target.checked) {
//                 let serviceVal = event.target.value;
//                 return console.log(serviceVal);
//             }
//         })
//     })
// }

// function calc(selectVal, serviceVal) {
//     const allCheckbox = document.querySelectorAll('.service')
//     const select = document.getElementById('design');
//
//     select.addEventListener('change', function() {
//         selectVal = this.value;
//         return selectVal;
//     })
//
//     console.log(selectVal);
//
//     allCheckbox.forEach((checkbox) => {
//         checkbox.addEventListener('change', (event) => {
//
//             if (event.target.checked) {
//                 let serviceVal = event.target.value;
//                 return console.log(serviceVal);
//             }
//         })
//     })
//
//
// }



// function calc() {
//     const designPrice = services.map((i) => i.price);
//     const servicesPrice = design.map((i) => i.price);
//     const countriesPercent = countries.map((i) => i.percent);
//
//     // return console.log(...designPrice)
//
//     function arraySum(arr) {
//         let sum = 0;
//         for(let i = 0; i < arr.length; i++){
//             sum += arr[i];
//         }
//         return sum;
//     }
//
//     const total = () => (arraySum(designPrice) + arraySum(servicesPrice)) / 100 * arraySum(countriesPercent);
//
//
//     function renderTotal(totalPrice) {
//         return document.querySelector('.total').innerHTML = total(totalPrice);
//     }
//
//     renderTotal()
// }

