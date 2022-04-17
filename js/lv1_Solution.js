
function init(){
  fn_catchUpGame(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  );
}

//
//  크레인 인형 뽑기게임
//
function fn_catchUpGame(board, moves) {
    var answer = 0;
    var bucket = [];

    for (var move = 0; move < moves.length; move++){
        var index = moves[move] - 1;
        for(var row_info = 0; row_info < board.length; row_info++){
            if(board[row_info][index] != 0){
                bucket.push(board[row_info][index]);
                board[row_info][index] = 0;

                var b1 = bucket[bucket.length-1];
                var b2 = bucket[bucket.length-2];
                if(bucket.length >= 2 && b1 == b2){

                    answer += 2;
                    bucket.pop();
                    bucket.pop();
                }
                break;
            }
        }
    }

    return answer;
}
