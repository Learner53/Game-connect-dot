
// var cell1=5,cell2=5,cell3=5,cell4=5,cell5=5, cell6=5;

var playerColor='red';
var lastEmptyCellAvailable=[5, 5, 5, 5, 5, 5];
var playerState = [1, 2];
var activePlayer= playerState[0];
var gamePlay =true;
function initializeGame() {
    playerColor='green';
    gamePlay =true;
    lastEmptyCellAvailable=[5, 5, 5, 5, 5, 5];
    playerState = [1, 2];
    activePlayer= playerState[0];
    $('.each-white-circle').css('background-color', 'white');
    $('button').attr('disabled');
    $('button').css('cursor', 'not-allowed');
    $('.active-player').html(activePlayer);
    $('.player-color').css({'background-color': playerColor, 'color': playerColor});

}
function fillLastPossibleRowInClickedColumn(elem,colNum) {
    if(lastEmptyCellAvailable[colNum-1]>0 && gamePlay){
        let currentAvailableRow=lastEmptyCellAvailable[colNum-1];

        $('.player-color').css({'background-color': playerColor, 'color': playerColor});
        $('.grid-row-'+currentAvailableRow).find('.cell-col-'+colNum + ' .each-white-circle').attr('name', activePlayer );
        $('button').removeAttr('disabled');
        $('button').css('cursor', 'pointer');
        console.log($('.grid-row-'+currentAvailableRow).find('.cell-col-'+colNum + ' .each-white-circle').attr('name'),'col', colNum, 'row',currentAvailableRow);    

        if(currentAvailableRow<3) {
            // check winner in column
            let currentNodeValue=$('.grid-row-'+currentAvailableRow).find('.cell-col-'+colNum + ' .each-white-circle').attr('name');
            let secondNodeValue=$('.grid-row-'+(currentAvailableRow+1)).find('.cell-col-'+colNum + ' .each-white-circle').attr('name');
            let thirdNodeValue=$('.grid-row-'+(currentAvailableRow+2)).find('.cell-col-'+colNum + ' .each-white-circle').attr('name');
            let fourthNodeValue=$('.grid-row-'+(currentAvailableRow+3)).find('.cell-col-'+colNum + ' .each-white-circle').attr('name');
            console.log(currentNodeValue, secondNodeValue, thirdNodeValue, fourthNodeValue);
            if(currentNodeValue == secondNodeValue && thirdNodeValue == fourthNodeValue && currentNodeValue == thirdNodeValue) {
                $('.winner-class').html('Winner is player '+ currentNodeValue);
                console.log('winner is player: '+ currentNodeValue);
                gamePlay=false;
            }
        }
        if(activePlayer==1){
            playerColor='green';
            activePlayer=playerState[1];
            
        }else {
            playerColor='red';
            activePlayer=playerState[0];
        }

        lastEmptyCellAvailable[colNum-1]-=1;
        // if(lastEmptyCellAvailable[colNum-1]<2) {
        //     // winning Strategy
        //     let currentNode=lastEmptyCellAvailable[colNum-1]+1;
        //     let currentNodeValue=$('.grid-row-'+currentAvailableRow).find('.cell-col-'+colNum + ' .each-white-circle').attr('name');;
        //     let winStatus=1;
        //     let arrNode =[]
        //     console.log(winStatus);

        //     for(let i=currentNode;i<currentNode+3;i++){
        //         let prevnode =$('.grid-row-'+currentNode).find('.cell-col-'+colNum + ' .each-white-circle').attr("name");
        //         console.log(currentNode);
        //         arrNode.push(prevnode);
        //         if(currentNodeValue !== prevnode){
        //             winStatus=0;
        //         }
        //         if(winStatus==1){
        //             console.log('Winner is '+ currentNodeValue);
        //             setTimeout(function(){
        //                 window.location.reload();
        //             },1000);
        //         }
        //     }    
        //         console.log(currentNode);    
        // }
        

        $('.grid-row-'+currentAvailableRow).find('.cell-col-'+colNum + ' .each-white-circle').css('background-color', playerColor );
        $('.active-player').html(activePlayer);


    }
}
function winningStrategy() {

}
