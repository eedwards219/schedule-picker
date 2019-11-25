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
          name: "Angie Mathis",
          serialNumber: "96-blue",
          hireDate: "1990-06-30T01:50:20 +07:00"
        },
        {
          name: "Raymond Moses",
          serialNumber: "46-green",
          hireDate: "1999-06-01T06:33:35 +07:00"
        },
        {
          name: "Hopkins Golden",
          serialNumber: "374-green",
          hireDate: "2006-12-26T05:01:43 +07:00"
        },
        {
          name: "Desiree Ward",
          serialNumber: "98-green",
          hireDate: "2006-11-07T05:34:43 +07:00"
        },
        {
          name: "Randi Barron",
          serialNumber: "109-green",
          hireDate: "1993-09-27T02:05:28 +07:00"
        },
        {
          name: "Irwin Pickett",
          serialNumber: "75-green",
          hireDate: "2019-03-25T08:21:20 +07:00"
        },
        {
          name: "Sharp Hodges",
          serialNumber: "319-brown",
          hireDate: "1998-02-10T08:44:51 +07:00"
        },
        {
          name: "Kidd Bullock",
          serialNumber: "67-brown",
          hireDate: "2015-04-18T10:55:15 +07:00"
        },
        {
          name: "Pamela Carrillo",
          serialNumber: "325-brown",
          hireDate: "1999-09-07T01:09:42 +07:00"
        },
        {
          name: "Billie Fuller",
          serialNumber: "393-blue",
          hireDate: "1997-05-04T03:37:59 +07:00"
        },
        {
          name: "Nanette Henderson",
          serialNumber: "38-blue",
          hireDate: "2003-11-27T08:33:36 +07:00"
        },
        {
          name: "Earnestine Jacobson",
          serialNumber: "414-brown",
          hireDate: "1998-08-09T09:34:29 +07:00"
        },
        {
          name: "Bryan Hutchinson",
          serialNumber: "219-green",
          hireDate: "2001-05-02T12:01:49 +07:00"
        },
        {
          name: "Doris Brown",
          serialNumber: "258-green",
          hireDate: "2003-07-05T10:15:18 +07:00"
        },
        {
          name: "Ruth Hoffman",
          serialNumber: "361-green",
          hireDate: "1999-04-25T12:10:06 +07:00"
        },
        {
          name: "Kathleen George",
          serialNumber: "338-brown",
          hireDate: "2012-01-15T09:25:30 +07:00"
        },
        {
          name: "Buckner Wheeler",
          serialNumber: "314-green",
          hireDate: "1997-11-20T06:54:38 +07:00"
        },
        {
          name: "Dotson Mccarthy",
          serialNumber: "261-green",
          hireDate: "2016-09-03T05:55:36 +07:00"
        },
        {
          name: "Aimee Moreno",
          serialNumber: "99-blue",
          hireDate: "2017-06-27T03:52:49 +07:00"
        },
        {
          name: "Singleton Craig",
          serialNumber: "376-blue",
          hireDate: "2003-03-06T12:36:28 +07:00"
        }
      ]);
    });
};
