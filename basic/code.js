$(document).ready(function() {
    $('#box').on('click', function() {
        var content = 'christmas box huuu';
        $('#result').text('You clicked on the' + content);
    });

    $('#santa-claus').on('click', function() {
        var content = 'santa';
        $('#result').text('You clicked on the' + content);
    });

    $('#bell').on('click', function() {
        var content = 'bell beeell';
        $('#result').text('You clicked on the' + content);
    });
});