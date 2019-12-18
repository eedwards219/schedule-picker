exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //   [
  //     '{{repeat(200)}}',
  //     {
  //   name: '{{firstName()}} {{surname()}}',
  //         company: '{{company().toUpperCase()}}',
  //               email: '{{email()}}',
  //       phone: '+1 {{phone()}}',
  //             address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}'
  //     }
  //   ]
  return knex("supervisors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("supervisors").insert([
        {
          name: "Wade Holt",
          aNumber: "blue-341",
          schedule: "2016-06-05T12:15:48 +07:00",
          role: "supervisor"
        },
        {
          name: "Diann Glass",
          aNumber: "green-344",
          schedule: "2018-03-27T08:51:53 +07:00",
          role: "supervisor"
        },
        {
          name: "Cross Sawyer",
          aNumber: "blue-18",
          schedule: "2015-02-08T05:12:28 +07:00",
          role: "supervisor"
        },
        {
          name: "Joyce Farmer",
          aNumber: "brown-149",
          schedule: "2015-05-27T08:14:49 +07:00",
          role: "supervisor"
        },
        {
          name: "Wendi Forbes",
          aNumber: "blue-201",
          schedule: "2019-06-06T10:21:48 +07:00",
          role: "supervisor"
        },
        {
          name: "Marva Macias",
          aNumber: "blue-51",
          schedule: "2016-06-26T07:07:21 +07:00",
          role: "supervisor"
        },
        {
          name: "Louisa Galloway",
          aNumber: "green-192",
          schedule: "2017-06-12T01:16:51 +07:00",
          role: "supervisor"
        },
        {
          name: "Barton Mann",
          aNumber: "blue-264",
          schedule: "2014-03-28T09:11:24 +07:00",
          role: "supervisor"
        },
        {
          name: "Greta Rios",
          aNumber: "brown-102",
          schedule: "2017-11-29T12:57:30 +07:00",
          role: "supervisor"
        },
        {
          name: "Sarah William",
          aNumber: "blue-36",
          schedule: "2019-09-25T08:49:42 +07:00",
          role: "supervisor"
        },
        {
          name: "Spencer Herrera",
          aNumber: "brown-368",
          schedule: "2014-11-26T02:38:24 +07:00",
          role: "supervisor"
        },
        {
          name: "Shari Finley",
          aNumber: "green-107",
          schedule: "2019-10-03T02:42:55 +07:00",
          role: "supervisor"
        },
        {
          name: "Annmarie Morris",
          aNumber: "green-206",
          schedule: "2015-03-22T03:31:57 +07:00",
          role: "supervisor"
        },
        {
          name: "Madelyn Hess",
          aNumber: "green-4",
          schedule: "2016-12-06T06:55:49 +07:00",
          role: "supervisor"
        },
        {
          name: "Howard Hughes",
          aNumber: "blue-102",
          schedule: "2014-06-21T06:55:35 +07:00",
          role: "supervisor"
        },
        {
          name: "Herring Hahn",
          aNumber: "brown-12",
          schedule: "2015-08-07T06:10:02 +07:00",
          role: "supervisor"
        },
        {
          name: "Skinner Branch",
          aNumber: "brown-180",
          schedule: "2019-10-05T12:50:40 +07:00",
          role: "supervisor"
        },
        {
          name: "Leanna Frank",
          aNumber: "brown-367",
          schedule: "2015-01-03T10:57:02 +07:00",
          role: "supervisor"
        },
        {
          name: "Tabatha Pratt",
          aNumber: "blue-291",
          schedule: "2017-03-23T08:20:02 +07:00",
          role: "supervisor"
        },
        {
          name: "Corinne Tanner",
          aNumber: "blue-189",
          schedule: "2016-04-06T05:45:56 +07:00",
          role: "supervisor"
        }
      ]);
    });
};
