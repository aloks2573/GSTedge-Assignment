for (var i = 0; i < 10; i++) 
{
(function(i)
{
setTimeout(function(){console.log(i);},1000);
})
(i)};

// Since I have called a function under a closure which scopes the variable in the closure only. Hence, in this case the value of I will be different 
// for each closure and when the function defined in the setTimeOut would be called, it will be called with different values of i,which will print the values from 0 to 9.
