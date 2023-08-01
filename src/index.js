module.exports = function toReadable (number) {
    let res; 
    let Xxx = Math.floor(number / 100);
    let xXx = Math.floor(number / 10 - Xxx * 10);
    let xxX = number - Xxx * 100 - xXx * 10;
    let xxx = xXx * 10 + xxX;
    
    let numb0_19=['zero', 
                    'one', 
                    'two',
                    'three',
                    'four',
                    'five',
                    'six',
                    'seven',
                    'eight',
                    'nine',
                    'ten',
                    'eleven',
                    'twelve',
                    'thirteen',
                    'fourteen',
                    'fifteen',
                    'sixteen',
                    'seventeen',
                    'eighteen', 
                    'nineteen',];
    let dozent = ['twenty',
                    'thirty',
                    'forty',
                    'fifty',
                    'sixty',
                    'seventy',
                    'eighty',
                    'ninety'];
    
    if(number>=0 && number<20)
        res = numb0_19[number];
    else 
        if (number >= 20 && number <= 99)   
            if (Number.isInteger(number / 10)) 
                res = dozent[xXx-2];
            else
                res = dozent[xXx-2] + ' ' + numb0_19[xxX];
        else 
            if(number>=100)
                if(Number.isInteger(number / 100))
                    res = numb0_19[Xxx] + ' ' + 'hundred'; 
                else
                    if (xxx > 0 && xxx <= 19) 
                        res = numb0_19[Xxx] + ' ' + 'hundred' + ' ' + numb0_19[xxx];
                    else
                        if (xxX == 0 && xxx >= 20 && xxx <= 99) 
                            res = numb0_19[Xxx] + ' ' + 'hundred' + ' ' + dozent[xXx-2];
                        else
                            if (xxX != 0 && xxx >= 20 && xxx <= 99) 
                                res = numb0_19[Xxx] + ' ' + 'hundred' + ' ' + dozent[xXx-2] + ' ' + numb0_19[xxX];
    

return res;
                
}
