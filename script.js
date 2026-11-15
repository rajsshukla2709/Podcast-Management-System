let total = 0;
let inProgress = 0;
let published = 0;

function addEpisode () {


    let episodeName  = 
    document.getElementById("episode").value;
    let guestName = 
    document.getElementById("guest").value;

    if (episodeName === "" || guestName === "") {
        alert("Please enter both names");
    }

    else {
         let episodeList =
    document.getElementById("episodelist");

    let newEpisode =
    document.createElement("p");

    newEpisode.innerHTML =
    episodeName + " - Guest: " + guestName;

    episodeList.appendChild(newEpisode);
    

    total = total + 1;
    document.getElementById("totalEpisodes").innerHTML=total;

    document.getElementById("episode").value = "";
    document.getElementById("guest").value = "";

    }
}

function addGuest()  {
    let name=
    document.getElementById("guestName").value;
    let email=
    document.getElementById("guestEmail").value;

    if(name === "" || email =="") {
        alert("Please enter guest details");
    }
    else {
        let guestList=
        document.getElementById("guestList");
        let newGuest=
        document.createElement("p");
        newGuest.innerHTML= name + " - " + email;

        guestList.appendChild(newGuest);

        document.getElementById("guestName").value = "";
        document.getElementById("guestEmail").value = "";
    }

}

function addRecording()  {
    let episode =
    document.getElementById("recordingEpisode").value;
    let status =
    document.getElementById("recordingStatus").value;

    if (episode == "")  {
        alert("Please enter episode name");
    }
    else  {
        let recordingList = 
        document.getElementById("recordingList");
        let newRecording =
        document.createElement("p");

        newRecording.innerHTML= episode + " - " + status;

        recordingList.appendChild(newRecording);
        document.getElementById("recordingEpisode").value = "";
    }
}

function addScript() {
    let episode =
    document.getElementById("scriptEpisode").value;
    let script =
    document.getElementById("episodeScript").value;

    if (episode == "" || script == "") {
        alert("Please enter episode name and script");
    }
    else {
        let scriptList =
        document.getElementById("scriptList");

        let newScript =
        document.createElement("p");

        newScript.innerHTML = episode + " - Script Saved ";
        scriptList.appendChild(newScript);

        document.getElementById("scriptEpisode").value = "";
        document.getElementById("episodeScript").value = "";
    }
}

function addEditing()  {
    let episode =
    document.getElementById("editingEpisode").value;
    let status =
    document.getElementById("editingStatus").value;

    if (episode == "") {
        alert("Please enter episode name");
    }
    else {
        let editingList =
        document.getElementById("editingList");
        let newEditing =
        document.createElement("p");

        newEditing.innerHTML = episode + " - " + status;

        editingList.appendChild(newEditing);
        if (status === "In Progress") {
            inProgress = inProgress + 1;
            document.getElementById("inProgressEpisodes").innerHTML = inProgress;
        }
        document.getElementById("editingEpisode").value = "";
    }
}

function addPublishing()  {
    let episode =
    document.getElementById("publishEpisode").value;
    let status =
    document.getElementById("publishStatus").value;

    if (episode == "") {
        alert("Please enter episode name");
    }
    else {
        let publishingList =
        document.getElementById("publishingList");
        let newPublishing =
        document.createElement("p");

        newPublishing.innerHTML = episode + " - " + status;
        publishingList.appendChild(newPublishing);
        if (status === "Published") {
            published = published + 1;
            document.getElementById("publishedEpisodes").innerHTML = published;
        }
         document.getElementById("publishEpisode").value = "";
         document.getElementById("publishstatus").selectIndex = 0
    }
}JavaScript

function addArtwork() {
    let episode = document.getElementById("artworkEpisode").value;
    let status = document.getElementById("artworkStatus").value;

    if (episode === "") {
        alert("Please enter episode name");
        return;
    }

    let li = document.createElement("li");

    li.textContent = episode + " - " + status;

    document.getElementById("artworkList").appendChild(li);

    document.getElementById("artworkEpisode").value = "";
}