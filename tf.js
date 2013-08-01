function formatTweets(userImages) {
    var tweets = document.getElementsByClassName( "twitter-tweet" );
    for ( var i=0; i<tweets.length; i++ ) {
        var atweet = tweets[i];

         // Retrieve tweet's url
        var elem_url = atweet.getElementsByTagName( "a" )[ atweet.getElementsByTagName( "a" ).length -1 ];
        var url = elem_url.href;
        atweet.removeChild( elem_url );

        // retrieve body
        var body = atweet.textContent.substring( 0, atweet.textContent.lastIndexOf ( "—" ) );

        // retrieve user name from body.    
        var userName = atweet.textContent.substring( atweet.textContent.lastIndexOf ( "—" ) +1 );
        userName = userName.replace( /—/, "" );
        userName = userName.replace( /\(\S*@[a-zA-Z0-9_-]*\S\)/, "" );
        userName = userName.trim();


        // Retrieve user id from URL.
        var tweetID = url.substring( url.lastIndexOf( "/" ) +1 ).trim();
        var userID = url.match( /twitter.com\/([^\/]*)\// )[1];
        if ( userID == null ) {
            userID = '';
        }

        
        // remove all elements.    
        while ( atweet.firstChild ) {
            atweet.removeChild( atweet.firstChild );
        }

        // get image url
        var img_url = userImages[ userID ];

        // creating elements    
        var elem;

        elem = document.createElement( "img" );
        elem.src= img_url;
        elem.style.display = 'inline-block';
        elem.style.float = 'left';
        elem.className = "";
        atweet.appendChild( elem );

        elem = document.createElement( "a" );
        elem.href = "https://twitter.com/"+userID;
        elem.setAttribute( "target", "_blank" );
        elem.textContent = userName;
        elem.style.display = 'inline';
        elem.className = "twitter-name";
        atweet.appendChild( elem );


        elem = document.createElement( "div" );
        elem.textContent = body;
        atweet.appendChild( elem );

        elem = document.createElement( "br" );
        elem.style.clear = 'both';
        atweet.appendChild( elem );

        elem = document.createElement( "a" );
        elem.href = "https://twitter.com/intent/tweet?in_reply_to="+tweetID;
        elem.setAttribute( "target", "_blank" );
        elem.textContent = '返信';
        elem.style.display = 'inline';
        elem.className = "";
        atweet.appendChild( elem );

        elem = document.createElement( "a" );
        elem.href = "https://twitter.com/intent/retweet?tweet_id="+tweetID;
        elem.setAttribute( "target", "_blank" );
        elem.className= 'twitter-';
        elem.textContent = 'リツイート';
        elem.style.display = 'inline';
        atweet.appendChild( elem );

        elem = document.createElement( "a" );
        elem.href = "https://twitter.com/intent/favorite?tweet_id="+tweetID;
        elem.setAttribute( "target", "_blank" );
        elem.textContent = 'お気に入りに登録';
        elem.style.display = 'inline';
        atweet.appendChild( elem );

        elem = document.createElement( "a" );
        elem.href = url;
        elem.setAttribute( "target", "_blank" );
        elem.textContent = "詳細表示";
        elem.style.display = 'inline';
        atweet.appendChild( elem );
    }
}
