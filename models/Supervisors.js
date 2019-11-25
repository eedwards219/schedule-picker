// const { Model } = require("objection");

// class Supervisors extends Model {
//   static get tableName() {
//     return "supervisors";
//   }

//   static get relationMappings() {
//     const Operators = require("./Operators");
//     return {
//       operators: {
//         relation: Model.BelongsToOneRelation,
//         modelClass: Operators,
//         join: {
//           from: "supervisors.id",
//           through: {
//             // users_appointments is the join table.
//             from: "supervisors_operators.operator_id",
//             to: "supervisors_operators.supervisor_id"
//           },
//           to: "operators.id"
//         }
//       }
//     };
//   }
//   static get jsonSchema() {
//     return {
//       type: "object",
//       required: ["time"],

//       properties: {
//         id: { type: "integer" },
//         time: { type: "string" }
//       }
//     };
//   }
// }

// module.exports = Supervisors;

const { Model } = require("objection");

class Supervisors extends Model {
  static get tableName() {
    return "supervisors";
  }

  static get relationMappings() {
    const Operators = require("./Operators");
    return {
      // operators: {
      //   relation: Model.BelongsToOneRelation,
      //   modelClass: Operators,
      //   join: {
      //     from: "supervisors.id",
      //     to: "operators.id"
      //   }
      // }
      operators: {
        relation: Model.ManyToManyRelation,
        modelClass: Operators,
        join: {
          from: "supervisors.id",
          through: {
            // users_appointments is the join table.
            from: "supervisors_operators.supervisor_id",
            to: "supervisors_operators.operator_id"
          },
          to: "operators.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time"],

      properties: {
        id: { type: "integer" },
        time: { type: "string" }
      }
    };
  }
}

module.exports = Supervisors;
