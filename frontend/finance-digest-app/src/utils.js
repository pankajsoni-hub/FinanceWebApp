export function formatString(str) {
    return str
    .replace(/([A-Z])/g, ' $1') 
      .trim() 
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase());
  }
  export function daysAgo(dateString,types) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const daysAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return daysAgo > 0 ? `${formatString(types)}/${daysAgo} days ago` : `${formatString(types)}/Today`;
  }
  export function convertDateToDDMMYYYY(dateString) {
    const date = new Date(dateString); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}/${month}/${year}`; 
}