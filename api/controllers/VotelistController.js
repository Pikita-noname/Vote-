import Votelist from "../models/Votelist.js";

export const createController = async (req, res) => {
  try {
    const doc = new Votelist({
      name: req.body.name,
      voteElements: [req.body.voteElements],
    });

    const voteList = await doc.save();

    res.json({
      success: true,
      response: {
        voteList,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};

export const getController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) throw new Error("Не передан id");

    const currentVoteList = await Votelist.findById(id);

    res.json({
      success: true,
      response: {
        currentVoteList,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};
