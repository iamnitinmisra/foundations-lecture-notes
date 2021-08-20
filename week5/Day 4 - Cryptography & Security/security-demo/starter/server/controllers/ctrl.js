const bcrypt = require("bcryptjs");

let chats = [];
// { pin: '1234', message: 'hello world' }
module.exports = {
  createMessage: (req, res) => {
    const { pin, message } = req.body;

    for (let i = 0; i < chats.length; i++) {
      let matched = bcrypt.compareSync(pin, chats[i].pin);
      //   console.log(matched);
      if (matched) {
        console.log(chats[i].messages);
        chats[i].messages.push(message);

        const secureMessages = { ...chats[i] };

        delete secureMessages.pin;

        res.status(200).send(secureMessages);
        console.log("matched", chats);
        return;
      }
    }

    const salt = bcrypt.genSaltSync(5);
    const pinHash = bcrypt.hashSync(pin, salt);

    const newMessage = {
      pin: pinHash,
      messages: [message],
    };

    chats.push(newMessage);

    const secureMessage = { ...newMessage };

    delete secureMessage.pin;

    res.status(200).send(secureMessage);

    console.log("messages", chats);
  },
};
