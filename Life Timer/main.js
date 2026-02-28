const settingIconEle = document.getElementById("settingIcon")
const settingContentEle = document.getElementById("settingContent")
const intialTextEle = document.getElementById("initialText")
const afterBtnText = document.getElementById("AfterDOBText")
const dobButtonEle = document.getElementById("dobbutton")
const dobInputEle = document.getElementById("dob-content")

// Select all Dob detail Element

const yearEle = document.getElementById("years")
const monthEle = document.getElementById("months")
const dayEle = document.getElementById("days")
const hourEle = document.getElementById("hours")
const minuteEle = document.getElementById("minutes")
const secondEle = document.getElementById("seconds")

  //Create new variable

let isSettingOpenEle = false
let dateOfBirth;

const makeTwoDigit = (number) => {
    return number > 9 ? number : `0${number}`
}

 //Create function1

const toggleDob = (()=>{
    if(isSettingOpenEle){
        settingContentEle.classList.add("hide")
    }else{
        settingContentEle.classList.remove("hide")
    }

    isSettingOpenEle = !isSettingOpenEle
})


const UpdateAge =()=> {
    const currentDate = new Date()
    //console.log(currentDate)
    let dateDiff;
    if(currentDate<dateOfBirth){
        dateDiff = null
    }else{
       dateDiff = currentDate - dateOfBirth 
    }
    
    // const seconds = Math.floor(dateDiff / 1000)
    // const minutes = Math.floor(seconds / 60)
    // const hours = Math.floor(minutes / 60)
    // const totalDays = Math.floor(hours / 24)
    // const years = Math.floor(totalDays / 365)
    // const months = Math.floor((totalDays % 365) / 30)
    // const days = (totalDays % 365) % 30

    const years = Math.floor(dateDiff/(1000*60*60*24*365))
    const months = Math.floor(dateDiff/(1000*60*60*24*365) % 12)
    const days = Math.floor(dateDiff/(1000*60*60*24) % 30)
    const hours = Math.floor(dateDiff/(1000*60*60) % 24)
    const minutes = Math.floor(dateDiff/(1000*60) % 60)
    const seconds = Math.floor(dateDiff/(1000) % 60)

    yearEle.innerHTML = makeTwoDigit(years)
    monthEle.innerHTML = makeTwoDigit(months)
    dayEle.innerHTML = makeTwoDigit(days)
    hourEle.innerHTML = makeTwoDigit(hours)
    minuteEle.innerHTML= makeTwoDigit(minutes)
    secondEle.innerHTML= makeTwoDigit(seconds)

    console.log('dateDiff', dateDiff , years, months, days, hours, minutes, seconds);
}


   //Create function2

const setDOBHandler =()=>{
    dateOfBirth = dobInputEle.value ? new Date(dobInputEle.value) : null

    if(dateOfBirth){
        intialTextEle.classList.add("hide")
        afterBtnText.classList.remove("hide")
        setInterval(()=>UpdateAge(),1000)
    }else{
         intialTextEle.classList.remove("hide")
        afterBtnText.classList.add("hide")
    }
    //console.log(dateOfBirth)

}




// Call All functions

settingIconEle.addEventListener("click", toggleDob)
dobButtonEle.addEventListener("click", setDOBHandler)
// UpdateAge()