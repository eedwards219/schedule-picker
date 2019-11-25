// const { Model } = require("objection");

// class Operators extends Model {
//   static get tableName() {
//     return "operators";
//   }

//   static get relationMappings() {
//     const Supervisors = require("./Supervisors");
//     return {
//       supervisors: {
//         relation: Model.HasManyRelation,
//         modelClass: Supervisors,
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
//       required: ["time", "location"],

//       properties: {
//         id: { type: "integer" },
//         supervisor_id: { type: "integer" },
//         operator_id: { type: "integer" }
//       }
//     };
//   }
// }

// module.exports = Operators;

const { Model } = require("objection");

class Schedules extends Model {
  static get tableName() {
    return "schedules";
  }

  static get relationMappings() {
    const Operators = require("./Operators");
    return {
      //   operators: {
      //     relation: Model.HasManyRelation,
      //     modelClass: Operators,
      //     join: {
      //       from: "schedule.id",
      //       to: "operator.id"
      //     }
      //   },
      operators: {
        relation: Model.ManyToManyRelation,
        modelClass: Operators,
        join: {
          from: "schedules.id",
          through: {
            // users_appointments is the join table.
            from: "schedules_operators.schedule_id",
            to: "schedules_operators.operator_id"
          },
          to: "operators.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time", "location"],

      properties: {
        schedule_id: { type: "integer" },
        operator_id: { type: "integer" }
      }
    };
  }
}

module.exports = Schedules;
