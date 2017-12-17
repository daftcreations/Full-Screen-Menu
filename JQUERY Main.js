$(document).ready(function(){
    $("#main").click(function(){
        $("#main").animate({height:'800px',width:'800px'});
        $("#icon").fadeOut();
        $("#menu ul").delay(300).animate({opacity:"1"});
        $("#menu ul").css("visibility","visible");
        $("#menu_circle_layer").animate({height:'850px',width:'850px'});
        
        $("#social_media").animate({height:'400px',width:'400px'});
        $("#container").delay(300).animate({opacity:"1"});
        $("#container").css("visibility","visible");
        $("#social_circle_layer").animate({height:'430px',width:'430px'});
        
        $("#bg").delay(200).animate({opacity:"1"});
        $("#bg").css("visibility","visible");
    }); 
    
    $("#bg").click(function(){
        $("#main").animate({height:'50px',width:'50px'});
        $("#icon").fadeIn();
        $("#menu ul").animate({opacity:"0"});
        $("#menu ul").css("visibility","hidden");
        $("#menu_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#social_media").animate({height:'0px',width:'0px'});
        $("#container").animate({opacity:"0"});
        $("#container").css("visibility","hidden");
        $("#social_circle_layer").animate({height:'0px',width:'0px'});
        
        $("#bg").animate({opacity:"0"});
        $("#bg").css("visibility","hidden");       
    });
});








