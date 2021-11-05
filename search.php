<?php
    
    $span1 = '网信办要求取消所有涉明星艺人榜单';
    $span2 = '一个消息2';
    $span3 = '一个消息3';
    $span4 = '一个消息4';
    $span5 = '一个消息5';
    $span6 = '一个消息6';
    $span7 = '一个消息7';
    $span8 = '一个消息8';
    $span9 = '一个消息9';
    $span10 = '一个消息10';

    header('Content-Type:application/json; charset=utf-8');

    $arr = array('span1'=>$span1,'span2'=>$span2,'span3'=>$span3,'span4'=>$span4,'span5'=>$span5,'span6'=>$span6,'span7'=>$span7,'span8'=>$span8,'span9'=>$span9,'span10'=>$span10);

    $arrnum = array('num1'=>1,'num2'=>2,'num3'=>3,'num4'=>4);
    // exit(json_encode($arr));
    // return ($arr,$arrnum)
    exit(json_encode(['object1'=>$arr,'object2'=>$arrnum]));
?>