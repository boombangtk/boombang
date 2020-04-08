<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es" xmlns:fb="http://www.facebook.com/2008/fbml">
<head><center>
   <title>BoomBang: Chat &amp; Play!</title>
   <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   <script type="text/javascript" src="js/common.js"></script>
   <script type="text/javascript" src="js/swfobject.js"></script>
<BODY BGCOLOR="#00BFFF">
   <script type="text/javascript">
   
   (function() {
      var flashvars = {
                  sw1: '',
                  sw2: '',
                  sw3: '',
                  sw4: '',
                  sw5: '0',
                  lang: 'esp',
                  locale: 'es_ES',
                  ver: '1325245546',
               };
      var params = {
                  play: 'true',
                  loop: 'false',
                  quality: 'high',
                  allowscriptaccess: 'always',
                  allowFullScreen: 'true',
                  bgcolor: '#0099cc',
               };
      var attributes = {
        id: 'flash_boombang'
      };
      swfobject.embedSWF(
         '/static/flash_esp/BoomBangLoader.swf', 
         'flash_boombang', 
         '100%', 
         '100%', 
         '9.0.115', 
         './http://boombang.tv/swfobject/expressInstall.swf/', 
         flashvars, params, attributes
      );
   })();
</script>
   <style type="text/css">
      BODY
      {
         color: white;
         margin: 0px;
         overflow: hidden;
      }
      
      DIV#flash_boombang
      {
         position: absolute; 
         top: 0px;
         left: 0px; 
         right: 0px;
         bottom: 0px;
         z-index:9; 
         text-align: center;
      }
      
      DIV#flash_boombang
      {
         background: silver url('http://www.boombang.tv/images/client_bg.png') left top repeat-x;
      }      
   </style>
</head>
<body>
   <div id="fb-root"></div>
   <div id="bb_swf_container" style="width: 1012px; height: 657px">
      <div id="flash_boombang"></div>
   </div>
      
   <script type="text/javascript" charset="utf-8">
      new DivAutoResize(document.getElement ById("bb_swf_container"), 1012, 400, 1012, 657);
   </script>
   
</body>
</html>