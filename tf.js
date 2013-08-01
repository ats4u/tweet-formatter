var __userImages = {};
function formatTweets( userImages ) {
    for ( var i in userImages ) {
        __userImages[i] = userImages[i];
    }
    var cssString = '<'+'style>' +
        '.twitter-tweet {' +
        '    box-shadow : 3px 3px 3px silver;' +
        '    border-radius: 15px;' +
        '    border : 1px solid silver;' +
        '    margin : 5px 0px 5px 0px;' +
        '    padding : 10px;' +
        '}' +
        '' +
        '.twitter-tweet img {' +
        '    display: inline-block;' +
        '    padding : 4px;' +
        '    float : left;' +
        '    box-shadow : none;' +
        '    border : 0px none;' +
        '}' +
        '' +
        '.twitter-tweet .twitter-name {' +
        '    display: inline;' +
        '    margin : 0px 0px 0px 0px;' +
        '    padding : 0px;' +
        '    font-size : smaller;' +
        '    color : black;' +
        '}' +
        '' +
        '.twitter-tweet .twitter-user {' +
        '    display: inline;' +
        '    margin : 0px 0px 0px 0px;' +
        '    padding : 0px;' +
        '    font-size : smaller;' +
        '}' +
        '' +
        '.twitter-tweet .twitter-body {' +
        '    margin : 0px 0px 0px 0px;' +
        '    font-size : larger;' +
        '}' +
        '' +
        '.twitter-tweet a {' +
        '    display : inline;' +
        '    padding : 3px 5px 3px 5px;' +
        '    font-size : 9pt;' +
        '    text-decoration : none;' +
        '    color : silver;' +
        '}' +
        '' +
        '.twitter-tweet a:hover {' +
        '    text-decoration : underline;' +
        '}' +
        '' +
        '.twitter-tweet img {' +
        '    text-align : left;' +
        '}' +
        '<'+'/style>';
    document.write( cssString );
}

function __formatTweets() {
    var userImages = __userImages;
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

window.addEventListener("load", function load(event) {
    __formatTweets();
}, false );

