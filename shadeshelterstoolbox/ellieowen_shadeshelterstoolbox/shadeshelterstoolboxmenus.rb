# Copyright 2015, Leon J Schmidt

# 
# 

# Permission to use, copy, modify, and distribute this software for 
# any purpose and without fee is hereby granted, provided that the above
# copyright notice appear in all copies.

# THIS SOFTWARE IS PROVIDED "AS IS" AND WITHOUT ANY EXPRESS OR
# IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

#-----------------------------------------------------------------------------
# Name        :   ShadeSheltersToolbox Menu Item
# Description :   A script creates a menu item and handles the web dialog interface 
# Menu Item   :   Extensions>Shade Shelters Toolbox
# Context Menu:   N/A
# Usage       :   N/A
# Date        :   02/25/2015
# Type        :   N/A
#-----------------------------------------------------------------------------

require 'sketchup.rb'

module EllieOwen::ShadeSheltersToolbox

def self.create_dialog(online=true)

	options = {
	:dialog_title => 'Shade Shelters Toolbox',
	:scrollable => true,
    :preferences_key => 'MyDialog',
    :height => 700,
    :width => 800,
    :left => 1,
    :top => 1,
    :resizable => true,
    :mac_only_use_nswindow => true
}

	dlg = UI::WebDialog.new(options)
	dlg.set_size(options[:width],options[:height])
	dlg.set_position(options[:left],options[:top])
	
	if (online)
	  dlg.allow_actions_from_host "http://www.shadeshelterstoolbox.com/sstb.php"
	  dlg.set_url "http://www.shadeshelterstoolbox.com/sstb.php"
	else
	  dlg.allow_actions_from_host "localhost/sstb.php"
	  dlg.set_url "localhost/sstb.php"
	end
	
	dlg.show
#	dlg.set_on_close{ dlg.close }
	
	dlg.add_action_callback("insert_sketchup") {|d,arg|
puts d
puts "#{arg.length} length"
puts arg
		eval(arg)
#	dlg.close
	}	

end

if( not $sstb_menu_loaded ) 
	$sstb_menu = UI.menu("Extensions").add_item($tStrings.GetString("Shade Shelters Toolbox")) { EllieOwen::ShadeSheltersToolbox::create_dialog }
	$sstb_menu = UI.menu("Extensions").add_item($tStrings.GetString("Shade Shelters Toolbox local")) { EllieOwen::ShadeSheltersToolbox::create_dialog(false) }
    $sstb_menu_loaded = true
end

end # module EllieOwen::ShadeSheltersToolbox