<?php

function creteTree($n) {
    for($i = 0;$i<$n;$i++){
        $white_space = (2*$i+1);
        echo str_repeat(" ", ($n - ($i + 1))).str_repeat("*",$white_space). "\n";       
    }
    
    echo str_repeat(" ", floor($white_space/2)) . '|';
}

creteTree($_SERVER['argv'][1]);

?>