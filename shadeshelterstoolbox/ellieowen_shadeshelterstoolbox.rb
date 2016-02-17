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
# Name        :   ShadeSheltersToolbox Extension Manager
# Description :   A script that loads the ShadeSheltersToolbox as an extension to 
#                 SketchUp
# Menu Item   :   N/A
# Context Menu:   N/A
# Usage       :   N/A
# Date        :   02/08/2015
# Type        :   N/A
#-----------------------------------------------------------------------------

require 'sketchup.rb'
require 'extensions.rb'
require 'langhandler.rb'

module EllieOwen
module ShadeSheltersToolbox

$tStrings = LanguageHandler.new("shadeSheltersToolbox.strings")

#Register the Shade Shelters Toolbox with SU's extension manager
shadeSheltersToolboxExtension = SketchupExtension.new($tStrings.GetString(
  "Shade Shelters Toolbox"), "ellieowen_shadeshelterstoolbox/shadeshelterstoolboxmenus.rb")

shadeSheltersToolboxExtension.description=$tStrings.GetString(
  "Adds item to Extensions menus for creating shade shelters.")
shadeSheltersToolboxExtension.version = "1.0.0"
shadeSheltersToolboxExtension.creator = "EllieOwen"
shadeSheltersToolboxExtension.copyright = "2015, Leon J Schmidt"

#Default on in pro and off in free
Sketchup.register_extension shadeSheltersToolboxExtension, Sketchup.is_pro?

end # ShadeSheltersToolbox
end # module EllieOwen