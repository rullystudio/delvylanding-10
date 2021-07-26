$(document).ready(function(){

	var url = "http://localhost/rullystudio/";    
    $(document).on('click','#home',function(e){
        e.preventDefault();
        location.href= url+'home';
    });

    $(document).on('click','#layanan',function(e){
        e.preventDefault();
        location.href= url+'layanan' ;
    });

    $(document).on('click','#about',function(e){
        e.preventDefault();
        location.href= url+'about' ;
    });

    $(document).on('click','#help',function(e){
        e.preventDefault();
        location.href= url+'help/tiket' ;
    });

    $(document).on('click','#register',function(e){
        e.preventDefault();
        location.href= url+'user/register' ;
    });

    $(document).on('click','#login',function(e){
        e.preventDefault();
        location.href= url+'user/login' ;
    });

    $(document).on('click','#logout',function(e){
        e.preventDefault();
        location.href= url+'user/logout' ;
    });
    
});