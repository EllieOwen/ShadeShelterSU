
	var members = {};  
	var bld = {};
function initialize_bld(){
	bld['sides'] = 6;
	bld['r1_slope'] = 6; 
	bld['r2_slope'] = 6; 
	//bld['r3_slope'] = 0; 
	bld['column_height'] = 8;
	bld['buried'] = 6;
	bld['clear1'] = 24;
	//bld['clear2'] = 24;
	bld['r1_diameter'] = 28;
	bld['r2_diameter'] = 14;
	//bld['r3_diameter'] = 0;
	bld['cr_diameter'] = 0;
	bld['r1_oh'] = 24;
	bld['r2_oh'] = 12;
	//bld['r3_oh'] = 0;
	bld['r1_purlins'] = 1;
	bld['r2_purlins'] = 1;
	//bld['r3_purlins'] = 0;
	bld['tiers'] = 1;
}
$(document).ready(function(){
	initialize_bld();
    $(".powdercoat").load("toolbox/powdercoat.txt");
});

$(document).ready(function(){
    $(".frame_type").change(function(){
	
	//change to single tier roof
	//setValue('roof_number', 'single');
	
        $(this).find("option:selected").each(function(){

		switch($(this).attr("value")){
		case 'Poligon':
                $(".poli_sides").show();
				$(".gables").hide();
				$(".hips").hide();
				$(".arbors").hide();
				$(".roof_number").show();
				$(".roof_type").show();
				$(".roof1").show();
				$(".roof2").hide();
				break;		
		case 'Gable':
                $(".poli_sides").hide();
				$(".gables").show();
				$(".hips").hide();
				$(".arbors").hide();
				$(".roof_number").show();
				$(".roof_type").show();
				$(".roof1").show();
				$(".roof2").hide();
				break;
		case 'Hip':
                $(".poli_sides").hide();
				$(".gables").hide();
				$(".hips").show();
				$(".arbors").hide();
				$(".roof_number").show();
				$(".roof_type").show();
				$(".roof1").show();
				$(".roof2").hide();
				break;	
		case 'Arbor':
                $(".poli_sides").hide();
				$(".gables").hide();
				$(".hips").hide();
				$(".arbors").show();
				$(".roof_number").hide();
				$(".roof_type").hide();
				$(".roof1").hide();
				$(".roof2").hide();
				break;		
            }
        });		
	$('#roof_number').trigger("change");
    }).change();
});

$(document).ready(function(){
    $('#roof_number').change(function(){
			$(this).find("option:selected").each(function(){
            if(this.value=="single"){
				
				$(".roof1").show();
				$(".roof2").hide();
				
				$('.eitherTier').show();
				$('.singleTier').show();
				$('.doubleTier').hide();

				bld.tiers = 1;
				bld.clear1 = 0;
				
				setValue("diameter1",bld.r1_diameter)
				setValue("slope1",bld.r1_slope)
				setValue("oh1",bld.r1_oh)
				setValue("purlins1",bld.r1_purlins)
            }
            else if(this.value=="vented"){
				
				$(".roof1").show();
				$(".roof2").show();
				
				$('.eitherTier').show();
				$('.singleTier').hide();
				$('.doubleTier').show();
				
				bld.tiers = 2;
				bld.clear1 = 12; 

				setValue("clear1",12)
				setValue("diameter2",bld.r2_diameter)
				setValue("slope2",bld.r2_slope)
				setValue("oh2",bld.r2_oh)
				setValue("purlins2",bld.r2_purlins)
            }
            else if(this.value=="clearstory"){
				
				$(".roof1").show();
				$(".roof2").show();
				
				$('.eitherTier').show();
				$('.singleTier').hide();
				$('.doubleTier').show();

				bld.tiers = 2;
				bld.clear1 = 24;
				
				setValue("clear1",24)
				setValue("diameter2",bld.r2_diameter)
				setValue("slope2",bld.r2_slope)
				setValue("oh2",bld.r2_oh)
				setValue("purlins2",bld.r2_purlins)
		
			}
        });
    }).change();
});

$(document).ready(function(){
    $(".poli_sides").change(function(){
	
        $(this).find("option:selected").each(function(){

		switch($(this).attr("value")){
			
		case 'TR':
			setValue('otherPolySides','3');
			break;	
		case 'SQ':
			setValue('otherPolySides','4');
			break;	
		case 'PE':
			setValue('otherPolySides','5');
			break;	
		case 'HX':
			setValue('otherPolySides','6');
			break;		
		case 'HP':
			setValue('otherPolySides','7');
			break;	
		case 'OC':
			setValue('otherPolySides','8');
			break;
		case 'NO':
			setValue('otherPolySides','9');
			break;	
		case 'DE':
			setValue('otherPolySides','10');
			break;		
		case 'HE':
			setValue('otherPolySides','11');
			break;	
		case 'DO':
			setValue('otherPolySides','12');
			break;
		default:
			if(document.getElementById("otherPolySides").value > 12){
				setValue('otherPolySides',document.getElementById("otherPolySides").value);
			}
			else {
				setValue('otherPolySides','');
			}
          }
        });
    }).change();
});

$(document).ready(function(){
          $("#otherPolySides").change(function(){
            if(this.value==3){
				setValue('poli_sides','TR');
            } 
            else if(this.value==4){
				setValue('poli_sides','SQ');
            }
            else if(this.value==5){
				setValue('poli_sides','PE');
            }
            else if(this.value==6){
				setValue('poli_sides','HX');
            }
            else if(this.value==7){
				setValue('poli_sides','HP');
            }
            else if(this.value==8){
				setValue('poli_sides','OC');
            }
            else if(this.value==9){
				setValue('poli_sides','NO');
            }
            else if(this.value==10){
				setValue('poli_sides','DE');
            }
            else if(this.value==11){
				setValue('poli_sides','HE');
            }
            else if(this.value==12){
				setValue('poli_sides','DO');
            }
			else{
				setValue('poli_sides','other');
			}
        });
});



