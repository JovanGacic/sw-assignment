import $ from "jquery";

export const getData = (url, callBackSucces, callBackFail) => {
     $.ajax({
        url,
        dataType: "jsonp",
        //jsonpCallback: "logResults",
        success: (result) => callBackSucces(result),
        fail: (err) => callBackFail(err)
    });
}