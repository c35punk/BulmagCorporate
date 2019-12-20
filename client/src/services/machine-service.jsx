import { dbConstants } from "../constants/constants";

const machineService = {
  editMachineById: (id, machine) => {
    return fetch(`${dbConstants.machinesUrl}/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine)
    });
  },

  deleteMachine: id => {
    return fetch(`${dbConstants.machinesUrl}/delete/${id}`, {
      method: "DELETE"
    });
  }
};

export default machineService;
