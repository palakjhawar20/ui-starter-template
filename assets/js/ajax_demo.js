$(function() {
    // on doc ready
    var payload = {
        token: "zzdNvOw-5jmYBKU40HbEYg",
        data: {
            name: "nameFirst",
            email: "internetEmail",
            phone: "phoneHome",
            _repeat: 300
        }
    };
    var htmlTableBody = '';
    $.ajax({
        type: "POST",
        url: "https://app.fakejson.com/q",
        data: payload,
        success: function(resp) {
            // Do something with fake data
            resp.forEach(e => {
                htmlTableBody = htmlTableBody + "<tr><td>" + e.email + "</td><td>" + e.name + "</td><td>" + e.phone + "</td></tr>"
            });
            $("tbody").html(htmlTableBody);
        }
    });

    $.ajax({
        url: "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json",
        type: "GET",
        success: function(r) {
            debugger;
        }

    });
});