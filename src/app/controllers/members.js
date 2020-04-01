const Intl = require("intl");
const { age, date } = require("../../lib/utils");

module.exports = {
  index(req, res) {
    return res.render("members/index");
  },
  create(req, res) {
    return res.render("members/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") return res.send("Please, fill all the fields!");
    }

    let { avatar_url, birth, name, services, gender } = req.body;

    return res.redirect("/members");
  },
  show(req, res) {
    return res.render("members/show");
  },
  edit(req, res) {
    return res.redirect(`/members`);
  },
  put(req, res) {
    return res.redirect(`/members`);
  },
  delete(req, res) {
    return res.redirect(`/members`);
  }
};
