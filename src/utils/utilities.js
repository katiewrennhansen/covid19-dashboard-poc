

export function formatComma(num){
    num = num.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
}

export function formatDate(date){
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateArray = date.split('/');

    let formattedMonth;
    if(dateArray[0].split('')[0] === '0'){
        formattedMonth = dateArray[0].split('')[1];
    } else {
        formattedMonth = dateArray[0]
    }

    const month = monthArray[formattedMonth];
    const day = dateArray[1];
    const year = dateArray[2];
    return `${month} ${day}, ${year}`    
}
