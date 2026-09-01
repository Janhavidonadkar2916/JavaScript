function arrayDemo(){

    let numbers=[10,25,40,55,70];

    let result="<h3>Array Operations</h3>";

    result+="Original Array : "+numbers+"<br><br>";

    // push()

    numbers.push(90);

    result+="After push(90) : "+numbers+"<br>";

    // pop()

    numbers.pop();

    result+="After pop() : "+numbers+"<br>";

    // shift()

    numbers.shift();

    result+="After shift() : "+numbers+"<br>";

    // unshift()

    numbers.unshift(5);

    result+="After unshift(5) : "+numbers+"<br>";

    // splice()

    numbers.splice(2,1,100);

    result+="After splice() : "+numbers+"<br>";

    // slice()

    let sliced=numbers.slice(1,4);

    result+="Slice(1,4) : "+sliced+"<br><br>";

    // map()

    let square=numbers.map(function(value){

        return value*value;

    });

    result+="Map (Squares) : "+square+"<br>";

    // filter()

    let greater=numbers.filter(function(value){

        return value>30;

    });

    result+="Filter (>30) : "+greater+"<br>";

    // reduce()

    let sum=numbers.reduce(function(total,value){

        return total+value;

    },0);

    result+="Reduce (Sum) : "+sum+"<br>";

    // forEach()

    result+="forEach() : ";

    numbers.forEach(function(value){

        result+=value+" ";

    });

    result+="<br><br>";

    // Maximum

    let max=Math.max(...numbers);

    // Minimum

    let min=Math.min(...numbers);

    result+="<h3>Case Study</h3>";

    result+="Maximum Value : "+max+"<br>";

    result+="Minimum Value : "+min;

    document.getElementById("output").innerHTML=result;

}