Tweet Formatter
===============

This script is an alternative for Twitter's default HTML embeded tweet formater JavaScript script.


Motivation
----------
Twitter's default tweet formatter is full functioning though heavily weighted. It throws XMLHttpRequest requests for each tweet that is on the HTML file in order to retrieve miscellaneous information about the tweet. It takes certain time and practically it is likely that seven or eight tweets are enough to freeze browsers up ( in my poor PC Acer's 4core CPU with 2GB memory). The designing purpose of this alternative script is to format tweets without XMLHttpRequest request.


Twitter's default formatter queries the Twitter's server several informations :
  
  1. tweet time
  2. profile picture
  3. retweet/favorite count
  4. etc.

This alternative script omits to show tweet 1.tweet time and 2.retweet/favorite count but dare to show 3.profile pictures. To avoid additional HTTP request, this script requires to prepare user name <=> image file URL mapping information in advance.


How to Use
-----------
Link this script file BEFORE the embedded tweets.

    <script src="https://raw.githbu.com/ats4u/tweet-formatter/master/tf.js"></script>


In any place of the page after the script tag, call function as below :

    <script>
        formatTweets({
            'ats4u':'https://si0.twimg.com/profile_images/3467901909/27730896c5792b4e0463f973621c9964_normal.jpeg',
            'Meretseger2':'https://si0.twimg.com/profile_images/2489345572/wv0b9671xgvumh54sty8_normal.jpeg',
            'junorei3':'https://si0.twimg.com/profile_images/3356638714/cc67fea032397ce05e1a8c9644344456_normal.jpeg',
        });
    </script>

The only parameter is an object that contains mapping information bewteen twitter's userIDs and profile pictures.
Calling formatTweets() function will result to output additional &lt;style&gt; tag.




Author
-------
    
- Ats Oka 
- website : http://ats.oka.nu/
- mail : ats.creativity ert gmail d0t com
- facebook : http://gangdun.facebook.com/

