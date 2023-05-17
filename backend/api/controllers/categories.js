const pool = require("../../databasepg");
const query = require("../queries/categoriesQuery");

exports.get_all = (req, res, next) => {
  pool.query(query.get_all, (err, result) => {
    if (err) {
      res.status(500).json({
        error: "Invalid Query",
      });
    }
    const data = result.rows;
    const array = [...new Set(data.map((doc) => doc.categories))];
    const newarr = [];
    array.map((doc, i) => {
      var obj = {
        id: i,
        name: doc,
        subcategories: [],
      };
      newarr.push(obj);
    });
    data.map((doc) => {
      var index = newarr.findIndex((item) => item.name === doc.categories);
      newarr[index].subcategories.push({
        id: doc.subcategoryid,
        name: doc.subcategories,
      });
    });
    res.status(200).json(newarr);
  });
};

exports.get_sub = (req, res, next) => {
  const name = req.query.category;
  console.log("Im name", req.query.category);
  pool.query(query.get_subcategories, [`%${name}%`], (err, result) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    const data = result.rows;
    const array = [...new Set(data.map((doc) => doc.categories))];
    const newarr = [];
    array.map((doc) => {
      var obj = {
        name: doc,
        subcategories: [],
      };
      newarr.push(obj);
    });
    data.map((doc) => {
      var index = newarr.findIndex((item) => item.name === doc.categories);
      newarr[index].subcategories.push({
        id: doc.subcategoryid,
        name: doc.subcategories,
      });
    });

    res.status(200).json(newarr);
  });
};
