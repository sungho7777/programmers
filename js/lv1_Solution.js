function init(){
  //  크레인 인형 뽑기게임
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

  // 신규 아이디 추천
  fn_newIdRecommendation("...!@BaT#*..y.abcdefghijklm");
  fn_newIdRecommendation("z-+.^.");
  fn_newIdRecommendation("=.=");
  fn_newIdRecommendation("");
  fn_newIdRecommendation("123_.def");
  fn_newIdRecommendation("abcdefghijklmn.p");
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

//
// 신규 아이디 추천
//
function fn_newIdRecommendation(new_id) {
    var answer = '';
    // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    new_id = new_id.toLowerCase();

    // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    for(var i = 0; i < new_id.length; i++){
        var regExp1 = /[a-zA-Z]/g;
        var regExp2 = /[0-9]/g;
        var ch = new_id.charAt(i);
        if(regExp1.test(ch) || regExp2.test(ch) || ch == "-" || ch == "_" || ch == "."){
          answer += ch;
        }
    }
    
    // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    while(answer.indexOf("..") != -1){
        answer = answer.replace("..", ".");
    }

    // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    if(answer.length > 0 && answer.charAt(0) == "."){
        answer = answer.substring(1);
    }
    if(answer.length > 0 && answer.charAt(answer.length - 1) == "."){
      answer =  answer.substring(0, answer.length -1);
    }

    // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if(answer.length < 1){
      answer = "a";
    }

    // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    //  만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if(answer.length > 15){
      answer = answer.substring(0, 15);
      if(answer.charAt(answer.length - 1) == "."){
        answer = answer.substring(0, answer.length -1);
      }
    }

    // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    while(answer.length < 3){
      answer += answer.charAt(answer.length - 1);
    }

    return answer;
}
