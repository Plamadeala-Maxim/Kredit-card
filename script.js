//Variabiles
const da = document.getElementById("da")
const name = document.getElementById("name")
const cardNumber = document.getElementById("cardNumber")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const four = document.getElementById("four")
const namecard = document.getElementById("namecard")
const expiration = document.getElementById("expiration")
const expirationP = document.getElementById("expirationP")
const month = document.getElementById("month")
const day = document.getElementById("day")
const securityC = document.getElementById("securityC")
const notRotated = document.querySelector(".notRotated")
const rotated = document.querySelector(".rotated")
const thrNumber = document.getElementById("thrNumber")
const hasDoi = document.querySelector("h2")

// console.log(inputs)
// const da = document.querySelector(".da")
//Functii

const cardnumber = (input) => {
    input.addEventListener("keyup",e =>{
        backFace(notRotated)
        const a = input.value.split("")
        // if (input.value === ""){
        //     first.value = "0000"
        // }else{
        // a.forEach(item => {
            if (a.length <= 4){
                    first.textContent = input.value
            }else if(a.length > 4 && a.length <= 8){
                second.textContent = input.value.slice(4,8)
            }else if(a.length > 8 && a.length <= 12){
            third.textContent = input.value.slice(8,12)
        }else if(a.length > 12 && a.length <= 16){
                four.textContent = input.value.slice(12,16)
            }
        // })

        // }
})
}
const cardName = (input) => {
    input.addEventListener("input",ev =>{
        backFace(notRotated)
        // notRotated.classList.remove("rotated")
        if (input.value === ""){
                namecard.textContent = "IVANOV IVAN"
            }else{
                namecard.textContent = input.value.toUpperCase()
            }
hasDoi.textContent = namecard.textContent
    })
}
const expirationFunction = (input,p) => {


    input.addEventListener("input",e => {
        backFace(notRotated)

        let a = input.value.split("")
if (a.length === 0){
    month.textContent = "01"
        day.textContent = "25"
}else {
    if (a.length <= 2){
        month.textContent = input.value
    }else if(a.length > 2 && a.length <= 4){
        day.textContent = input.value.slice(2,4)
    }
}
})
}
const frontFace = (first) => {
    first.classList.add("rotated")
    // first.classList.remove(first)
}
const backFace = (first) => {
    first.classList.remove("rotated")
    // first.classList.remove(first)
}
const securyty = (input) => {
    input.addEventListener("input",e => {
        let a = input.value.split("")
        thrNumber.textContent = input.value
frontFace(notRotated)

    })
}

//Apelare
expirationFunction(expiration,expirationP)
cardnumber(cardNumber)
cardName(name)
securyty(securityC)
// abc(name,da)


// let a = "fhddghdfgh"
// let b = a.split("")
// console.log(b)
// console.log(b.pop())
// let b = []
// aS.forEach(item => {
// if (aS.length > 4){
//     b.push(aS[aS.length-1])
//     aS.pop()
//     console.log("da")
// }
// })
// console.log(b.reverse().join(""))
// console.log(aS)
