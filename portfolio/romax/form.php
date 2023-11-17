<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<?php
if(!empty($_POST['telephone'] ))
{
$to = "sasha4474@ukr.net";
$from = 'Yazaki';
$subject = "Заявка";
$message = 'Телефон: '.$_POST['telephone'].'; Почта: '.$_POST['email'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <9116529@gmail.com>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Ваше замовлення надіслано, очікуйте на дзвінок нашого співробітника</p>";
    }
    else{
        echo "<p>Повідомлення не відправлено. Будь ласка, спробуйте ще раз</p>";
    }
}
else {
echo "<p>Обов'язкові поля незаповнені. Введіть номер телефону</p>";
}

?>
</body>
</html>