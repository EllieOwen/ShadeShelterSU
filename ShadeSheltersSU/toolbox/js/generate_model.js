function getSelectValue(id){
	alert('id = ' + id);
    var index = document.getElementById(id).selectedIndex;
	alert('index = '+ index)
    var val=document.getElementById(id).options[index].value;
	alert('val = '+ val)
return val;
}

function setValue(id,value){
document.getElementById(id).value = value;
}


function SelectRadioButton(name, value) {
 
  $("input[name='"+name+"'][value='"+value+"']").prop('checked', true);
 
  return false; // Returning false would not submit the form
 
}

function getElementsByClass( searchClass, domNode, tagName) { 
	if (domNode == null) domNode = document;
	if (tagName == null) tagName = '*';
	var el = new Array();
	var tags = domNode.getElementsByTagName(tagName);
	var tcl = " "+searchClass+" ";
	for(i=0,j=0; i<tags.length; i++) { 
		var test = " " + tags[i].className + " ";
		if (test.indexOf(tcl) != -1) 
			el[j++] = tags[i];
	} 
	return el;
} 


function json_stringify(key,data){

var string = ""
for ( var i=0;i<key.length-1;i++){
string += '"' + key[i] + '":"' + data[i] + '",'
}
string += '"' + key[key.length-1] + '":"' + data[key.length-1] + '"'



return string
}

function get_member_selections(roofs) {
    var obj = {}
	
	switch(roofs) {
	    case 1:
		    obj['cl1'] = getSelectValue('cl1_section') + getSelectValue('cl1_color');
		    obj['rf1'] = getSelectValue('rf1_section') + getSelectValue('rf1_color');
		    obj['tb1'] = getSelectValue('tb1_section') + getSelectValue('tb1_color');
		    obj['pu1'] = getSelectValue('pu1_section') + getSelectValue('pu1_color');
		    obj['rt1'] = getSelectValue('rt1_section') + getSelectValue('rt1_color');
		break;
		case 2:
		    obj['cl1'] = getSelectValue('cl1_section') + getSelectValue('cl1_color');
		    obj['rfrs1'] = getSelectValue('rfrs1_section') + getSelectValue('rfrs1_color');
		    obj['rs1'] = getSelectValue('rs1_section') + getSelectValue('rs1_color');
		    obj['rf2'] = getSelectValue('rf2_section') + getSelectValue('rf2_color');
		    obj['tb1'] = getSelectValue('tb1_section') + getSelectValue('tb1_color');
		    obj['tb2'] = getSelectValue('tb2_section') + getSelectValue('tb2_color');
		    obj['pu1'] = getSelectValue('pu1_section') + getSelectValue('pu1_color');
		    obj['pu2'] = getSelectValue('pu2_section') + getSelectValue('pu2_color');
		    obj['rt1'] = getSelectValue('rt1_section') + getSelectValue('rt1_color');
		    obj['rt2'] = getSelectValue('rt2_section') + getSelectValue('rt2_color');
		break;
		};
		return obj;
	}

		
function create_get_string_from_object( obj) {
    var string = "";
	for (key in obj) {
	    string += key + "=" + obj[key] + "&";
	}
    return string;
}		
		
function generate_model( bld_obj, member_obj) {
   
    var bld_get_string = create_get_string_from_object(bld_obj);
	//alert (bld_get_string);
	var mem_get_string = create_get_string_from_object(member_obj);
	//alert (mem_get_string);
	//var file_path = "localhost/joomla/templates/basic/toolbox/php/main.php";
	
	var file_path = "/ShadeSheltersToolbox/php/main.php";
	//alert ('found new path');
	var url = file_path + "?" + bld_get_string + mem_get_string;
	
    generate_building(url);
};


function getHTTPObject()
{
    var xhr = false;
    if (window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try
        {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e)
        {
            try
            {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e)
            {
                xhr = false;
            }
        }
    }
    return xhr;
}
var request;
 
function generate_building( file_path)
{
    request = getHTTPObject();
    request.onreadystatechange = function(){
	    if(request.readyState == 4){
		//alert('ResponseText    ');// + reqest.responseText);
		//    send_to_sketchup(  request.responseText, true); //localhost
		    send_to_sketchup(  request.responseText, false);  //website
		//	alert_sketchup( request.responseText);
		}
	}
    request.open("GET", file_path, true);
    request.send(null);
}

function send_to_sketchup( str, bool) {
	if (bool) {
		//split string into array
		arr = str.split("<break>");
alert(arr[0]);
		//send each row of array to sketchup
		for( var i = 0; i < arr.length; i++) {
			//window.location might has limit of 2038 characters on some setups
			if (arr[i].length < 2020) {
				window.location='skp:insert_sketchup@' + arr[i];
			}
			else {
				alert("Sorry, error: window.location is over the 2038 character limit.  Contact me for a fix.");
				//log error here
			}
		}
	}
	else {
		//take out "<break>" and replace with ";"
		window.location='skp:insert_sketchup@' + 'hiddenInput';		
	}
}
