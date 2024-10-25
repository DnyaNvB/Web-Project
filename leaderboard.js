class Leaderboard extends React.Component {
  render() {
    var data = this.props.data || [],
      rows = [];
    var rows = new Array(data.length > 10 ? 10 : data.length).fill(0).map((z, i) => {
      var id = data[i].userId,
        un = data[i].userName,
        en = data[i].earnings,
        oc = () => {
          window.open('');
        };
      return /*#__PURE__*/(
        React.createElement("li", { key: i }, /*#__PURE__*/
          React.createElement("img", { src: 'http://www.rewards1.com/uploads/avatar/' + id + '.jpg', onError: e => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }), /*#__PURE__*/
          React.createElement("mark", null, un), /*#__PURE__*/
          React.createElement("small", null, en.toFixed(2))));


    });
    return /*#__PURE__*/(
      React.createElement("div", { className: "leaderboard" }, /*#__PURE__*/
        React.createElement("h1", null, this.props.title || 'Leaderboard'), /*#__PURE__*/
        React.createElement("ol", null, rows)));


  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    setTimeout(() => this.update([
      { userId: 3405462, userName: 'LiMiTx', earnings: 1000 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 },
      { userId: 203, userName: 'bean', earnings: 500 }]),
      500);
    /*var socket = this.connect('wss://r1-contest-api.herokuapp.com', event => {
      this.update(JSON.parse(event.data));
    });*/
  }

  connect(uri, messageHandler, tries) {
    tries = tries || 0;
    var socket = new WebSocket(uri);
    socket.addEventListener('open', event => {
      tries = 0;
      console.log('Connected to wss!');
    });
    socket.addEventListener('message', messageHandler);
    socket.addEventListener('close', event => {
      tries < 8 && tries++;
      var delay = Math.floor((Math.random() + 0.5) * Math.pow(1.5, tries));
      console.log('Disconnected from socket. Reconnecting with random exponential backoff (' + delay + ' seconds)...');
      setTimeout(this.connect.bind(this, uri, messageHandler, tries), 1000 * delay);
    });
    return socket;
  }

  update(data) {
    this.setState({ data: data });
  }

  render() {
    return /*#__PURE__*/React.createElement(Leaderboard, { title: "Leaderboard", data: this.state.data });
  }

  componentDidUpdate() {
    var loader = document.getElementsByClassName('loader')[0];
    loader.classList.remove('initial');
    loader.style.opacity = 0;
    loader.style.visibility = 'hidden';
  }
}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));


document.getElementById('mode-toggle').addEventListener('click', function () {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    this.textContent = 'Switch to Light Mode';
  } else {
    this.textContent = 'Switch to Dark Mode';
  }
});
document.getElementById('logout-button').addEventListener('click', function() {
  // Add your logout logic here, such as redirecting to a logout page
  window.location.href = 'mainmenup.html'; // Example redirect to a logout page
});
