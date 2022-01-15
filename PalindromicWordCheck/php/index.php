<?php

function isPalindrome($s){
    return ($s == strrev($s));
}

echo json_encode(isPalindrome(isset($_SERVER['argv'][1])));

?>