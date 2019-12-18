exports.seed = function(knex, Promise) {
  // [
  //     '{{repeat(200)}}',
  //     {
  //               name: '{{firstName()}} {{surname()}}',
  //       serialNumber:'{{random("blue", "brown", "green")}}{{integer(100-500)}}',
  //       hireDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  //       supervisor: '{{firstName()}} {{surname()}}',
  //       schedule: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  //     }

  //     ]
  return knex("operators")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("operators").insert([
        {
          name: "Woodward Robbins",
          aNumber: "brown-226",
          supervisor: "Raquel Barr",
          schedule: "2016-09-14T03:59:42 +07:00",
          role: "operator"
        },
        {
          name: "Manning Washington",
          aNumber: "green-43",
          supervisor: "Palmer Woodward",
          schedule: "2017-05-23T06:15:01 +07:00",
          role: "operator"
        },
        {
          name: "Muriel Perry",
          aNumber: "brown-165",
          supervisor: "Moreno Fisher",
          schedule: "2016-02-14T01:37:51 +07:00",
          role: "operator"
        },
        {
          name: "Pickett Torres",
          aNumber: "green-179",
          supervisor: "Sherrie Salazar",
          schedule: "2017-06-16T05:50:24 +07:00",
          role: "operator"
        },
        {
          name: "Holt Nolan",
          aNumber: "green-177",
          supervisor: "Judy House",
          schedule: "2017-08-10T11:53:01 +07:00",
          role: "operator"
        },
        {
          name: "Keller Crane",
          aNumber: "green-70",
          supervisor: "Oneal Juarez",
          schedule: "2015-02-08T05:03:05 +07:00",
          role: "operator"
        },
        {
          name: "Lyons Clark",
          aNumber: "brown-96",
          supervisor: "Calderon Dalton",
          schedule: "2015-05-16T06:55:36 +07:00",
          role: "operator"
        },
        {
          name: "Benjamin Meyers",
          aNumber: "green-189",
          supervisor: "Rhoda Faulkner",
          schedule: "2019-04-24T11:27:10 +07:00",
          role: "operator"
        },
        {
          name: "Henson Puckett",
          aNumber: "brown-64",
          supervisor: "Avis Manning",
          schedule: "2016-09-26T08:02:23 +07:00",
          role: "operator"
        },
        {
          name: "Laverne Long",
          aNumber: "brown-346",
          supervisor: "Janine Summers",
          schedule: "2014-02-09T09:10:27 +07:00",
          role: "operator"
        },
        {
          name: "Wise Mcfadden",
          aNumber: "blue-153",
          supervisor: "Sally Pollard",
          schedule: "2015-08-26T12:20:16 +07:00",
          role: "operator"
        },
        {
          name: "Lynne Whitley",
          aNumber: "green-337",
          supervisor: "Sanders Schwartz",
          schedule: "2019-04-12T10:00:37 +07:00",
          role: "operator"
        },
        {
          name: "Mindy Ward",
          aNumber: "brown-290",
          supervisor: "Becker Cooper",
          schedule: "2016-10-17T04:57:22 +07:00",
          role: "operator"
        },
        {
          name: "Holloway Scott",
          aNumber: "brown-64",
          supervisor: "Marietta Jones",
          schedule: "2016-05-20T10:21:49 +07:00",
          role: "operator"
        },
        {
          name: "Wade Stout",
          aNumber: "green-187",
          supervisor: "Potts Lane",
          schedule: "2014-06-18T09:47:55 +07:00",
          role: "operator"
        },
        {
          name: "Hale Walton",
          aNumber: "brown-78",
          supervisor: "Yesenia Knowles",
          schedule: "2015-10-16T08:56:50 +07:00",
          role: "operator"
        },
        {
          name: "Inez Brooks",
          aNumber: "brown-27",
          supervisor: "Yang Pennington",
          schedule: "2015-08-20T12:13:38 +07:00",
          role: "operator"
        },
        {
          name: "English Lindsay",
          aNumber: "brown-277",
          supervisor: "Marion Moss",
          schedule: "2017-09-21T07:56:54 +07:00",
          role: "operator"
        },
        {
          name: "Virginia Reid",
          aNumber: "green-77",
          supervisor: "Swanson Bowman",
          schedule: "2016-10-15T12:46:09 +07:00",
          role: "operator"
        },
        {
          name: "Ford Duffy",
          aNumber: "green-155",
          supervisor: "Webster May",
          schedule: "2016-09-13T06:26:53 +07:00",
          role: "operator"
        },
        {
          name: "Colette Roach",
          aNumber: "green-201",
          supervisor: "Gwendolyn Wilson",
          schedule: "2016-12-20T08:26:47 +07:00",
          role: "operator"
        },
        {
          name: "Cotton Mccray",
          aNumber: "blue-107",
          supervisor: "Josephine Willis",
          schedule: "2016-04-20T04:34:53 +07:00",
          role: "operator"
        },
        {
          name: "Rosemary Jensen",
          aNumber: "green-205",
          supervisor: "Miranda Byers",
          schedule: "2018-10-03T08:49:28 +07:00",
          role: "operator"
        },
        {
          name: "Chang Colon",
          aNumber: "brown-331",
          supervisor: "Caldwell Buckner",
          schedule: "2015-11-17T02:23:37 +07:00",
          role: "operator"
        },
        {
          name: "Jeanine Roman",
          aNumber: "green-392",
          supervisor: "Jodie Parsons",
          schedule: "2018-11-10T06:30:43 +07:00",
          role: "operator"
        },
        {
          name: "Compton Bush",
          aNumber: "blue-359",
          supervisor: "Judith Hale",
          schedule: "2017-01-08T08:43:34 +07:00",
          role: "operator"
        },
        {
          name: "Wendy Kennedy",
          aNumber: "blue-243",
          supervisor: "Concetta Webb",
          schedule: "2017-08-17T08:55:05 +07:00",
          role: "operator"
        },
        {
          name: "Hubbard Morris",
          aNumber: "brown-92",
          supervisor: "Wright Bond",
          schedule: "2019-06-14T02:00:43 +07:00",
          role: "operator"
        },
        {
          name: "Meyers Yang",
          aNumber: "blue-223",
          supervisor: "Roth Noble",
          schedule: "2019-02-19T08:18:25 +07:00",
          role: "operator"
        },
        {
          name: "Arnold Barker",
          aNumber: "brown-386",
          supervisor: "Rowena Beach",
          schedule: "2018-02-21T03:04:59 +07:00",
          role: "operator"
        },
        {
          name: "Della Gamble",
          aNumber: "brown-259",
          supervisor: "Darlene Delgado",
          schedule: "2017-12-12T10:56:32 +07:00",
          role: "operator"
        },
        {
          name: "Pena Wilkinson",
          aNumber: "brown-55",
          supervisor: "Elisa Walls",
          schedule: "2018-05-21T10:39:18 +07:00",
          role: "operator"
        },
        {
          name: "Kara Newton",
          aNumber: "blue-169",
          supervisor: "Best Lindsey",
          schedule: "2017-01-16T02:16:36 +07:00",
          role: "operator"
        },
        {
          name: "Rose Calhoun",
          aNumber: "blue-360",
          supervisor: "Mccall Blake",
          schedule: "2017-10-02T07:40:10 +07:00",
          role: "operator"
        },
        {
          name: "Sonya Morin",
          aNumber: "green-195",
          supervisor: "Luella Reynolds",
          schedule: "2015-08-30T10:39:36 +07:00",
          role: "operator"
        },
        {
          name: "Vanessa Jimenez",
          aNumber: "green1",
          supervisor: "Rosario Singleton",
          schedule: "2014-06-06T06:45:46 +07:00",
          role: "operator"
        },
        {
          name: "Edwards Massey",
          aNumber: "green-252",
          supervisor: "Gonzales Sutton",
          schedule: "2016-01-17T04:15:47 +07:00",
          role: "operator"
        },
        {
          name: "Aimee White",
          aNumber: "blue-150",
          supervisor: "Laura Mueller",
          schedule: "2014-02-06T09:38:49 +07:00",
          role: "operator"
        },
        {
          name: "Conner Orr",
          aNumber: "green-104",
          supervisor: "Gail Britt",
          schedule: "2019-10-19T07:39:06 +07:00",
          role: "operator"
        },
        {
          name: "Liliana Buck",
          aNumber: "green-339",
          supervisor: "Jocelyn Foley",
          schedule: "2017-12-21T01:57:24 +07:00",
          role: "operator"
        },
        {
          name: "Pitts Harris",
          aNumber: "green-78",
          supervisor: "Ashley Brady",
          schedule: "2015-07-24T05:14:50 +07:00",
          role: "operator"
        },
        {
          name: "Katharine Townsend",
          aNumber: "brown-34",
          supervisor: "Celina Banks",
          schedule: "2016-06-25T02:34:47 +07:00",
          role: "operator"
        },
        {
          name: "Valencia Obrien",
          aNumber: "green-47",
          supervisor: "Lindsay James",
          schedule: "2017-10-13T06:25:56 +07:00",
          role: "operator"
        },
        {
          name: "Blankenship Estes",
          aNumber: "blue-345",
          supervisor: "Albert Rush",
          schedule: "2015-08-14T11:18:05 +07:00",
          role: "operator"
        },
        {
          name: "Graciela Fitzgerald",
          aNumber: "green-123",
          supervisor: "Garza Key",
          schedule: "2017-07-31T07:09:59 +07:00",
          role: "operator"
        },
        {
          name: "Bentley Cantu",
          aNumber: "green-224",
          supervisor: "Haney Mckenzie",
          schedule: "2019-02-02T07:05:29 +07:00",
          role: "operator"
        },
        {
          name: "Freida Ellis",
          aNumber: "green-197",
          supervisor: "Bauer Fulton",
          schedule: "2015-02-01T03:25:27 +07:00",
          role: "operator"
        },
        {
          name: "Carole Bishop",
          aNumber: "blue-296",
          supervisor: "Mckinney Peterson",
          schedule: "2018-05-28T02:45:38 +07:00",
          role: "operator"
        },
        {
          name: "Velazquez Osborne",
          aNumber: "blue-286",
          supervisor: "Beard Watson",
          schedule: "2018-01-23T01:02:32 +07:00",
          role: "operator"
        },
        {
          name: "Leann Small",
          aNumber: "brown-148",
          supervisor: "Mckay Marquez",
          schedule: "2014-12-26T04:55:29 +07:00",
          role: "operator"
        },
        {
          name: "Kelly Bradley",
          aNumber: "blue-5",
          supervisor: "Mallory Chambers",
          schedule: "2014-09-18T11:46:08 +07:00",
          role: "operator"
        },
        {
          name: "Renee Webster",
          aNumber: "blue-1",
          supervisor: "Terrell Castaneda",
          schedule: "2018-10-08T06:31:43 +07:00",
          role: "operator"
        },
        {
          name: "Donovan Gates",
          aNumber: "green-158",
          supervisor: "Earlene Gutierrez",
          schedule: "2017-08-22T10:19:12 +07:00",
          role: "operator"
        },
        {
          name: "Hamilton Hernandez",
          aNumber: "brown-362",
          supervisor: "Marcie Myers",
          schedule: "2015-07-24T12:44:55 +07:00",
          role: "operator"
        },
        {
          name: "Townsend Justice",
          aNumber: "green-129",
          supervisor: "Simmons Donaldson",
          schedule: "2014-07-10T01:38:09 +07:00",
          role: "operator"
        },
        {
          name: "Carey Petty",
          aNumber: "green-298",
          supervisor: "Miles Burke",
          schedule: "2018-11-07T01:09:04 +07:00",
          role: "operator"
        },
        {
          name: "Bright Ochoa",
          aNumber: "brown-277",
          supervisor: "Marsha Herrera",
          schedule: "2016-12-14T05:13:48 +07:00",
          role: "operator"
        },
        {
          name: "Margie Daugherty",
          aNumber: "green-364",
          supervisor: "Nielsen Rivas",
          schedule: "2018-05-19T01:13:55 +07:00",
          role: "operator"
        },
        {
          name: "Frost Levine",
          aNumber: "green-342",
          supervisor: "Foley Padilla",
          schedule: "2016-09-24T07:25:51 +07:00",
          role: "operator"
        },
        {
          name: "Sellers Jefferson",
          aNumber: "blue-3",
          supervisor: "Pearlie Todd",
          schedule: "2019-09-25T02:19:51 +07:00",
          role: "operator"
        },
        {
          name: "Peters Bennett",
          aNumber: "green-72",
          supervisor: "Estes Lynn",
          schedule: "2017-02-16T08:33:45 +07:00",
          role: "operator"
        },
        {
          name: "Traci Wong",
          aNumber: "green-278",
          supervisor: "Darla Ratliff",
          schedule: "2017-07-29T04:05:58 +07:00",
          role: "operator"
        },
        {
          name: "Willa West",
          aNumber: "blue-203",
          supervisor: "Hudson Hinton",
          schedule: "2016-03-17T08:34:02 +07:00",
          role: "operator"
        },
        {
          name: "Rose Atkins",
          aNumber: "blue-104",
          supervisor: "Fuller Buckley",
          schedule: "2014-03-06T01:49:27 +07:00",
          role: "operator"
        },
        {
          name: "Mcintosh Norman",
          aNumber: "brown-22",
          supervisor: "Erika Workman",
          schedule: "2016-09-26T08:56:07 +07:00",
          role: "operator"
        },
        {
          name: "Sutton Rich",
          aNumber: "brown-130",
          supervisor: "Katina Odom",
          schedule: "2014-01-07T09:26:30 +07:00",
          role: "operator"
        },
        {
          name: "Carlson Christian",
          aNumber: "blue-241",
          supervisor: "Crawford Tucker",
          schedule: "2019-04-16T10:59:44 +07:00",
          role: "operator"
        },
        {
          name: "Pennington Weiss",
          aNumber: "brown-229",
          supervisor: "Cornelia Schroeder",
          schedule: "2019-11-08T07:38:02 +07:00",
          role: "operator"
        },
        {
          name: "Cora Fry",
          aNumber: "brown-396",
          supervisor: "Alta Serrano",
          schedule: "2018-06-27T11:24:34 +07:00",
          role: "operator"
        },
        {
          name: "Carla Livingston",
          aNumber: "green-289",
          supervisor: "Brandy Sanford",
          schedule: "2016-12-28T08:37:45 +07:00",
          role: "operator"
        },
        {
          name: "Lorene Oneil",
          aNumber: "green-175",
          supervisor: "Robinson Dyer",
          schedule: "2018-11-10T08:17:07 +07:00",
          role: "operator"
        },
        {
          name: "Baldwin Morrow",
          aNumber: "blue-193",
          supervisor: "Annette Middleton",
          schedule: "2016-06-23T01:05:56 +07:00",
          role: "operator"
        },
        {
          name: "Lowery Rogers",
          aNumber: "blue-16",
          supervisor: "Lorena Hewitt",
          schedule: "2016-03-09T03:47:18 +07:00",
          role: "operator"
        },
        {
          name: "Hinton Fischer",
          aNumber: "blue-193",
          supervisor: "Madden Frank",
          schedule: "2015-10-27T11:25:53 +07:00",
          role: "operator"
        },
        {
          name: "Porter Holcomb",
          aNumber: "blue-296",
          supervisor: "Scott Burks",
          schedule: "2017-06-11T07:52:24 +07:00",
          role: "operator"
        },
        {
          name: "Branch Cotton",
          aNumber: "green-61",
          supervisor: "Gill Marsh",
          schedule: "2018-04-07T01:42:40 +07:00",
          role: "operator"
        },
        {
          name: "Latisha Boone",
          aNumber: "brown-322",
          supervisor: "Letitia Morton",
          schedule: "2014-12-27T08:17:53 +07:00",
          role: "operator"
        },
        {
          name: "Carver Crawford",
          aNumber: "green-54",
          supervisor: "Cantu Leon",
          schedule: "2018-06-02T07:21:20 +07:00",
          role: "operator"
        },
        {
          name: "Reva Marks",
          aNumber: "green-285",
          supervisor: "Freda Rasmussen",
          schedule: "2015-11-05T12:22:54 +07:00",
          role: "operator"
        },
        {
          name: "Kay Gilliam",
          aNumber: "brown-215",
          supervisor: "Huber Mays",
          schedule: "2015-07-05T03:07:40 +07:00",
          role: "operator"
        },
        {
          name: "Nettie Ortiz",
          aNumber: "blue-139",
          supervisor: "Ellen Durham",
          schedule: "2019-02-24T09:02:12 +07:00",
          role: "operator"
        },
        {
          name: "Romero Dale",
          aNumber: "brown-117",
          supervisor: "Sylvia Riley",
          schedule: "2015-07-31T06:10:19 +07:00",
          role: "operator"
        },
        {
          name: "Ellison Carpenter",
          aNumber: "brown-214",
          supervisor: "Lucy Tyson",
          schedule: "2017-02-13T07:35:19 +07:00",
          role: "operator"
        },
        {
          name: "Katy Morrison",
          aNumber: "brown-373",
          supervisor: "Edwina Galloway",
          schedule: "2017-08-11T04:23:11 +07:00",
          role: "operator"
        },
        {
          name: "Herman Gallegos",
          aNumber: "brown-300",
          supervisor: "Diann Schmidt",
          schedule: "2015-01-01T01:12:59 +07:00",
          role: "operator"
        },
        {
          name: "Collier Mcdaniel",
          aNumber: "green-187",
          supervisor: "Johanna Hanson",
          schedule: "2017-09-21T09:46:43 +07:00",
          role: "operator"
        },
        {
          name: "Moon Lang",
          aNumber: "green-230",
          supervisor: "Cheri Hahn",
          schedule: "2014-06-30T10:03:45 +07:00",
          role: "operator"
        },
        {
          name: "Kemp Ball",
          aNumber: "blue-380",
          supervisor: "Harding Black",
          schedule: "2015-08-18T01:22:07 +07:00",
          role: "operator"
        },
        {
          name: "Abby Wallace",
          aNumber: "brown-107",
          supervisor: "Edna Holland",
          schedule: "2019-11-23T03:30:02 +07:00",
          role: "operator"
        },
        {
          name: "Galloway Barnett",
          aNumber: "blue-267",
          supervisor: "Dawn Keith",
          schedule: "2019-02-28T09:26:27 +07:00",
          role: "operator"
        },
        {
          name: "Jenna Hawkins",
          aNumber: "green-135",
          supervisor: "Deirdre Mooney",
          schedule: "2016-01-02T11:58:16 +07:00",
          role: "operator"
        },
        {
          name: "Hooper Jackson",
          aNumber: "green-383",
          supervisor: "Dotson Hines",
          schedule: "2014-12-08T10:27:08 +07:00",
          role: "operator"
        },
        {
          name: "Burks Wall",
          aNumber: "brown7",
          supervisor: "Latonya Sweet",
          schedule: "2016-11-06T06:55:56 +07:00",
          role: "operator"
        },
        {
          name: "Guthrie Robertson",
          aNumber: "brown-86",
          supervisor: "Beverly Le",
          schedule: "2016-12-15T08:23:41 +07:00",
          role: "operator"
        },
        {
          name: "Rowland Day",
          aNumber: "brown4",
          supervisor: "Smith Howard",
          schedule: "2015-03-02T04:33:08 +07:00",
          role: "operator"
        },
        {
          name: "Russell Goodman",
          aNumber: "green-270",
          supervisor: "Connie Johnson",
          schedule: "2014-07-12T07:54:40 +07:00",
          role: "operator"
        },
        {
          name: "Amalia Patterson",
          aNumber: "green-275",
          supervisor: "Barton Mccarthy",
          schedule: "2018-08-09T11:44:51 +07:00",
          role: "operator"
        },
        {
          name: "Dollie Rivers",
          aNumber: "blue-191",
          supervisor: "Alston Jacobson",
          schedule: "2014-10-26T07:22:16 +07:00",
          role: "operator"
        },
        {
          name: "Gina Barlow",
          aNumber: "blue-393",
          supervisor: "Bryan Cummings",
          schedule: "2016-02-11T12:15:46 +07:00",
          role: "operator"
        },
        {
          name: "Cabrera Moody",
          aNumber: "brown-399",
          supervisor: "Hunt Burns",
          schedule: "2018-10-10T10:01:36 +07:00",
          role: "operator"
        },
        {
          name: "Paige Wright",
          aNumber: "green-59",
          supervisor: "Penelope Salinas",
          schedule: "2016-09-26T11:17:35 +07:00",
          role: "operator"
        },
        {
          name: "Valarie Patton",
          aNumber: "brown-6",
          supervisor: "Mcmahon Morales",
          schedule: "2018-04-16T04:32:03 +07:00",
          role: "operator"
        },
        {
          name: "Tate Craft",
          aNumber: "green-43",
          supervisor: "Tyson Compton",
          schedule: "2015-09-05T04:17:38 +07:00",
          role: "operator"
        },
        {
          name: "Winifred Edwards",
          aNumber: "brown-372",
          supervisor: "Gallagher Mullins",
          schedule: "2019-05-29T12:23:57 +07:00",
          role: "operator"
        },
        {
          name: "Durham Woods",
          aNumber: "brown-201",
          supervisor: "Glass Landry",
          schedule: "2019-06-03T02:26:43 +07:00",
          role: "operator"
        },
        {
          name: "Lopez Hays",
          aNumber: "blue-156",
          supervisor: "Margaret Payne",
          schedule: "2019-05-19T01:56:42 +07:00",
          role: "operator"
        },
        {
          name: "Browning Sullivan",
          aNumber: "brown-262",
          supervisor: "Villarreal Brown",
          schedule: "2014-03-16T04:08:27 +07:00",
          role: "operator"
        },
        {
          name: "Sue Aguilar",
          aNumber: "blue-317",
          supervisor: "Lynn Kramer",
          schedule: "2017-10-09T04:27:36 +07:00",
          role: "operator"
        },
        {
          name: "Randall Oliver",
          aNumber: "brown-153",
          supervisor: "Nieves Barron",
          schedule: "2015-07-04T06:29:08 +07:00",
          role: "operator"
        },
        {
          name: "Joyce Garza",
          aNumber: "blue-335",
          supervisor: "Blanca Curtis",
          schedule: "2018-11-13T12:56:40 +07:00",
          role: "operator"
        },
        {
          name: "Tracey Gregory",
          aNumber: "green-278",
          supervisor: "Stanton Harmon",
          schedule: "2018-03-13T01:57:35 +07:00",
          role: "operator"
        },
        {
          name: "Dolly Wyatt",
          aNumber: "blue-337",
          supervisor: "Chandler Hopkins",
          schedule: "2014-04-15T04:56:21 +07:00",
          role: "operator"
        },
        {
          name: "Vance Klein",
          aNumber: "green-1",
          supervisor: "Bean Mcneil",
          schedule: "2017-03-22T07:13:09 +07:00",
          role: "operator"
        },
        {
          name: "Lesa Travis",
          aNumber: "brown-187",
          supervisor: "Velez Carson",
          schedule: "2016-04-27T07:25:11 +07:00",
          role: "operator"
        },
        {
          name: "Jackie Bass",
          aNumber: "brown-334",
          supervisor: "Odonnell Mccormick",
          schedule: "2017-05-21T10:46:31 +07:00",
          role: "operator"
        },
        {
          name: "Emma Coffey",
          aNumber: "brown-196",
          supervisor: "Bonnie Welch",
          schedule: "2016-04-11T12:36:40 +07:00",
          role: "operator"
        },
        {
          name: "Elba Hogan",
          aNumber: "brown-254",
          supervisor: "Tiffany Kirk",
          schedule: "2014-05-24T06:16:50 +07:00",
          role: "operator"
        },
        {
          name: "Cathy Emerson",
          aNumber: "green-13",
          supervisor: "Berg Erickson",
          schedule: "2017-09-08T12:25:14 +07:00",
          role: "operator"
        },
        {
          name: "Watson Miller",
          aNumber: "blue-386",
          supervisor: "Gwen Mcdowell",
          schedule: "2019-05-29T01:16:43 +07:00",
          role: "operator"
        },
        {
          name: "Howell Gray",
          aNumber: "green-129",
          supervisor: "Solis Mcconnell",
          schedule: "2014-02-10T09:17:14 +07:00",
          role: "operator"
        },
        {
          name: "Carson Ruiz",
          aNumber: "green-387",
          supervisor: "Myrtle Matthews",
          schedule: "2017-07-30T05:05:30 +07:00",
          role: "operator"
        },
        {
          name: "Vinson Mcintosh",
          aNumber: "green-365",
          supervisor: "Martha Walsh",
          schedule: "2018-02-19T07:49:39 +07:00",
          role: "operator"
        },
        {
          name: "Frankie Villarreal",
          aNumber: "green-115",
          supervisor: "Noelle Graham",
          schedule: "2016-07-11T06:08:39 +07:00",
          role: "operator"
        },
        {
          name: "Ruiz Wiley",
          aNumber: "brown-324",
          supervisor: "Gardner Cherry",
          schedule: "2017-06-09T12:09:28 +07:00",
          role: "operator"
        },
        {
          name: "Shepard Lawrence",
          aNumber: "brown-62",
          supervisor: "Hoover Gross",
          schedule: "2018-06-16T03:53:56 +07:00",
          role: "operator"
        },
        {
          name: "Merle Odonnell",
          aNumber: "blue-5",
          supervisor: "Gallegos Richardson",
          schedule: "2015-04-26T06:51:59 +07:00",
          role: "operator"
        },
        {
          name: "Bender Nash",
          aNumber: "green-341",
          supervisor: "Hebert Solis",
          schedule: "2017-12-21T07:17:47 +07:00",
          role: "operator"
        },
        {
          name: "Mcmillan Ingram",
          aNumber: "blue-109",
          supervisor: "Kelly Guerra",
          schedule: "2014-05-30T12:01:09 +07:00",
          role: "operator"
        },
        {
          name: "Deloris Petersen",
          aNumber: "green-325",
          supervisor: "Adeline Lloyd",
          schedule: "2019-04-24T02:44:08 +07:00",
          role: "operator"
        },
        {
          name: "Fran Hebert",
          aNumber: "blue-60",
          supervisor: "Margery Hill",
          schedule: "2018-03-09T04:41:03 +07:00",
          role: "operator"
        },
        {
          name: "Brewer Carlson",
          aNumber: "blue-41",
          supervisor: "John Luna",
          schedule: "2017-06-25T08:08:04 +07:00",
          role: "operator"
        },
        {
          name: "Eileen Campos",
          aNumber: "green-107",
          supervisor: "Hood Castro",
          schedule: "2015-08-23T05:29:48 +07:00",
          role: "operator"
        },
        {
          name: "Roberts Calderon",
          aNumber: "blue-121",
          supervisor: "Savannah Michael",
          schedule: "2017-04-06T06:30:18 +07:00",
          role: "operator"
        },
        {
          name: "Tia Peck",
          aNumber: "brown-377",
          supervisor: "Holman Goff",
          schedule: "2018-09-10T05:32:28 +07:00",
          role: "operator"
        },
        {
          name: "Ronda Holden",
          aNumber: "green-322",
          supervisor: "Karen Burch",
          schedule: "2015-12-31T08:34:21 +07:00",
          role: "operator"
        },
        {
          name: "Hunter Preston",
          aNumber: "brown-224",
          supervisor: "Carr Frederick",
          schedule: "2014-07-22T07:01:39 +07:00",
          role: "operator"
        },
        {
          name: "Davenport Harding",
          aNumber: "blue-363",
          supervisor: "Silvia Russo",
          schedule: "2014-02-20T03:19:10 +07:00",
          role: "operator"
        },
        {
          name: "Carmella Olsen",
          aNumber: "brown-155",
          supervisor: "Kaye Cohen",
          schedule: "2016-01-12T01:47:08 +07:00",
          role: "operator"
        },
        {
          name: "Bernard Strong",
          aNumber: "blue-69",
          supervisor: "Guy Whitney",
          schedule: "2019-10-07T03:44:48 +07:00",
          role: "operator"
        },
        {
          name: "Clarissa Barrett",
          aNumber: "brown-93",
          supervisor: "Lucia Graves",
          schedule: "2019-11-06T01:37:02 +07:00",
          role: "operator"
        },
        {
          name: "Burt Bell",
          aNumber: "green-10",
          supervisor: "Leona Perez",
          schedule: "2015-09-17T11:54:39 +07:00",
          role: "operator"
        },
        {
          name: "Pearl Mendoza",
          aNumber: "green-312",
          supervisor: "Joanne Benjamin",
          schedule: "2017-02-25T01:35:14 +07:00",
          role: "operator"
        },
        {
          name: "Doreen Schultz",
          aNumber: "brown-205",
          supervisor: "Roy Hubbard",
          schedule: "2016-08-16T07:21:43 +07:00",
          role: "operator"
        },
        {
          name: "Lina Owen",
          aNumber: "green-233",
          supervisor: "Carney Parrish",
          schedule: "2018-02-03T09:27:56 +07:00",
          role: "operator"
        },
        {
          name: "Casey Molina",
          aNumber: "green-359",
          supervisor: "Jeanne Gentry",
          schedule: "2015-09-30T11:05:47 +07:00",
          role: "operator"
        },
        {
          name: "Henderson Terrell",
          aNumber: "brown-117",
          supervisor: "Santana Ramirez",
          schedule: "2015-02-16T12:06:57 +07:00",
          role: "operator"
        },
        {
          name: "Roach Gonzales",
          aNumber: "blue-44",
          supervisor: "Tucker Blanchard",
          schedule: "2017-10-11T04:37:58 +07:00",
          role: "operator"
        },
        {
          name: "Barker Charles",
          aNumber: "brown-43",
          supervisor: "Wooten Waters",
          schedule: "2018-01-14T07:42:39 +07:00",
          role: "operator"
        },
        {
          name: "Gordon Cortez",
          aNumber: "brown-184",
          supervisor: "Winnie Shannon",
          schedule: "2019-03-30T05:51:44 +07:00",
          role: "operator"
        },
        {
          name: "Marquez Dawson",
          aNumber: "brown-368",
          supervisor: "Mayra Combs",
          schedule: "2017-12-20T12:00:51 +07:00",
          role: "operator"
        },
        {
          name: "Jolene Beard",
          aNumber: "green-37",
          supervisor: "Sloan Mills",
          schedule: "2015-12-17T05:59:13 +07:00",
          role: "operator"
        },
        {
          name: "Mendoza Madden",
          aNumber: "green-50",
          supervisor: "Ruby Savage",
          schedule: "2019-04-21T05:09:46 +07:00",
          role: "operator"
        },
        {
          name: "Sharp Leach",
          aNumber: "green-143",
          supervisor: "Stokes Noel",
          schedule: "2014-03-10T09:39:29 +07:00",
          role: "operator"
        },
        {
          name: "Maddox Glover",
          aNumber: "blue-52",
          supervisor: "Roberson Flynn",
          schedule: "2018-09-30T11:44:28 +07:00",
          role: "operator"
        },
        {
          name: "Cote England",
          aNumber: "blue-117",
          supervisor: "Meyer Bailey",
          schedule: "2015-02-18T03:51:58 +07:00",
          role: "operator"
        },
        {
          name: "Fulton Solomon",
          aNumber: "brown-298",
          supervisor: "Torres Powers",
          schedule: "2017-06-13T02:00:04 +07:00",
          role: "operator"
        },
        {
          name: "Eunice Stark",
          aNumber: "green-391",
          supervisor: "Angelica Cote",
          schedule: "2015-03-31T04:11:20 +07:00",
          role: "operator"
        },
        {
          name: "Shawn Tyler",
          aNumber: "green-107",
          supervisor: "Corine Schneider",
          schedule: "2016-12-20T04:44:46 +07:00",
          role: "operator"
        },
        {
          name: "Sullivan Huffman",
          aNumber: "blue0",
          supervisor: "Norton Albert",
          schedule: "2019-06-28T07:13:49 +07:00",
          role: "operator"
        },
        {
          name: "Liza Bruce",
          aNumber: "blue-387",
          supervisor: "Coleen Head",
          schedule: "2019-10-18T07:14:32 +07:00",
          role: "operator"
        },
        {
          name: "Jodi Spears",
          aNumber: "blue-95",
          supervisor: "Fay Fox",
          schedule: "2017-11-03T04:29:53 +07:00",
          role: "operator"
        },
        {
          name: "Gabrielle Maldonado",
          aNumber: "brown-9",
          supervisor: "Herminia Fernandez",
          schedule: "2016-10-17T06:12:07 +07:00",
          role: "operator"
        },
        {
          name: "Logan Sykes",
          aNumber: "green-278",
          supervisor: "Caitlin Herring",
          schedule: "2017-04-04T07:13:50 +07:00",
          role: "operator"
        },
        {
          name: "Aida Kane",
          aNumber: "blue-295",
          supervisor: "Brooke Bray",
          schedule: "2016-10-02T08:12:36 +07:00",
          role: "operator"
        },
        {
          name: "Sofia Price",
          aNumber: "green-123",
          supervisor: "Jana Carrillo",
          schedule: "2019-03-01T10:58:36 +07:00",
          role: "operator"
        },
        {
          name: "Mooney Monroe",
          aNumber: "green-342",
          supervisor: "England Merritt",
          schedule: "2018-06-08T03:15:07 +07:00",
          role: "operator"
        },
        {
          name: "Eloise Adkins",
          aNumber: "blue-146",
          supervisor: "Estela Berger",
          schedule: "2019-07-06T01:19:42 +07:00",
          role: "operator"
        },
        {
          name: "Margo Armstrong",
          aNumber: "brown-305",
          supervisor: "Kitty Flowers",
          schedule: "2018-12-14T03:07:01 +07:00",
          role: "operator"
        },
        {
          name: "Mari Lynch",
          aNumber: "blue-10",
          supervisor: "Lynda Lambert",
          schedule: "2014-11-09T06:08:14 +07:00",
          role: "operator"
        },
        {
          name: "Jacklyn Duran",
          aNumber: "blue-5",
          supervisor: "Blackburn Carney",
          schedule: "2016-12-19T11:00:21 +07:00",
          role: "operator"
        },
        {
          name: "Lydia Weaver",
          aNumber: "brown-11",
          supervisor: "Dillard Harper",
          schedule: "2016-11-15T01:54:17 +07:00",
          role: "operator"
        },
        {
          name: "Fernandez Mann",
          aNumber: "brown-82",
          supervisor: "Franco Saunders",
          schedule: "2019-11-20T09:11:40 +07:00",
          role: "operator"
        },
        {
          name: "Fisher Hartman",
          aNumber: "green-316",
          supervisor: "Nola Shepard",
          schedule: "2018-10-31T12:57:44 +07:00",
          role: "operator"
        },
        {
          name: "Nelda Burt",
          aNumber: "blue-169",
          supervisor: "Mccoy Slater",
          schedule: "2014-09-11T04:53:31 +07:00",
          role: "operator"
        },
        {
          name: "Merrill Langley",
          aNumber: "blue-256",
          supervisor: "Hardin Mathews",
          schedule: "2015-06-27T10:08:41 +07:00",
          role: "operator"
        },
        {
          name: "Stein Cannon",
          aNumber: "green-143",
          supervisor: "Aline Andrews",
          schedule: "2017-04-17T08:48:43 +07:00",
          role: "operator"
        },
        {
          name: "Harriett Evans",
          aNumber: "green-7",
          supervisor: "Kathy Watts",
          schedule: "2016-05-29T10:39:20 +07:00",
          role: "operator"
        },
        {
          name: "Lea Wise",
          aNumber: "brown-70",
          supervisor: "Harvey Hayden",
          schedule: "2017-11-29T10:36:16 +07:00",
          role: "operator"
        },
        {
          name: "Farrell Weeks",
          aNumber: "brown-165",
          supervisor: "Dean Ferguson",
          schedule: "2016-09-17T12:37:28 +07:00",
          role: "operator"
        },
        {
          name: "Wolf Salas",
          aNumber: "brown-110",
          supervisor: "Conway Glenn",
          schedule: "2019-04-17T02:12:06 +07:00",
          role: "operator"
        },
        {
          name: "Madelyn Rosales",
          aNumber: "brown-334",
          supervisor: "Allyson Bates",
          schedule: "2016-07-18T09:26:34 +07:00",
          role: "operator"
        },
        {
          name: "Weaver Robles",
          aNumber: "brown-373",
          supervisor: "Deidre Fowler",
          schedule: "2015-10-11T08:40:54 +07:00",
          role: "operator"
        },
        {
          name: "Callie Santiago",
          aNumber: "green-20",
          supervisor: "Hess Rodriguez",
          schedule: "2014-04-29T06:16:35 +07:00",
          role: "operator"
        },
        {
          name: "Nora Blackburn",
          aNumber: "blue-309",
          supervisor: "Lamb Leonard",
          schedule: "2018-07-20T05:41:31 +07:00",
          role: "operator"
        },
        {
          name: "Landry Crosby",
          aNumber: "green-285",
          supervisor: "Zamora Cruz",
          schedule: "2017-08-02T06:25:03 +07:00",
          role: "operator"
        },
        {
          name: "Luann Fields",
          aNumber: "green-336",
          supervisor: "Atkinson Vargas",
          schedule: "2016-07-23T03:20:29 +07:00",
          role: "operator"
        },
        {
          name: "Ida Richmond",
          aNumber: "green-262",
          supervisor: "Violet Newman",
          schedule: "2015-09-10T11:36:33 +07:00",
          role: "operator"
        },
        {
          name: "Aguirre Levy",
          aNumber: "blue8",
          supervisor: "Angelia Barrera",
          schedule: "2015-10-08T01:47:57 +07:00",
          role: "operator"
        },
        {
          name: "Noble Christensen",
          aNumber: "brown-303",
          supervisor: "Trisha Forbes",
          schedule: "2016-10-01T11:09:19 +07:00",
          role: "operator"
        },
        {
          name: "Mamie Tran",
          aNumber: "green-193",
          supervisor: "Jordan Fleming",
          schedule: "2018-09-18T05:28:00 +07:00",
          role: "operator"
        },
        {
          name: "Tamara Holt",
          aNumber: "brown-251",
          supervisor: "Janis Blankenship",
          schedule: "2019-06-26T03:31:51 +07:00",
          role: "operator"
        },
        {
          name: "Witt Montgomery",
          aNumber: "brown-121",
          supervisor: "Henrietta Sandoval",
          schedule: "2018-12-25T04:15:13 +07:00",
          role: "operator"
        },
        {
          name: "Wood Oconnor",
          aNumber: "blue-130",
          supervisor: "Juarez Hendricks",
          schedule: "2018-04-21T09:52:17 +07:00",
          role: "operator"
        },
        {
          name: "Pollard Copeland",
          aNumber: "green-224",
          supervisor: "Rivera Nguyen",
          schedule: "2016-07-14T12:05:33 +07:00",
          role: "operator"
        },
        {
          name: "Aurelia Kelly",
          aNumber: "blue-243",
          supervisor: "Daniel Franco",
          schedule: "2014-09-27T08:00:42 +07:00",
          role: "operator"
        },
        {
          name: "Delgado Pena",
          aNumber: "blue-246",
          supervisor: "Gonzalez Farley",
          schedule: "2016-03-23T11:06:30 +07:00",
          role: "operator"
        },
        {
          name: "Rasmussen Conley",
          aNumber: "brown-48",
          supervisor: "Jimmie William",
          schedule: "2019-02-28T10:19:31 +07:00",
          role: "operator"
        },
        {
          name: "Effie Zimmerman",
          aNumber: "green-204",
          supervisor: "Chelsea Hampton",
          schedule: "2017-04-29T01:49:12 +07:00",
          role: "operator"
        },
        {
          name: "Mathis Boyer",
          aNumber: "green-161",
          supervisor: "Martin Fuentes",
          schedule: "2014-03-14T08:26:31 +07:00",
          role: "operator"
        },
        {
          name: "Weeks Mccall",
          aNumber: "brown-303",
          supervisor: "Day Larson",
          schedule: "2015-05-24T02:13:47 +07:00",
          role: "operator"
        }
      ]);
    });
};
