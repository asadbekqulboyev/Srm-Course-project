export const months = [
    {short:'Yan', full:'Yanvar'},
    {short:'Fev', full:'Fevral'},
    {short:'Mt', full:'Mart'},
    {short:'Apr', full:'Aprel'},
    {short:'My', full:'May'},
    {short:'In', full:'Iyun'},
    {short:'Il', full:'Iyul'},
    {short:'Avg', full:'Avgust'},
    {short:'Sen', full:'Sentabr'},
    {short:'Okt', full:'Oktabr'},
    {short:'Noy', full:'Noyabr'},
    {short:'Dek', full:'Dekabr'},
]
export const weeks = [
    {short:'Du', full:'Dushanba'},
    {short:'Se', full:'Seshanba'},
    {short:'Chor', full:'Chorshanba'},
    {short:'Pa', full:'Payshanba'},
    {short:'Ju', full:'Juma'},
    {short:'Sha', full:'Shanba'},
    {short:'Yak', full:'Yakshanba'},
]
function getMinusDate (number){
    let date = new Date(new Date().setDate(new Date().getDate() - number))
    return date
}
function getPlusDate (number){
    let date = new Date(new Date().setDate(new Date().getDate() + number))
    return date
}
export const useDate =()=>{
    const d=new Date()
    let day = weeks[d.getDay()]
    let date=d.getDate()
    let year=d.getFullYear()
    let month=months[d.getMonth()]
    let week=(count=0)=>[        
        getMinusDate(3 - count),
        getMinusDate(2 - count),
        getMinusDate(1 - count),
        getMinusDate(0-count),
        getPlusDate(1 + count),
        getPlusDate(2 + count),
        getPlusDate(3 + count)

    ];
    return {year, day, month,date, week}
}
export default useDate