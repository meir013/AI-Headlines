<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Fake Headlines Quiz!</title>
  <link href='http://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Dancing+Script' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Real <span class="or">or</span> Fake</h1>
	<h2>Can You Tell Which News Headlines Are Machine Generated?</h2>
  </header>
  
  <div id="main" class="main">
    <div class="quiz">
      <p class="name" ></p>
      <p class="results"></p>
      <p class="score"></p>
      <p class="thanks">Thanks for playing!</p>
      <div class="options">
        <div class="choice" id="trek">Real</div>
        <div class="choice" id="polish">Fake</div>
      </div>
      <div class="generate" id="generate">next</div>
    </div>
  </div>
  
  <footer class="clearfix">
    <div class="left">
      <h4>about</h4>
      <p>It all started as a fun challenge to generate fake news headlines using AI. And it worked quite well, enough for us to figure that if we can generate it, we could perhaps also <a href="http://adverifai.com/" target="_blank">detect it</a></p>

    </div>
    <div class="right">
      <h4>share</h4>
      <p>Invite friends to take the quiz:</p>
	  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="The Fake Headlines Quiz! Can you tell which headlines are machine generated?" data-url="http://ai-headlines.herokuapp.com" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </footer>
  <script src="js/smooth-scroll.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script src="js/init.js"></script>
  <script>
    smoothScroll.init();
  </script>
  </div>
</body>
</html>