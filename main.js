canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car_width=100;
car_height=100;
car_x=10;
car_y=10;
background_image="racing.jpg";
car_image="car1.png";
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,800,600);
}
function uploadcar(){
    ctx.drawImage(car_imgtag,car_x,car_y,car_height,car_width);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        console.log("up");
        up();
    }
    if (keypressed=="40"){
        console.log("down");
        down();
    }
    if (keypressed=="37"){
        console.log("left");
        left();
    }
    if (keypressed=="39"){
        console.log("right");
        right();
    }
}
function up(){
    if (car_y>=0){
        car_y=car_y-10;
        uploadbackground();
        uploadcar();
    }
    

}
function down(){
    if (car_y<=500){
        car_y=car_y+10;
    uploadbackground();
    uploadcar();
    }
    

}
function left(){
    if (car_x>=0){
    car_x=car_x-10;
    uploadbackground();
    uploadcar();

}

}
function right(){
    if (car_x<=700){
    car_x=car_x+10;
    uploadbackground();
    uploadcar();

}

}







