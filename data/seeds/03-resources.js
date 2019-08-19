exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          project_id: 1,
          name: "laundry detergent",
          description: "sensitive skin type"
        },
        { project_id: 2, name: "calculator", description: "TI-84" }
      ]);
    });
};