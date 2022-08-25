/**
 * 1) Найти все повторяющиеся значения в массиве объектов (num)
 * 2) Найти сумму повторяющихся значений (cost)
 */

const orderCheck = [{
        id: 0,
        num: "000141268",
        count: 1,
        cost: 32800,
        deleted: false
    },
    {
        id: 1,
        num: "000148767",
        count: 1,
        cost: 800,
        deleted: true
    },
    {
        id: 2,
        num: "000148767",
        count: 1,
        cost: 7797,
        deleted: true
    },
    {
        id: 3,
        num: "000150018",
        count: 1,
        cost: 3260,
        deleted: false
    },
    {
        id: 4,
        num: "000150018",
        count: 1,
        cost: 8098,
        deleted: false
    },
    {
        id: 5,
        num: "000150074",
        count: 1,
        cost: 4400,
        deleted: false
    },
    {
        id: 6,
        num: "000150074",
        count: 1,
        cost: 4554,
        deleted: false
    },
    {
        id: 7,
        num: "000150426",
        count: 1,
        cost: 500,
        deleted: false
    },
]

const tBody = document.querySelector('.tbody')

let data = orderCheck.map((item) => {
    
    let visibility = "hidden"
    let message = ""

    if (item.deleted === true) {
        visibility = ""
        message = "deleted"
    }
    return `
        <tr class="table__data">
            <td>
            <input type="checkbox" value="${item.cost}">${item.id}
            <span class="deleted" ${visibility}>${message}</span>
            </td>
            <td>
                ${item.num}
            </td>
            <td>
                ${item.count}
            </td>
            <td>
                ${item.cost}
            </td>
        </tr>
    `
}).join('')

tBody.innerHTML = data

const arr = []
const tData = document.querySelectorAll('.table__data')
const res = document.querySelector('.result__item')
const inPut = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

function chekedElement(e) {
    if (e.currentTarget.checked === true) {
        arr.push(e.currentTarget.value)
        res.innerHTML = arr.reduce((sum, current) => Number(sum) + Number(current), 0)
        e.currentTarget.parentNode.parentNode.classList.add('active')
    }

    if (e.currentTarget.checked === false) {
        arr.splice(arr.indexOf(e.currentTarget.value), 1)
        res.innerHTML = arr.reduce((sum, current) => Number(sum) + Number(current), 0);
        e.currentTarget.parentNode.parentNode.classList.remove('active')
    }
}

function clear() {
    const active = document.querySelectorAll('.active')

    inPut.forEach((item, index) => {
        item.checked = false
        arr.splice(index)
    })

    if (active) {
        tData.forEach((item) => {
            item.classList.remove('active')
        })
    }

    res.innerHTML = arr.reduce((sum, current) => Number(sum) + Number(current), 0);
}

btn.addEventListener('click', clear)

inPut.forEach(element => {
    element.addEventListener('click', chekedElement)
});