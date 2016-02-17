<h2>Rafters</h2>

<select id="rf1_section">
      <?php foreach($source as $key => $value) {
	if ($value['Bw']>=5 AND $value['tnom']>=0.125){?>
	  <option value="<?php echo
	  "AISC_Manual_Label=".$value['AISC_Manual_Label'].
	  ",b=".$value['Bw'].
	  ",Ht=".$value['Ht'].
	  ",tnom=".$value['tnom'].
	  ",W=".$value['W']?>">
	  <?php echo $value['AISC_Manual_Label'] ?>
	  </option><?php } }?>
</select>

<select id="rf1_color">
	<option value=",color=Silver">Ash Grey</option> 
	<option value=",color=DarkGreen">Wittek Green</option> 
	<option value=",color=Red" selected>Red Baron</option> 
	<option value=",color=MediumBlue">Blue Streak</option> 
	<option value=",color=PapayaWhip">Surrie Beige</option>
	<option value=",color=DarkGray">Pedestal Gray</option> 
	<option value=",color=ForestGreen">Fern Green</option> 
	<option value=",color=Brown">Fence Brown</option> 
	<option value=",color=DarkGreen">Evergreen</option> 
	<option value=",color=GhostWhite">Evenflo White</option> 
	<option value=",color=DarkGreen">Eastern Green</option>
	<option value=",color=Black">Dow Black</option>
	<option value=",color=RoyalBlue">Dutch Blue</option>
	<option value=",color=BlanchedAlmond">Almond</option>
</select>