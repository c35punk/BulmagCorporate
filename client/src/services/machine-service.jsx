const baseUrl = "http://localhost:9949/machines";

const machineService = {
  editMachineById: (id, machine) => {
    return fetch(`${baseUrl}/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine)
    });
  },
  editMachineById: (id, machine) => {
    return fetch(`${baseUrl}/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine)
    });
  }
};
 

export default machineService;
