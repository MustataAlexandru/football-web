import React, { useEffect, useState } from "react";
import { Modal, Button, Card } from "flowbite-react";
import "flowbite";
import Foter from "./Footer";
import { Alert } from "flowbite-react";
import { useUser } from "../ContextProvider/UserProvider";

export default function Echipe() {

  const [alert , setAlert] = useState('hidden');
  const [teams, setTeams] = useState([]);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [teamDetails, setTeamDetails] = useState({
    name: "",
    manager: "",
    administrator: "",
    coach: "",
    description: "",
  });
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const {user} = useUser();
  const alertToggle =() => {
    setAlert('visible');
        setTimeout(() => {
          setAlert('hidden');
        }, 4000);
  }

  const fetchTeams = () => {
    fetch("http://localhost:3001/echipe")
      .then((res) => res.json())
      .then(setTeams)
      .catch((err) => console.error("Error loading teams:", err));
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleAddPlayer = e => {
    e.preventDefault();
    if (!playerName.trim()) return;
    fetch("http://localhost:3001/echipe/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        teamId: selectedTeamId,
        playerName: playerName.trim(),
      }),
    })
      .then(response => response.json())
      .then(() => {
        setPlayerName("");
        setIsPlayerModalOpen(false);
        alertToggle();
        fetchTeams();
      })
      .catch( error => {
        console.error("Error adding player:", error);
      });
  };

  const handleAddTeam = e => {
    e.preventDefault();
    const { name, manager, administrator, coach, description } = teamDetails;
    if (!name.trim()) return;
    fetch("http://localhost:3001/echipe/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nume: name,
        manager,
        administrator,
        antrenor: coach,
        description,
      }),
    })
      .then( (response) => response.json())
      .then(() => {
        setTeamDetails({
          name: "",
          manager: "",
          administrator: "",
          coach: "",
          description: "",
        });
        setIsTeamModalOpen(false);
        alertToggle();
        fetchTeams();
     })
      .catch( error => {
        console.error("Error adding team:", error);
      });
  };

  return (
    <div className="mt-2 t_container">
      { user && user.role === 1 &&
      <Button className="width20" onClick={() => setIsTeamModalOpen(true)}>
        Add Team
      </Button>}
      <Alert className={`mg mt-2 width50 ${alert}`} color="info">
      <span className="font-medium mg text-center">Succesfully added!</span>
    </Alert>
      <div className="teams_container p-4"> 
        {teams.map((team) => (
          <div
            key={team.id}
            className="card bg-white shadow-lg rounded-lg p-6 m-2 "
          >
            <div className="title_container flex items-center gap-1">
              { user && user.role === 1 &&
              <Button
                className="width100"
                onClick={() => {
                  setSelectedTeamId(team.id);
                  setIsPlayerModalOpen(true);
                }}
              >
                Add Player
              </Button>}
              <img src={require('./imgs/craiova-logo.png')} alt="Team Logo" className="w-12 h-12 mb-4 mt-4 img-card-container box-shadow" />
              <p className="title font-bold">{team.name}</p>
            </div>

            <p>Manager: {team.manager}</p>
            <p>Administrator: {team.administrator}</p>
            <p>Coach: {team.coach}</p>
            <div className="player_list">
              <h4>{team.players ? "Players" : "No players yet"}</h4>
              <ul>
                {team.players.map((player) => (
                  <li key={player.id}>
                    <div className="flex">
                      <img src={require('./neymar22.jpg')} className="player_logo" alt="player" />
                      {player.name}
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                className="custom-btn"
                onClick={() => {
                  setCurrentTeam(team);
                  setIsInfoModalOpen(true);
                }}
              >
                Show Team Info
              </Button>
            </div>
          </div>
        ))}
        {isPlayerModalOpen && (
          <Modal
            show={isPlayerModalOpen}
            onClose={() => setIsPlayerModalOpen(false)}
            size="md"
          >
            <Modal.Header>Add Player to the Team</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleAddPlayer} className="flex flex-col gap-3">
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter player's name"
                  required
                />
                <Button type="submit">Submit</Button>
                <Button
                  color="gray"
                  onClick={() => setIsPlayerModalOpen(false)}
                >
                  Close
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        )}
        {isTeamModalOpen && (
          <Modal
            show={isTeamModalOpen}
            onClose={() => setIsTeamModalOpen(false)}
            size="md"
          >
            <Modal.Header>Add New Team</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleAddTeam} className="flex flex-col gap-3">
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={teamDetails.name}
                  onChange={(e) =>
                    setTeamDetails({ ...teamDetails, name: e.target.value })
                  }
                  placeholder="Team Name"
                  required
                />
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={teamDetails.manager}
                  onChange={(e) =>
                    setTeamDetails({ ...teamDetails, manager: e.target.value })
                  }
                  placeholder="Manager"
                  required
                />
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={teamDetails.administrator}
                  onChange={(e) =>
                    setTeamDetails({
                      ...teamDetails,
                      administrator: e.target.value,
                    })
                  }
                  placeholder="Administrator"
                  required
                />
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={teamDetails.coach}
                  onChange={(e) =>
                    setTeamDetails({ ...teamDetails, coach: e.target.value })
                  }
                  placeholder="Coach"
                  required
                />
                <input
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={teamDetails.description}
                  onChange={(e) =>
                    setTeamDetails({
                      ...teamDetails,
                      description: e.target.value,
                    })
                  }
                  placeholder="Description"
                  required
                />
                <Button type="submit">Submit</Button>
                <Button color="gray" onClick={() => setIsTeamModalOpen(false)}>
                  Close
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        )}
        {isInfoModalOpen && (
          <Modal
            show={isInfoModalOpen}
            onClose={() => setIsInfoModalOpen(false)}
            size="md"
          >
            <Modal.Header>
                 <div className="flex">
                <img className="team-logo-mdal" src={require('./craiova.png')} alt ="team logo" />
                {currentTeam.name}
                </div>
            </Modal.Header>
            <Modal.Body>
              <div className="" imgSrc={require('./echipa23.jpg')} vertical>
                <img src={require('./echipa23.jpg')} className="team-logo"></img>
                <p>
                  <strong>Coach:</strong>{" "}
                  {currentTeam ? currentTeam.coach : "N/A"}
                </p>
                <p>
                  <strong>Manager:</strong>{" "}
                  {currentTeam ? currentTeam.manager : "N/A"}
                </p>
                <p style={{borderBottom: '1px solid gray'}}>
                  <strong>Administrator:</strong>{" "}
                  {currentTeam ? currentTeam.administrator : "N/A"}
                </p>
                <p>
                  <strong></strong>{" "}
                  {currentTeam
                    ? currentTeam.description
                    : "No description available."}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="width100"
                color="gray"
                onClick={() => setIsInfoModalOpen(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
     
    </div>
  );
}
