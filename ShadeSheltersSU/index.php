<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">

    <title>Shade Shelters Toolbox - for SketchUp v3.00</title>

    <meta name="keywords" content="sketchup, shade shelters, drawings">
    <meta name="description" content="SketchUp - Shade Shelter Plugins">
    <meta name="author" content="Leon Schmidt">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" type="text/css" href="toolbox/css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<!--script type="text/javascript" src="http://code.jquery.com/jquery.js"></script-->

<!-- toolbox js -->
	<script type="text/javascript" src="toolbox/js/toolbox.js"></script>
	<script type="text/javascript" src="toolbox/js/generate_model.js"></script>

</head>

<body>

<ul class="building_parameters">
	<li class="frame_type">
		<h2>Frame Type</h2><br />
		<select id="frame_type">
			<option value="Poligon" selected>Poligon</option> 
			<option value="Gable">Gable</option> 
			<option value="Hip">Hip</option> 
			<option value="Arbor">Arbor</option> 
		</select>
	</li>
	
	<li class="poli_sides">
		<h2>Polygons<h2><br />
		<select id="poli_sides">
		<option value="TR">Three Sided</br>
		<option value="SQ">Square Hip</br>
		<option value="PE">Pentagon</br>
		<option value="HX" selected>Hexagon</br>
		<option value="HP">Heptagon</br>
		<option value="OC">Octagon</br>
		<option value="NO">Nonagon</br>
		<option value="DE">Decagon</br>
		<option value="HE">Hedecagon</br>
		<option value="DO">Dodecagon</br>
		<option value="other">Other</br>
		</select>
		<input type="text" id="otherPolySides"  name="polySides" value="6" size="3"></br>
		
	</li>
	
	<li class="gables">
		<h2>Gables</h2><br />
		Width:  <input type="number" name="width" min="1" max="60">ft<br />
		Length:  <input type="number" name="length" min="1" max="200">ft
	</li>
	
	<li class="hips">
		<h2>Hips</h2><br />
		Width:  <input type="number" name="width" min="1" max="60"><br />
		Length:  <input type="number" name="length" min="1" max="200">
	</li>
	
	<li class="arbors">
		<h2>Arbors</h2><br />
		Width:  <input type="number" name="width" min="1" max="60"><br />
		Length:  <input type="number" name="length" min="1" max="200">
	</li>
	
	<li class="roof_type">
		<h2>Roofing Type</h2><br />
		<select id="roof_type">
			<option value="Multirib" selected>Multi-Rib</option> 
			<option value="StandingSeam">Standing Seam</option> 
			<option value="Shingles">Shingled</option> 
			<option value="none">None</option> 
		</select>
		<form id="TnG_subroof">
		T & G Subroof<br />
		<input type="radio" name="tg" value="true" > yes<br>
		<input type="radio" name="tg" value="false" checked> no<br>
		</form>
	</li>
	
	<li class="roof_number">
		<h2>Number of Roofs</h2><br />
		<select id="roof_number">
			<option value="single">Single Tier</option> 
			<option value="vented">Vented</option> 
			<option value="clearstory">Clearstory</option> 
		</select>
	</li>

