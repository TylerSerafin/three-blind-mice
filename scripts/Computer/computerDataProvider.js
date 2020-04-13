// empty array to hold computer data from api
let computers = [];
// function to export the data for other modules
export const useComputers = () => {
  return computers.slice()
}
// api call to gather the data for use
export const getComputers = () => {
  return fetch("http://localhost:8088/computers")
    .then((response) => response.json())
    .then((parsedComputers) => (computers = parsedComputers));
}
