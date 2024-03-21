//$(document).ready(function() {
    // Fetch JSON data from games.json file
    $.getJSON('games.json', function(data) {
      var games = data.games;
  
      // Loop through each game and create a card
      $.each(games, function(index, game) {
        var cardHtml = `
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="${game.cover_url}" class="card-img-top" alt="${game.title}">
              <div class="card-body">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.short_text}</p>
                <a href="${game.url}" class="btn btn-primary" target="_blank">Play</a>
              </div>
            </div>
          </div>
        `;
        $('#game-cards').append(cardHtml);
      });
    });
  //});
  