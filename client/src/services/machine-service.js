import { get, post, remove, upload, download } from "../data/crud";
import { dbConstants } from "../constants/constants";

const filterAvailableMachines = async machines => {
  const machinesFromDb = await machineService.getAllMachines();
  const availableMachines = machinesFromDb
    .map(b => b._id)
    .filter(id => machines.some(b => b._id === id));

  return availableMachines;
};

const getMachineById = async id => {
  const machines = await machineService.getAllMachines();
  return machines.find(b => b._id === id);
};

const existsMachineById = async id => (await getMachineById(id)) !== undefined;

const machineService = {
  getAllMachines: () => get(dbConstants.machinesAllUrl),
  getMachineById: id => getMachineById(id),
  createMachine: machine => post(dbConstants.machineCreateUrl, machine),
  deleteMachineById: id => remove(dbConstants.machineDeleteByIdUrl + id),
  editMachineById: (id, machine) => post(dbConstants.machineEditByIdUrl + id, machine),
  existsMachineById: id => existsMachineById(id),
  filterAvailableMachines: machines => filterAvailableMachines(machines),
  likeMachineById: id => post(dbConstants.machineLikeByIdUrl + id),
  unlikeMachineById: id => post(dbConstants.machineUnlikeByIdUrl + id),
  reviewMachineById: (id, review) =>
    post(dbConstants.machineReviewByIdUrl + id, review),
  deleteMachineReviewByIdIndex: (machineId, reviewIndex) =>
    post(dbConstants.machineReviewDeleteByIdIndexUrl + machineId + "/" + reviewIndex),
  uploaFileByMachineId: (id, data) =>
    upload(dbConstants.machineFileUploadByIdUrl + id, data),
  downloadFileByMachineId: id =>
    download(dbConstants.machineFileDownloadByIdUrl + id),
  deleteFileByMachineId: id => post(dbConstants.machineFileDeleteByIdUrl + id),
  getStats: () => get(dbConstants.statsUrl)
};

export default machineService;
