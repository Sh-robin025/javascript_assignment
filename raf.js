
     
    function megaFriend(friends){
    var length = 0;
    var longestFriend;
    for (var i = 0; i < friends.length; i++) {
    // run the loop as far as there is an item on the firends array
    
     if (friends[i].length > length) {
      // check the length of the friends name if it's bigger
    
       var length = friends[i].length;
       // if not, then set the bigger one as value
    
       longestFriend = friends[i];
       //finally find out the longest one and set it
     }
    }
    return longestFriend;
    }
    
    var result = megaFriend( ['Shahadat Robin','Rabbi Khan','Shahada Hossain Robin'] );
    console.log(result)