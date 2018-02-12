
var filesUpload = document.getElementById("files-upload");
var fileList = document.getElementById("file-list");

filesUpload.onchange = function () {
 traverseFiles(this.files);
};

function traverseFiles(files) {
 var li,file,fileInfo;
 fileList.innerHTML = "";


 for (var i = 0, il = files.length; i < il; i++) {
 li = document.createElement("li");
 file = files[i];

 fileInfo = "<div><strong>Fichero:</strong> " + file.name + "</div>";
 fileInfo += "<div><strong>Tamaño:</strong> " + file.size + " bytes</div>";
 fileInfo += "<div><strong>Tipo:</strong> " + file.type + "</div>";
 fileInfo += "<div><strong>Última modificación:</strong> " 
 	+ file.lastModifiedDate +"</div>" ;
 fileInfo += "<div><strong>URL:</strong> " 
 	+ file.webkitRelativePath + "</div>";

 li.innerHTML = fileInfo;
 fileList.appendChild(li);
 };
};