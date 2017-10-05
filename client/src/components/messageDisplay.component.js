module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(websockets) {
    this.displayMessage = (message) => {
      const messageNode = document.createElement('li');
      messageNode.className = 'message';

      const messageParts = ['fromName', 'title', 'text'];
      messageParts.forEach((part) => {
        const messagePartNode = document.createElement('div');
        messagePartNode.textContent = message[part];
        messageNode.appendChild(messagePartNode);
      });

      return messageNode;
    };

    this.receive = (event) => {
      console.log(`Message from the server ${event.data}`);
      const data = JSON.parse(event.data);
      if (this.user.role === 'organizer' || data.toIds.includes(this.group.id)) {
        const message = this.displayMessage(data);
        document.getElementById('messages').appendChild(message);
      }
    };

    websockets.receive(this.receive);
  },
  template: `
    <ul id="messages"></ul>
  `
};
