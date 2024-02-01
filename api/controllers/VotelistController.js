import Votelist from "../models/Votelist.js";

export const createController = async (req, res) => {
  try {
    const doc = await new Votelist({
      name: req.body.name,
      voteElements: req.body.voteElements,
    }).save();

    res.json({
      success: true,
      response: {
        doc,
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

    const currentVotelist = await Votelist.findById(id);

    res.json({
      success: true,
      response: {
        currentVotelist,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};

export const updateController = async (req, res) => {
  try {
    const id = req.params.id;
    let updatedVotelist = req.body.Votelist;

    if (!id) throw new Error("Не передан id");

    let doc = await Votelist.findByIdAndUpdate(id, updatedVotelist, {new: true});

    res.json({
      success: true,
      response: {
        doc,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};

export const getAllCotroller = async (req, res) => {
  try {
    const allVotelists = await Votelist.find({});

    res.json({
      success: true,
      response: {
        allVotelists,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};

export const deleteCotroller = async (req, res) => {
  try {
    const id = req.params.id;

    const doc = await Votelist.deleteOne({_id:id});
    res.json({
      success: true,
      response: {
        doc,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка обработки запроса" + err,
    });
  }
};
