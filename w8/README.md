<!-- Setting a break piont at renderTbl(cfpData)
we enter our values into the browser
the eventlistener is waiting for us to click submit.
Once submit on the browser has been clicked the values entered are then pushed to fill in the vaules in the Form. (ex. Form.firstName= "kue", Form.lastName= "her", houseHoldMembers= 2....etc)
From there, our start function begins. 
the values that were entered earlier are now passed into our start function to calculate new data. This new data is  calculated in two additional functions that are located in a module. the data that gets calculated in the module is the houseHoldPionts  and houseSizePionts.
these two data are returned back into the orginal start function to calculate cfpTotal.
With all that done we now have these datas= firstName, lastName, houseHoleMemders, houseSize, houseHoldPTS, houseSizePTS, total.
we then push all this data (object) into a global array called cfpData.
With That, our Start Function is completed and now we move on to rendering our table (renderTbl)
To render our table we utillize two additional block scope functions located in another module.
the first function (renderTblHeading) gives us our table. The table includes our Table head, table rows, and your table headings (text).
Once that is done our next function (renderTbl(data)) is called. 
renderTbl(data) enters in our data(objects) from cfpData into our table.
the datas get appended to our rows
the Table get updated and then the table is created on the browser.


Feedback. 
I was too general about what each block scope was doing instead of going from line to line.

Yes, I feel that the video was very helpful and a much needed refresher. There was alot of little details that i forgot about. Forexample, parseInt(FORM.housem.value);
I feel like I will be going back to watch this video alot. -->

<!-- How would we repopulate the row with the values that were deleted?
I dont know how i would actually code this but before deleting the array, save the data in a "let backupData = []". then refer back to it later to repopulate when the edit button is clicked??  -->
