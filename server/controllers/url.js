import shortid from "shortid";
import Url from "../models/Url.js";
import dotenv from "dotenv";
dotenv.config()

/** REGISTER USER */
export const createShort =  async (req, res) => {

    const { origUrl, userId } = req.body;
  
    const urlId = shortid.generate();
    if (validateUrl(origUrl)) {
      try {
          const shortUrl = `${process.env.DOMAIN_URL}/${urlId}`;
  
          const url = new Url({
            userId,
            origUrl,
            shortUrl,
            urlId,
            date: new Date(),
          });
  
          await url.save();
          res.json(url);
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    } else {
      res.status(400).json('Invalid Url');
    }
}

export const getAllShort = async (req, res) => {
    const userId  = req.params.userId;
    const urls = await Url.find({ userId: userId });
    if (!urls) return res.status(400).json({ msg: "urls does not exist. " });
    return res.status(200).json(urls);
}


export const getUrl = async (req, res) => {
    try {
      const url = await Url.findOne({ urlId: req.params.urlId });
      if (url) {
        return res.redirect(url.origUrl);
      } else res.status(404).json("Not found");
    } catch (err) {
      res.status(500).json("Server Error");
    }
  }

const validateUrl = (value) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
        '(\\#[-a-z\\d_]*)?$','i');
  
    return !!urlPattern.test(value);
}