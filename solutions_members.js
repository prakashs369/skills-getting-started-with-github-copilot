/*
 * SOLUTIONS for members.js
 * 
 * This file contains completed implementations.
 * Try to complete them yourself first using GitHub Copilot!
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
  return members.find(member => member.name === name) || null;
}

/**
 * Filter members by role
 * @param {string} role - The role to filter by
 * @returns {array} - Array of members with the specified role
 */
function filterMembersByRole(role) {
  return members.filter(member => member.role === role);
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
  return totalAge / members.length;
}

// Test the functions
if (require.main === module) {
  console.log("Member Management System Tests:");
  console.log("================================");
  console.log("\nAll members:", members.length, "total");
  
  console.log("\nFind member 'Alice Johnson':");
  console.log(findMemberByName("Alice Johnson"));
  
  console.log("\nFilter by role 'Developer':");
  console.log(filterMembersByRole("Developer"));
  
  console.log("\nAll member names:");
  console.log(getAllMemberNames());
  
  console.log("\nAverage age:");
  console.log(getAverageAge().toFixed(1));
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
