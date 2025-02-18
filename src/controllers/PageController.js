export const home = (req, res) => {
  // res.render("NAAM VAN DE VIEW", {"DATA NAAR DE VIEW"})
  res.render("home", {
    title: "Dinosaurs around the world",
    content: "Welcome to the world of dinosaurs",
  });
};

export const about = (req, res) => {
  res.render("default", {
    title: "About us",
    content: "We are a group of dinosaurs",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact",
    content: "Contact us at +32 123 45 67 89",
  });
};

export const privacy = (req, res) => {
  res.render("default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
  });
};
