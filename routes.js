const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) =>{
            return `Homepage`;
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request,h) =>{
            return 'Tidak bisa mengakses menggunakan method tersebut';
        } 
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) =>{
            return 'About'
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request, h) =>{
            return 'Tidak bisa mengakses menggunakan method tersebut';
        }
    }
]

//module.exports =  {routes};