<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<?php
if(!empty($_POST['name1'] ))
{
$to = "9116529@gmail.com";
$from = 'Personal';
$subject = "Заявка";
$message = 'ДОЛЖНОСТЬ: '.$_POST['name1'].'; ПОЛ: '.$_POST['name2'].'; ВОЗРАСТ: '.$_POST['name3'].'; ОБРАЗОВАНИЕ: '.$_POST['name4'].'; ОПЫТ РАБОТЫ: '.$_POST['name5'].'; ОБЯЗАТЕЛЬНЫЕ ТРЕБОВАНИЯ: '.$_POST['name6'].'; ЖЕЛАТЕЛЬНЫЕ ТРЕБОВАНИЯ: '.$_POST['name7'].'; ДОЛЖНОСТНЫЕ ОБЯЗАННОСТИ: '.$_POST['name8'].'; ЗАДАЧИ ДОЛЖНОСТИ: '.$_POST['name9'].'; РЕЖИМ РАБОТЫ: '.$_POST['name10'].'; ФИКС. ОКЛАД: '.$_POST['name11'].'; СОВОКУПНЫЙ ДОХОД: От '.$_POST['name12'].'; СОВОКУПНЫЙ ДОХОД: До '.$_POST['name13'].'; НАЗВАНИЕ КОМПАНИИ: '.$_POST['name14'].'; НАПРАВЛЕНИЕ ДЕЯТЕЛЬНОСТИ: '.$_POST['name15'].'; ФИО КОНТАКТНОГО ЛИЦА: '.$_POST['name16'].'; НОМЕР ТЕЛЕФОНА: '.$_POST['name17'].'; ЭЛЕКТРОННАЯ  ПОЧТА: '.$_POST['name18'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <9116529@gmail.com>\r\n";
$result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены. Введите номер телефона</p>";
}

?>
</body>
</html>