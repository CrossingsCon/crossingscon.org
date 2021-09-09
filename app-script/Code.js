// Adapted from code written by Tedinoz https://webapps.stackexchange.com/a/121447
// Tedinoz's code is itself adapted from code written by @hubgit https://gist.github.com/hubgit/3755293

function ListNamedFilesandFolders() {
  // List all files and sub-folders in a single folder on Google Drive
  // declare the folder name
  var foldername = 'api-test';

  // declare this sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  // clear any existing contents
  sheet.clear();
  // append a header row
  sheet.appendRow(["parent","name", "key", "last_modified", "size", "url", "id", "description", "type"]);

  // getFoldersByName = Gets a collection of all folders in the user's Drive that have the given name.
  // folders is a "Folder Iterator" but there is only one unique folder name called, so it has only one value (next)
  var folders = DriveApp.getFoldersByName(foldername);
  var foldersnext = folders.next();

  // declare an array to push data into the spreadsheet
  var data = [];

  // list files in this folder
  // myfiles is a File Iterator
  var myfiles = foldersnext.getFiles();

  // loop through files in this folder
  while (myfiles.hasNext()) {
    var myfile = myfiles.next();
    var fname = myfile.getName();
    var fquerykey = fname.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
    var fdate = myfile.getLastUpdated();
    var fsize = myfile.getSize();
    var furl = myfile.getUrl();
    var fid = myfile.getId();
    var fdesc = myfile.getDescription();
    var ftype = myfile.getMimeType();
    //Logger.log("File Name is "+myfile.getName()); //Logger.log("Date is "+myfile.getLastUpdated()); //Logger.log("Size is "+myfile.getSize());
    //Logger.log("URL is "+myfile.getUrl()); //Logger.log("ID is "+myfile.getId()); //Logger.log("Description is "+myfile.getDescription());
    //Logger.log("File Type is "+myfile.getMimeType());

    // Populate the array for this file
    data = [
      "",
      fname,
      fquerykey,
      fdate,
      fsize,
      furl,
      fid,
      fdesc,
      ftype
    ];
    //Logger.log("data = "+data); //DEBUG
    sheet.appendRow(data);
  } // Completes listing of the files in the named folder


  // Now get the subfolder
  // subfolders is a Folder Iterator
  var subfolders = foldersnext.getFolders();
  //Logger.log("THE SUBFOLDER(S) ARE"); DEBUG HEADING

  // now start a loop on the SubFolder list
  while (subfolders.hasNext()) {
    var subfolderdata = [];
    var mysubfolders = subfolders.next();
    var mysubfolder = mysubfolders.getName();
    //Logger.log("Subfolder name:"+mysubfolder); //DEBUG

    // Get the files
    // mysubfiles is a File Iterator
    var mysubfiles = mysubfolders.getFiles();
    //Logger.log("FILES IN THIS FOLDER"); //DEBUG HEADING

    // now start a loop on the files in the subfolder
    while (mysubfiles.hasNext()) {
      var smyfile = mysubfiles.next();
      var sfname =  smyfile.getName();
      var sfquerykey = sfname.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
      var sfdate =  smyfile.getLastUpdated();
      var sfsize =  smyfile.getSize();
      var sfurl =  smyfile.getUrl();
      var sfid =  smyfile.getId();
      var sfdesc =  smyfile.getDescription();
      var sftype =  smyfile.getMimeType();
      //Logger.log("Subfolder is "+foldersnext+"/"+mysubfolder);
      //Logger.log("File Name is "+ smyfile.getName()); Logger.log("Date is "+ smyfile.getLastUpdated()); Logger.log("Size is "+ smyfile.getSize());
      //Logger.log("URL is "+ smyfile.getUrl()); Logger.log("ID is "+ smyfile.getId()); Logger.log("Description is "+ smyfile.getDescription());Logger.log("File Type is "+ smyfile.getMimeType());
      subfolderdata = [
        (mysubfolder.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()),
        sfname,
        sfquerykey,
        sfdate,
        sfsize,
        sfurl,
        sfid,
        sfdesc,
        sftype
      ];
      //Logger.log("subfolderdata = "+subfolderdata);
      sheet.appendRow(subfolderdata);
    }
  }
}
