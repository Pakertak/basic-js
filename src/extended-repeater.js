module.exports = function repeater(str, options) {
    if(options.hasOwnProperty('addition')){
            let additional = options['addition'];
            let additSeparator='';
            if(options.hasOwnProperty('additionSeparator'))
            additSeparator=options['additionSeparator'];
            for(let i=0; i < options['additionRepeatTimes']-1; i++){
                additional+=additSeparator;
                additional+=options['addition'];
            }
            str+=additional;
        }
        let separator;
        if(options.hasOwnProperty('separator'))
            separator=options['separator'];
        else 
        separator='+';
    let strnew=str;
    for(let i = 0; i < options ['repeatTimes']-1; i++)
    {
        str+=separator;
        str+=strnew;
    }
    
    return str;
};
  