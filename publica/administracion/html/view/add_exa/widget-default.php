<center>
	<h1 id="datos">Ingrese los datos del examen</h1>
<form class="form-horizontal" action="index.php?view=control_add_examen" method="post" enctype="multipart/form-data">
<input type="text" name="nombre" required placeholder="Nombre...." value="" class="form-control"><br><br>
<input name="ci" pattern="[0-9]{10}" required placeholder="C.I...." value="" class="form-control"><br><br>
<input type="date" name="fecha" required value="Seleccione la fecha.." class="form-control"><br><br>
	<label class="titulo"> Seleccione el tipo de examen: </label> <select name="tipos" class="listas" required>
<!--<option value="bandera">Seleccione un tipo de examen</option>-->
		<option value="radiografia">Radiografía</option>
	<option value="examen">Exagemen General.</option>
</select><br><br>

<input type="file" required name="imagen" class="btn btn-primary" ><br><br>
<input type="submit" value="aceptar" class="btn btn-primary">
</form>
</center>
</body>
</html>