<!--<INPUT TYPE="radio" NAME="tiers" VALUE="single" checked onClick="roof_number_changed(value)">Single Tier</br>
<INPUT TYPE="radio" NAME="tiers" VALUE="clear" onClick="roof_number_changed(value)">Clearstory</br>
<INPUT TYPE="radio" NAME="tiers" VALUE="vented" onClick="roof_number_changed(value)">Vented</br-->
	
	<li class="roof1" id="roof1">
		<h2>Lower Roof</h2><br />

		Diameter (roof pt-to_pt): <input type="text" id="diameter1" name="diameter1" value="28" size="4" onchange="bld.r1_diameter = value"> ft</br>
		Slope: <input type="text" id="slope1" name="slope1" value="6" size="4" onchange="bld.r1_slope = value">:12</br>
		OverHang: <input type="text" id="oh1" name="oh1" value="24" size="4" onchange="bld.r1_oh = value"> inches</br>
		Number of Purlins: <input type="text" id="purlins1" name="purlins1" value="1" size="4" onchange="bld.r1_purlins = value"></br>
	</li>

	<li class="roof2">

		<h2>Upper Roof</h2><br />

		Diameter (roof pt-to_pt): <input type="text" id="diameter2" name="diameter2" value="14" size="4" onchange="bld.r2_diameter = value"> ft</br>
		Slope: <input type="text" id="slope2" name="slope2" value="6" size="4" onchange="bld.r2_slope = value">:12</br>
		OverHang: <input type="text" id="oh2" name="oh2" value="24" size="4" onchange="bld.r2_oh = value"> inches</br>
		Clear between roofs:  <input type="text" id="clear1" name="clear1" value="" size="4" onchange="bld.clear1 =value"> inches</br>
		Number of Purlins: <input type="text" id="purlins2" name="purlins2" value="1" size="4" onchange="bld.r2_purlins = value"></br>
	</li>
	
	<li>
		<h2>Base Type</h2><br />
	<form id="baseType">
		<INPUT TYPE="radio" NAME="baseType" VALUE="SurfaceMount" onClick=0>Surface Mount</br>
		<INPUT TYPE="radio" NAME="baseType" VALUE="Buried" CHECKED onClick=0>6 Inch Buried</br>
		</form>
		<div class="building_info">
			Column Heigth: <input type="text" name="height" value="8" size="4" onchange="bld.column_height = value"> ft</br>
		</div>
	</li>		
	
</ul><!--building_parameters-->

<?php
/*
   Connecting to the database
*/
require_once 'toolbox/login.php';

try {
     $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $stmt = $conn->prepare("SELECT * FROM aisc_steel_sections WHERE Type='HSS' ORDER BY w"); 
     $stmt->execute();

     // set the resulting array to associative
     $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
}
catch(PDOException $e) {
	echo "Error: " . $e->getMessage();
}
	$source = array();
	foreach ($stmt as $key => $value) {
		array_push($source, $value);
	}
		
$conn = null;
//print_r(array_values($source));
//die();
?><!--Connecting to the database-->

<!--choose the member sizes and colors
		<div class="powdercoat" id="cl1_color" /div>-->

<ul class= "member_select">
	<input type="checkbox" name="frame_color" value=""> All member the same color. (not done yet)<br>

		<?php
		//$name = 'Columns';
		//$class = 'eitherTier';
		//$id = 'cl1'; 
		//include 'toolbox/member.php';
		?>
	
	<li class="eitherTier" id="cl1">
		<?php include 'toolbox/members/cl1.php'; ?>
	</li>

	<li class="singleTier" id="rf1">
		<?php include 'toolbox/members/rf1.php'; ?>
	</li>

	<li class="doubleTier" id="rfrs1">
		<?php include 'toolbox/members/rfrs1.php'; ?>
	</li>

	<li class="doubleTier" id="rs1">
		<?php include 'toolbox/members/rs1.php'; ?>
	</li>

	<li class="doubleTier" id="rf2">
		<?php include 'toolbox/members/rf2.php'; ?>
	</li>

	<li class="eitherTier" id="tb1">
		<?php include 'toolbox/members/tb1.php'; ?>
	</li>

	<li class="doubleTier" id="tb2">
		<?php include 'toolbox/members/tb2.php'; ?>
	</li>

	<li class="eitherTier" id="pu1">
		<?php include 'toolbox/members/pu1.php'; ?>
	</li>

	<li class="doubleTier" id="pu2">
		<?php include 'toolbox/members/pu2.php'; ?>
	</li>

	<li class="eitherTier" id="rt1">
		<?php include 'toolbox/members/rt1.php'; ?>
	</li>

	<li class="doubleTier" id="rt2">
		<?php include 'toolbox/members/rt2.php'; ?>
	</li>
	
</br>

</br>


<form id="form1" name="form1">
<input type="button" id="my_button" name="my_button" onclick="members=get_member_selections(bld.tiers);generate_model(bld,members);" value="Create in SketchUp"> This will only work if this browser was created in SketchUp by choosing the Plugins>Shade Shelters Toolbox menu item.  See sidebar to download required <a href="/docs/shadeshelterstoolbox.rb" target="_blank">plugin</a>.
</form>

</br>
</ul><!--member_select-->

<input type='button' id='member_test' onclick="members=get_member_selections(bld.tiers);console.log(members)" value="Send members to console">
		
	</body>
</html>
