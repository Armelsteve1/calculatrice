function calculator(){
    that        = this,
    this.field  ="input#number",
    this.button ="#body .buttons",
    this.init   =false,

    this.run  =function()
    {
        $(this.button).click(function(){
            var value =$(this).html();
            if(that.init ==false){
                $(that.field).val("");
                that.init=true;
            }
            if(value!="=")
            $(that.field).val($(that.field).val()+value);
            that.dispatcher(value);
            that.calculAngle();
        });
    },

    this.dispatcher = function(value)
    {
        if($(this.field).val().indexOf("/") != -1)
          this.operation(value, "/");
        if($(this.field).val().indexOf("x") != -1)
          this.operation(value, "x");
        if($(this.field).val().indexOf("-") != -1)
          this.operation(value, "-");
        if($(this.field).val().indexOf("+") != -1)
          this.operation(value, "+");
    },

    this.operation = function(value,symbol)
    {
        var number = $(this.field).val().split(symbol),
        result;
        if (symbol =="/")
            result = number[0]/number[1];
        if (symbol =="x")
            result = number[0]*number[1];
        if (symbol =="-")
            result = number[0]-number[1];
        if (symbol =="+")
            result =parseFloat( number[0])+parseFloat( number[1]);
        

        result = Math.round((result)*100)/100;
        if (number.length > 1){
            if(value =="=")
              $(this.field).val(result);
              else if (number.length>2)
              $(this.field).val(result+symbol);
        }
      
    function calculAngle() {
        if (operat == 'COS') {
            result = Cosinus(number);
            console.log(result);
            result.innerHTML = result;
            operation.innerHTML = operat + '(' + number +')';
        }
        else if(operat == 'SIN'){
            result = Sinus(number);
            console.log(result);
            result.innerHTML = result;
            operation.innerHTML = operat + '(' + number + ')';
        }
        else if(operat == 'TAN'){
            result = Tangente(number);
            console.log(result);
            result.innerHTML = result;
            operation.innerHTML = operat + '(' + number + ')';
        }
       
        else if(operat == 'X²')
        {
            result = puissance(number, 2);
            console.log(result);
            result.innerHTML = result;
            operation.innerHTML = number + '²';
        }  
        }
    };
}