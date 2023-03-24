<?php
$nombre_form = $_POST ['nombre'];
$apellido_form = $_POST ['apellido'];
$celular_form = $_POST ['celular'];
$email_form = isset($_POST['email']);
$mensaje_form = $_POST ['mensaje'];

echo $nombre_form;

$mails="joaconavarro.untref@gmail.com" . $email_form;

$cuerpo_mail = "Nombre " . $nombre_form ."\r\n". 
"Apellido " . $apellido_form."\r\n". 
"Celular " . $celular_form."\r\n". 
"Mensaje " . $mensaje_form;

mail($mails,"Presupuesto/Consulta", $cuerpo_mail, "From: presupuesto@demilcolores.com");

{header("Location:https://demilcolorespinturerias.com.ar/");
}
?>
