
// tenuki
function createBoard(area, data, options) {
  options = options || {};
  let board = document.createElement('div');
  board.className = 'tenuki-board';
  board.setAttribute('data-include-coordinates', 'true');
  area.appendChild(board);

  let _options = {
    element: board,
    boardSize: data.rule.size,
    handicapStones: data.rule.handicaps.length,
    freeHandicapPlacement: true,
    _hooks: {
      handleClick: function () { },
      hoverValue: function (y, x) { },
      gameIsOver: function () {
        return false;
      }
    }
  }
  Object.assign(_options._hooks, options._hooks);
  delete options._hooks;
  Object.assign(_options, options);
  let game = new tenuki.Game(_options);
  let moves = data.rule.handicaps.concat(data.moves);
  for (let move of moves) {
    if (move.y >= 0) {
      game.playAt(move.y, move.x, { render: false });
    } else {
      game.pass();
    }
  }
  game.render();
  return game;
}

function getClient(host, port, options) {
  let client = new Paho.MQTT.Client(host, Number(port), 'cid')
  client.onConnectionLost = function () {
    alert('connection lost');
  };
  client.connect(Object.assign({
    useSSL: true,
    keepAliveInterval: 50,
    onSuccess: function () {
      for (let topic of topics) {
        client.subscribe(topic);
      }
    }
  }, options))
  return client
}

function createAPI(host) {
  function api(options) {
    return fetch(host + options.path, {
      mode: 'cors',
      method: options.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options.data),
    });
  }
  return api
}