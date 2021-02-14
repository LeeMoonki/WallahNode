const http = {
  createServer: function(a) {
    a;

    // server
    return {
      listen: function(port) {
        port; // port를 활용해 서버를 실행
      }
    };
  }
};

module.exports = http;
