import db from "../config/database.js";
import md5 from "md5";

const listUsers = (req, res) => {
  const requete = "SELECT name FROM user";
  db.all(requete, (err, rows) => {
    if (err) {
      console.error("Erreur lors de la recherche des utilisateurs", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche des utilisateurs");
    }
    res.send(rows);
  });
};

const countUsers = (req, res) => {
  const requete = "SELECT COUNT(*) AS count FROM user";
  db.get(requete, (err, row) => {
    if (err) {
      console.error("Erreur lors de la recherche des utilisateurs", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche des utilisateurs");
    }
    res.send(row);
  });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = md5(password);
  const requete = "SELECT * FROM user WHERE name = ?";
  const params = [username];

  db.get(requete, params, (err, row) => {
    if (err) {
      console.error("Erreur lors de la recherche de l'utilisateur", err);
      return res
        .status(500)
        .send("Erreur lors de la recherche de l'utilisateur");
    }
    if (row && row.password === hashedPassword) {
      res.send(row);
    } else {
      res.status(401).send("Nom d'utilisateur ou mot de passe incorrect");
    }
  });
};

const resetPassword = (req, res) => {
  const { username, newPassword } = req.body;
  const hashedPassword = md5(newPassword);

  // Vérifier d'abord si l'utilisateur existe
  const checkUserExists = "SELECT * FROM user WHERE name = ?";
  db.get(checkUserExists, [username], (userErr, userRow) => {
    if (userErr) {
      console.error("Erreur lors de la recherche de l'utilisateur", userErr);
      return res.status(500).send("Erreur côté serveur");
    }

    if (!userRow) {
      return res.status(404).send("Utilisateur non trouvé");
    }

    // Update password if user exists
    const updateQuery = "UPDATE user SET password = ? WHERE name = ?";
    db.run(updateQuery, [hashedPassword, username], function (updateErr) {
      if (updateErr) {
        console.error(
          "Erreur lors de la mise à jour du mot de passe",
          updateErr
        );
        return res
          .status(500)
          .send("Erreur lors de la mise à jour du mot de passe");
      }
      res.send("true");
    });
  });
};

const editUser = (req, res) => {
  const { oldUsername, newUsername } = req.body;
  const requete = "UPDATE user SET name = ? WHERE name = ?";
  const params = [newUsername, oldUsername];

  db.run(requete, params, function (err) {
    if (err) {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur", err);
      return res
        .status(500)
        .send("Erreur lors de la mise à jour du nom d'utilisateur");
    }
    res.send("Nom d'utilisateur mis à jour avec succès");
  });
};


export { listUsers, countUsers, loginUser, resetPassword, editUser };