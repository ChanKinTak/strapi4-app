module.exports = {
    config: {
      "api::faq.faq": {
        columns: [
          "question"
        ],
        relation: {
          solution: {
            column: ["title"],
          },
        },
        locale: "false",
      },
    },
  };