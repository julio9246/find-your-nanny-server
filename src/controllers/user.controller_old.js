const db = require("../config/database_old");

// ==> Método responsável por criar um novo 'User':

exports.createUser = async (req, res) => {
  const { name } = req.body;
  const { rows } = await db.query(
    "INSERT INTO users (name) VALUES ($1)",
    [name]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
        name: { name }
    },
  });
};

exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM users');
    res.status(200).send(response.rows);
  };

exports.findUserById = async (req, res) => {
const userId = parseInt(req.params.id);
const response = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
res.status(200).send(response.rows);
}

exports.updateUserById = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;
  
    const response = await db.query(
      "UPDATE users SET name = $1 WHERE id = $2",
      [name, userId]
    );
  
    res.status(200).send({ message: "User Updated Successfully!" });
  };
  

  exports.deleteUserById = async (req, res) => {
    const userId = parseInt(req.params.id); 

    const response = await db.query(
      "DELETE FROM users WHERE id = $1",
      [userId]
    );
  
    res.status(200).send({ message: "User Deleted Successfully!" });
  };
  
