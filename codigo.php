<?php
### SMS:Key v1.0.6 ###
$old_ua = @ini_set('user_agent', 'smscoin_key_1.0.6');
$key_id = 251483;
$response = @file("http://key.smscoin.com/key/?s_key=".$key_id
."&s_pair=".urlencode(substr($_GET["s_pair"],0,10))
."&s_language=".urlencode(substr($_GET["s_language"],0,10))
."&s_ip=".$_SERVER["REMOTE_ADDR"]
."&s_url=".$_SERVER["SERVER_NAME"].htmlentities(urlencode($_SERVER["REQUEST_URI"])));
if ($response !== false) {
 if (count($response)>1 || $response[0] != 'true') {
  die(implode("", $response));
 }
} else die('?? ??????? ????????? ??????? ??????');
@ini_set('user_agent', $old_ua);
### SMS:Key end ###
?>