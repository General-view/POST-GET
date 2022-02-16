"use strict";

function postRequest() {

    const form = document.getElementById("post-form"),
          url = document.getElementById("post-address").value,
          data = document.getElementById("post-data").value;


    const postData = async () => {
        let result = await fetch(url, {
            method: "POST",
            body: data,
        })
        .then((res) => console.log(res));
    
        return result;
    };

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        postData();
    });

}

postRequest();


function getRequest() {

    const form = document.getElementById("get-form"),
          url = document.getElementById("get-address").value;


    const getData = async () => {
        let result = await fetch(url, {
            method: "GET"
        })
        .then((res) => console.log(res));
    
        return result;
    };

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        getData();
    });

}

getRequest();