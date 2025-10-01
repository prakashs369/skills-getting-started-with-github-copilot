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
  // TODO: Use Copilot to implement this function
}

/**
 * Filter members by role
 * @param {string} role - The role to filter by
 * @returns {array} - Array of members with the specified role
 */
function filterMembersByRole(role) {
  // TODO: Use Copilot to implement this function
}

/**
 * Get all member names
 * @returns {array} - Array of all member names
 */
function getAllMemberNames() {
  // TODO: Use Copilot to implement this function
}

/**
 * Calculate average age of all members
 * @returns {number} - The average age
 */
function getAverageAge() {
  // TODO: Use Copilot to implement this function
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
