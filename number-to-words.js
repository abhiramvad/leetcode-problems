/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let final = "";
    i = 0
    if(num==0){
        final = "Zero"
    }else{
    while(num!=0){
        temp_num = parseInt(num%1000)
        num = parseInt(num/1000)
        final = convertToWords(temp_num,i) + final
        i++
    }
    }
    return final.replace(/\s+/g,' ').trim();
};


function convertToWords(num,group){
    var group_dict={
        0:"",
        1:"Thousand",
        2:"Million",
        3:"Billion",
    }
     
    var units = {
        1:'One',
        2:'Two',
        3:'Three',
        4:'Four',
        5:'Five',
        6:'Six',
        7:'Seven',
        8:'Eight',
        9:'Nine',
        0:''
    }
    
    var tens_less_than_twenty = {
        10:"Ten",
        11:"Eleven",
        12:"Twelve",
        13:"Thirteen",
        14:"Fourteen",
        15:"Fifteen",
        16:"Sixteen",
        17:"Seventeen",
        18:"Eighteen",
        19:"Nineteen",
    }
    
    var tens = {
       
        20:"Twenty",
        30:"Thirty",
        40:"Forty",
        50:"Fifty",
        60:"Sixty",
        70:"Seventy",
        80:"Eighty",
        90:"Ninety"
    }
        //get hundreds
        word =  parseInt(num/100) > 0? units[parseInt(num/100)] + " Hundred" :"" 
        word+= (parseInt(num%100) <20 &&  parseInt(num%100) >=10) ? " " +tens_less_than_twenty[parseInt(num%100)] :parseInt(num%100) <10? " "+units[parseInt(num%10)]  : (num%10==0)?" "+tens[parseInt(num%100)-parseInt(num%10)]:" "+tens[parseInt(num%100)-parseInt(num%10)]+" "+units[parseInt(num%10)]
        //add group
        word+=group>0&&num>0?" " + group_dict[group]+ " ":""

    return word
}
