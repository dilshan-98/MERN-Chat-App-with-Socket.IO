import chat from "../Models/chatModel.js";
import user from "../Models/userModel.js";

//1-1 chat ctrl
const accessChat = async (req, res) => {
  //user id of whom we are going to start the chat with
  const { userId } = req.body;

  if (!userId) {
    console.log("userId not available, please check the body");
    return res.status(401).json({ msg: "userId not found" });
  }

  var isChat = await chat
    .find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await user.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });
  console.log("chat data after populate: ", isChat);

  if (isChat.length > 0) {
    res.status(200).send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [userId, req.user._id],
    };

    try {
      const chatCreate = await chat.create(chatData); //here we get the created data completely (only id's of the users are available since that's how this is being saved in db)
      const chatDetails = await chat
        .find({ _id: chatCreate._id })
        .populate("users", "-password"); //here we get the data we get from above plus user details without password

      res.status(200).send(chatDetails);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};

export { accessChat };
