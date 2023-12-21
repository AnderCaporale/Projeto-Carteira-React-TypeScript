const formatDate = (date: string): string=>{

    const dateFormatted:Date  = new Date(date);
    const day:number|string = dateFormatted.getDate() > 9 ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;
    const month:number|string  = dateFormatted.getMonth()+1 > 9 ? dateFormatted.getMonth()+1 : `0${dateFormatted.getMonth()+1}`;
    const year:number  = dateFormatted.getFullYear();


    return `${day}/${month}/${year}`;

}


export default formatDate;