/*
 * Member search functionality
 * Use GitHub Copilot to complete this JavaScript module
 */

// Array of members
const members = [
  { name: "Alice Johnson", age: 25, role: "Developer" },
  { name: "Bob Smith", age: 30, role: "Designer" },
  { name: "Charlie Brown", age: 28, role: "Product Manager" },
  { name: "Diana Prince", age: 27, role: "Developer" },
  { name: "Eve Williams", age: 32, role: "Team Lead" }
];

/**
 * Find a member by name
 * @param {string} name - The name to search for
 * @returns {object|null} - The member object or null if not found
 */
function findMemberByName(name) {
  return members.find(member => member.name.toLowerCase() === name.toLowerCase()) || null;
}

/**
 * Filter members by role
 * @param {string} role - The role to filter by
 * @returns {array} - Array of members with the specified role
 */
function filterMembersByRole(role) {
  return members.filter(member => member.role.toLowerCase() === role.toLowerCase());
}

/**
 * Get all member names
 * @returns {array} - Array of all member names
 */
function getAllMemberNames() {
  return members.map(member => member.name);
}

/**
 * Calculate average age of all members
 * @returns {number} - The average age
 */
function getAverageAge() {
  const totalAge = members.reduce((sum, member) => sum + member.age, 0);
  return members.length > 0 ? totalAge / members.length : 0;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    members,
    findMemberByName,
    filterMembersByRole,
    getAllMemberNames,
    getAverageAge
  };
}

// Test the functions (this will run when the file is executed directly)
if (require.main === module) {
  console.log("Member Management System Tests:");
  console.log("================================");
  console.log("\nAll members:", members.length, "total");
  
  // Add more tests here using Copilot
  console.log("\nComplete the TODO functions to see more test results!");
}
