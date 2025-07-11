function logger (log)
{
    if(typeof log === 'undefined')
    {
        log = ' giá trị mặc định '
    }
    console.log(log);
}
logger(undefined);

// đối với es 6

function logger2 (log = 'giá trị mặc định ')
{
   
    console.log(log);
}
logger2(undefined);

function logger3 (log, type = 'log')
{
    console[type](log)
}
logger3('123455','warn')