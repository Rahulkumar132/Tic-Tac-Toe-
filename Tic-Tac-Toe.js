alert("Game starts when you tap on any box. First player starts as Player X and second player as Player 0");
//function for whenever user tap on box
    // and for checking which user is winner
    function mainFunc() {
        //setting the all box input fields 
        var b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        b4 = document.getElementById("b4").value;
        b5 = document.getElementById("b5").value;
        b6 = document.getElementById("b6").value;
        b7 = document.getElementById("b7").value;
        b8 = document.getElementById("b8").value;
        b9 = document.getElementById("b9").value;

        //conditions for player X|x won the match
        //after that disabled all the fields
        if(b1 == "X" && b2 == "X" && b3 == "X") {
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b1 == "X" && b4 == "X" && b7 == "X") {
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b1 == "X" && b5 == "X" && b9 == "X") {
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b2 == "X" && b5 == "X" && b8 == "X") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b3 == "X" && b6 == "X" && b9 == "X") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b3 == "X" && b5 == "X" && b7 == "X") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b4 == "X" && b5 == "X" && b6 == "X") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } else if(b7 == "X" && b8 == "X" && b9 == "X") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("msg").innerHTML = "Player X Won"
        } 
        //checking for player 0 win the game
        //after that disabled all the input fields
        else if(b1 == "0" && b2 == "0" && b3 == "0") {
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b1 == "0" && b4 == "0" && b7 == "0") {
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b1 == "0" && b5 == "0" && b9 == "0") {
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b2 == "0" && b5 == "0" && b8 == "0") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b3 == "0" && b6 == "0" && b9 == "0") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b3 == "0" && b5 == "0" && b7 == "0") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b4 == "0" && b5 == "0" && b6 == "0") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } else if(b7 == "0" && b8 == "0" && b9 == "0") {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("msg").innerHTML = "Player 0 Won"
        } 
        //conditions for Tie the game
        else if((b1 == "X" || b1 == "0") && (b2 == "X" || b2 == "0") &&
                (b3 == "X" || b3 == "0") && (b4 == "X" || b4 == "0") && 
                (b5 == "X" || b5 == "0") && (b6 == "X" || b6 == "0") && 
                (b7 == "X" || b7 == "0") && (b8 == "X" || b8 == "0") && (b9 == "X" || b9 == "0")) {
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("msg").innerHTML = "Game Tie Play Again"

        }
        
//showing players turn
        else {
            if(flag == 1) {
                document.getElementById("msg").innerHTML = "Player X Turn";
            } else {
                document.getElementById("msg").innerHTML = "Player 0 Turn";
            }
        }
    }

    //function for reset the game
    function resetGame() {
        document.getElementById("b1").value = "";
        document.getElementById("b2").value = "";
        document.getElementById("b3").value = "";
        document.getElementById("b4").value = "";
        document.getElementById("b5").value = "";
        document.getElementById("b6").value = "";
        document.getElementById("b7").value = "";
        document.getElementById("b8").value = "";
        document.getElementById("b9").value = "";
        document.getElementById("msg").value = "";
        window.location.reload();
        }

    //funtions check turn of the player
    //accourding to flag and set the value to box
    flag = 1;
    function func1() {
        if(flag === 1) {
            document.getElementById("b1").value = "X";
            document.getElementById("b1").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b1").value = "0";
            document.getElementById("b1").disabled = true;
            flag = 1;
        }
    }
    function func2() {
        debugger;
        if(flag == 1) {
            document.getElementById("b2").value = "X";
            document.getElementById("b2").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b2").value = "0";
            document.getElementById("b2").disabled = true;
            flag = 1;
        }
    }
    function func3() {
        if(flag == 1) {
            document.getElementById("b3").value = "X";
            document.getElementById("b3").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b3").value = "0";
            document.getElementById("b3").disabled = true;
            flag = 1;
        }
    }
    function func4() {
        if(flag == 1) {
            document.getElementById("b4").value = "X";
            document.getElementById("b4").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b4").value = "0";
            document.getElementById("b4").disabled = true;
            flag = 1;
        }
    }
    function func5() {
        if(flag == 1) {
            document.getElementById("b5").value = "X";
            document.getElementById("b5").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b5").value = "0";
            document.getElementById("b5").disabled = true;
            flag = 1;
        }
    }
    function func6() {
        if(flag == 1) {
            document.getElementById("b6").value = "X";
            document.getElementById("b6").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b6").value = "0";
            document.getElementById("b6").disabled = true;
            flag = 1;
        }
    }
    function func7() {
        if(flag == 1) {
            document.getElementById("b7").value = "X";
            document.getElementById("b7").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b7").value = "0";
            document.getElementById("b7").disabled = true;
            flag = 1;
        }
    }
    function func8() {
        if(flag == 1) {
            document.getElementById("b8").value = "X";
            document.getElementById("b8").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b8").value = "0";
            document.getElementById("b8").disabled = true;
            flag = 1;
        }
    }
    function func9() {
        if(flag == 1) {
            document.getElementById("b9").value = "X";
            document.getElementById("b9").disabled = true;
            flag = 0;
        } else {
            document.getElementById("b9").value = "0";
            document.getElementById("b9").disabled = true;
            flag = 1;
        }
    }
