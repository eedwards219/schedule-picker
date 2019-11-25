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
  return knex("operators")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("operators").insert([
        {
          name: "Krystal Austin",
          serialNumber: "486-brown",
          hireDate: "2008-08-03T04:08:23 +07:00"
        },
        {
          name: "Guthrie Sykes",
          serialNumber: "453-green",
          hireDate: "2015-03-14T05:30:36 +07:00"
        },
        {
          name: "Steele Buchanan",
          serialNumber: "500-brown",
          hireDate: "2008-04-28T01:31:37 +07:00"
        },
        {
          name: "Diaz Wiley",
          serialNumber: "484-green",
          hireDate: "1997-03-17T11:49:35 +07:00"
        },
        {
          name: "Susan Merritt",
          serialNumber: "102-blue",
          hireDate: "2010-03-31T08:20:40 +07:00"
        },
        {
          name: "Marie Cardenas",
          serialNumber: "306-brown",
          hireDate: "2009-07-26T11:13:21 +07:00"
        },
        {
          name: "Aline Gay",
          serialNumber: "259-blue",
          hireDate: "2004-10-27T06:36:20 +07:00"
        },
        {
          name: "Shelton Daugherty",
          serialNumber: "349-brown",
          hireDate: "1994-02-01T09:49:21 +07:00"
        },
        {
          name: "Nicholson Weber",
          serialNumber: "357-brown",
          hireDate: "1995-02-13T07:08:09 +07:00"
        },
        {
          name: "Dorthy Lang",
          serialNumber: "192-brown",
          hireDate: "2013-10-17T04:46:46 +07:00"
        },
        {
          name: "Ana Montgomery",
          serialNumber: "388-green",
          hireDate: "2017-04-27T11:13:35 +07:00"
        },
        {
          name: "Pittman Walsh",
          serialNumber: "76-blue",
          hireDate: "1994-06-06T07:28:11 +07:00"
        },
        {
          name: "Serena Talley",
          serialNumber: "85-blue",
          hireDate: "1996-12-03T02:02:27 +07:00"
        },
        {
          name: "Juanita Mcconnell",
          serialNumber: "482-blue",
          hireDate: "1993-05-02T09:04:56 +07:00"
        },
        {
          name: "Browning Beard",
          serialNumber: "377-brown",
          hireDate: "2011-05-21T08:51:30 +07:00"
        },
        {
          name: "Mccullough Mckinney",
          serialNumber: "364-green",
          hireDate: "1997-04-28T05:38:10 +07:00"
        },
        {
          name: "Charlotte Leach",
          serialNumber: "96-green",
          hireDate: "2018-03-08T12:00:36 +07:00"
        },
        {
          name: "Coleen Burke",
          serialNumber: "272-blue",
          hireDate: "2019-06-10T10:24:19 +07:00"
        },
        {
          name: "Manuela Pittman",
          serialNumber: "253-brown",
          hireDate: "1991-08-04T10:46:00 +07:00"
        },
        {
          name: "Bates Hardin",
          serialNumber: "178-brown",
          hireDate: "1994-01-11T10:55:56 +07:00"
        },
        {
          name: "Howell Richmond",
          serialNumber: "369-green",
          hireDate: "2006-05-15T02:06:18 +07:00"
        },
        {
          name: "Rosalinda Griffith",
          serialNumber: "290-brown",
          hireDate: "2017-11-08T03:06:26 +07:00"
        },
        {
          name: "Ramona Glenn",
          serialNumber: "101-green",
          hireDate: "1990-03-14T01:46:54 +07:00"
        },
        {
          name: "Hopkins Stevenson",
          serialNumber: "416-brown",
          hireDate: "2000-04-23T10:24:17 +07:00"
        },
        {
          name: "Serrano Hamilton",
          serialNumber: "322-green",
          hireDate: "1991-04-16T11:03:40 +07:00"
        },
        {
          name: "Verna Stanley",
          serialNumber: "137-green",
          hireDate: "2018-02-14T12:47:53 +07:00"
        },
        {
          name: "Stephanie Gross",
          serialNumber: "427-green",
          hireDate: "2012-10-20T10:17:49 +07:00"
        },
        {
          name: "Abigail Wyatt",
          serialNumber: "303-brown",
          hireDate: "1992-12-26T11:01:47 +07:00"
        },
        {
          name: "Allison Barber",
          serialNumber: "48-green",
          hireDate: "2015-12-29T08:25:46 +07:00"
        },
        {
          name: "Dorothy Byers",
          serialNumber: "239-blue",
          hireDate: "1990-05-02T08:23:22 +07:00"
        },
        {
          name: "Osborne Conrad",
          serialNumber: "110-blue",
          hireDate: "2004-05-27T01:28:50 +07:00"
        },
        {
          name: "Carla Ramirez",
          serialNumber: "447-brown",
          hireDate: "2017-03-01T01:03:04 +07:00"
        },
        {
          name: "Sweeney Chan",
          serialNumber: "119-blue",
          hireDate: "2015-09-19T05:20:15 +07:00"
        },
        {
          name: "Chavez Snow",
          serialNumber: "362-green",
          hireDate: "2011-05-24T05:09:20 +07:00"
        },
        {
          name: "Chan Bird",
          serialNumber: "189-blue",
          hireDate: "1990-06-10T09:51:39 +07:00"
        },
        {
          name: "Joyce Horton",
          serialNumber: "283-green",
          hireDate: "1998-06-04T03:16:05 +07:00"
        },
        {
          name: "Marsha Steele",
          serialNumber: "238-brown",
          hireDate: "2016-08-28T11:59:27 +07:00"
        },
        {
          name: "Riggs Golden",
          serialNumber: "340-brown",
          hireDate: "1995-05-06T04:54:03 +07:00"
        },
        {
          name: "Holloway Cain",
          serialNumber: "488-brown",
          hireDate: "2012-10-04T03:37:22 +07:00"
        },
        {
          name: "Pacheco Cunningham",
          serialNumber: "325-blue",
          hireDate: "1999-12-11T07:50:52 +07:00"
        },
        {
          name: "Adela Hoffman",
          serialNumber: "39-green",
          hireDate: "1998-05-13T07:32:35 +07:00"
        },
        {
          name: "Dejesus Witt",
          serialNumber: "451-brown",
          hireDate: "1998-01-23T03:57:03 +07:00"
        },
        {
          name: "Villarreal Wiggins",
          serialNumber: "31-green",
          hireDate: "2014-04-18T09:04:28 +07:00"
        },
        {
          name: "Ingram Petty",
          serialNumber: "444-green",
          hireDate: "1996-11-09T08:52:34 +07:00"
        },
        {
          name: "Kim Dunn",
          serialNumber: "341-blue",
          hireDate: "2004-05-19T02:03:59 +07:00"
        },
        {
          name: "Annabelle Glover",
          serialNumber: "51-brown",
          hireDate: "2004-12-18T06:52:16 +07:00"
        },
        {
          name: "Snider Saunders",
          serialNumber: "65-green",
          hireDate: "2001-02-03T02:13:25 +07:00"
        },
        {
          name: "Deloris Shaw",
          serialNumber: "4-brown",
          hireDate: "1995-08-21T04:02:37 +07:00"
        },
        {
          name: "Meghan Wynn",
          serialNumber: "199-brown",
          hireDate: "2006-10-08T09:52:22 +07:00"
        },
        {
          name: "Terra Finley",
          serialNumber: "101-brown",
          hireDate: "2012-11-18T04:36:07 +07:00"
        },
        {
          name: "Lynette Mclean",
          serialNumber: "469-blue",
          hireDate: "1999-05-28T07:25:54 +07:00"
        },
        {
          name: "Jeannie Marks",
          serialNumber: "87-green",
          hireDate: "2008-04-26T06:14:18 +07:00"
        },
        {
          name: "Vanessa Durham",
          serialNumber: "480-brown",
          hireDate: "2002-04-11T10:42:06 +07:00"
        },
        {
          name: "Ballard Pollard",
          serialNumber: "296-green",
          hireDate: "2001-10-27T01:48:15 +07:00"
        },
        {
          name: "Petty Charles",
          serialNumber: "240-green",
          hireDate: "2012-07-29T06:08:09 +07:00"
        },
        {
          name: "Richard Waller",
          serialNumber: "418-blue",
          hireDate: "2008-04-19T05:53:29 +07:00"
        },
        {
          name: "Ashlee Wilson",
          serialNumber: "182-brown",
          hireDate: "1990-06-01T01:47:52 +07:00"
        },
        {
          name: "Mccarthy Rutledge",
          serialNumber: "12-brown",
          hireDate: "2005-09-27T06:50:43 +07:00"
        },
        {
          name: "Carr Bright",
          serialNumber: "102-blue",
          hireDate: "1991-09-09T07:56:15 +07:00"
        },
        {
          name: "Lydia Boyd",
          serialNumber: "194-green",
          hireDate: "2017-08-04T03:04:33 +07:00"
        },
        {
          name: "Bernadette Kline",
          serialNumber: "245-brown",
          hireDate: "1996-06-29T04:06:30 +07:00"
        },
        {
          name: "Chandler Davenport",
          serialNumber: "149-blue",
          hireDate: "1995-06-24T10:18:34 +07:00"
        },
        {
          name: "Rivera Bryant",
          serialNumber: "435-green",
          hireDate: "2006-09-09T11:11:31 +07:00"
        },
        {
          name: "Shauna Bauer",
          serialNumber: "208-green",
          hireDate: "1995-08-25T07:10:42 +07:00"
        },
        {
          name: "Crane Miranda",
          serialNumber: "194-brown",
          hireDate: "2014-10-25T05:33:26 +07:00"
        },
        {
          name: "Hughes Phillips",
          serialNumber: "425-blue",
          hireDate: "1995-10-28T10:48:00 +07:00"
        },
        {
          name: "Clemons Hancock",
          serialNumber: "137-blue",
          hireDate: "1991-10-12T03:44:22 +07:00"
        },
        {
          name: "Wilson Mcintosh",
          serialNumber: "36-brown",
          hireDate: "2010-11-23T05:30:08 +07:00"
        },
        {
          name: "Kristy Sweeney",
          serialNumber: "196-green",
          hireDate: "2009-02-21T03:47:30 +07:00"
        },
        {
          name: "Stevenson Newman",
          serialNumber: "53-blue",
          hireDate: "2011-10-27T05:44:37 +07:00"
        },
        {
          name: "Lucy Russell",
          serialNumber: "214-blue",
          hireDate: "1996-06-28T03:45:11 +07:00"
        },
        {
          name: "Lilia Garrison",
          serialNumber: "168-green",
          hireDate: "1999-06-15T01:55:22 +07:00"
        },
        {
          name: "Smith Conner",
          serialNumber: "123-green",
          hireDate: "2019-04-23T01:43:08 +07:00"
        },
        {
          name: "Danielle Washington",
          serialNumber: "335-blue",
          hireDate: "1991-06-14T07:30:14 +07:00"
        },
        {
          name: "Thomas Olsen",
          serialNumber: "346-green",
          hireDate: "2004-04-26T08:06:22 +07:00"
        },
        {
          name: "Duke Lowe",
          serialNumber: "352-brown",
          hireDate: "1993-09-27T09:28:11 +07:00"
        },
        {
          name: "Sybil Cohen",
          serialNumber: "334-blue",
          hireDate: "2013-11-14T09:20:51 +07:00"
        },
        {
          name: "Shana Dodson",
          serialNumber: "66-blue",
          hireDate: "1990-03-22T06:11:38 +07:00"
        },
        {
          name: "Haynes Carter",
          serialNumber: "149-blue",
          hireDate: "1997-01-15T08:29:32 +07:00"
        },
        {
          name: "Polly House",
          serialNumber: "497-blue",
          hireDate: "2005-05-16T05:00:52 +07:00"
        },
        {
          name: "Addie Jefferson",
          serialNumber: "40-brown",
          hireDate: "2004-07-28T12:49:18 +07:00"
        },
        {
          name: "Patrica Zamora",
          serialNumber: "60-green",
          hireDate: "1996-05-20T08:06:34 +07:00"
        },
        {
          name: "Suarez Huffman",
          serialNumber: "98-green",
          hireDate: "1991-05-16T03:19:09 +07:00"
        },
        {
          name: "Bobbi Rush",
          serialNumber: "450-brown",
          hireDate: "2012-09-29T12:29:27 +07:00"
        },
        {
          name: "Effie Bass",
          serialNumber: "387-blue",
          hireDate: "2007-06-10T03:30:49 +07:00"
        },
        {
          name: "Tran Dean",
          serialNumber: "404-green",
          hireDate: "2016-08-14T07:25:20 +07:00"
        },
        {
          name: "Jodi Burns",
          serialNumber: "265-brown",
          hireDate: "2000-01-30T06:03:49 +07:00"
        },
        {
          name: "Caroline Browning",
          serialNumber: "99-green",
          hireDate: "2013-10-05T12:23:13 +07:00"
        },
        {
          name: "Irma Guzman",
          serialNumber: "286-blue",
          hireDate: "2007-04-09T04:24:05 +07:00"
        },
        {
          name: "Dixon Gray",
          serialNumber: "267-blue",
          hireDate: "2013-01-09T03:17:11 +07:00"
        },
        {
          name: "Robert Foley",
          serialNumber: "239-green",
          hireDate: "2002-05-21T10:29:06 +07:00"
        },
        {
          name: "Holmes Duke",
          serialNumber: "103-brown",
          hireDate: "1999-02-25T12:11:28 +07:00"
        },
        {
          name: "Meredith Herrera",
          serialNumber: "202-green",
          hireDate: "2005-08-31T08:26:23 +07:00"
        },
        {
          name: "Gertrude Ryan",
          serialNumber: "461-blue",
          hireDate: "1997-12-16T01:40:31 +07:00"
        },
        {
          name: "Jocelyn Wilkins",
          serialNumber: "112-brown",
          hireDate: "2010-09-13T12:56:48 +07:00"
        },
        {
          name: "Cecile Guerra",
          serialNumber: "155-green",
          hireDate: "2017-05-15T03:43:13 +07:00"
        },
        {
          name: "Edna Wolf",
          serialNumber: "435-green",
          hireDate: "2006-05-16T12:30:12 +07:00"
        },
        {
          name: "Kirk Bennett",
          serialNumber: "27-blue",
          hireDate: "2016-02-28T03:04:35 +07:00"
        },
        {
          name: "Jeanie Ray",
          serialNumber: "170-blue",
          hireDate: "1993-07-21T02:15:31 +07:00"
        },
        {
          name: "Willis Gould",
          serialNumber: "483-brown",
          hireDate: "2006-07-02T12:32:01 +07:00"
        },
        {
          name: "Patrick Hatfield",
          serialNumber: "345-green",
          hireDate: "1990-03-06T12:39:44 +07:00"
        },
        {
          name: "Carissa Welch",
          serialNumber: "431-blue",
          hireDate: "2019-06-09T03:41:21 +07:00"
        },
        {
          name: "Lara Duran",
          serialNumber: "42-brown",
          hireDate: "2016-12-12T07:10:52 +07:00"
        },
        {
          name: "Puckett Sanchez",
          serialNumber: "260-blue",
          hireDate: "2019-09-02T03:53:45 +07:00"
        },
        {
          name: "Calderon Hardy",
          serialNumber: "319-blue",
          hireDate: "2007-09-21T10:52:08 +07:00"
        },
        {
          name: "Dyer Valdez",
          serialNumber: "58-green",
          hireDate: "2001-05-02T07:15:28 +07:00"
        },
        {
          name: "Beasley Chapman",
          serialNumber: "446-brown",
          hireDate: "1994-09-10T09:18:46 +07:00"
        },
        {
          name: "Knox Gill",
          serialNumber: "73-brown",
          hireDate: "1992-03-24T08:21:55 +07:00"
        },
        {
          name: "Branch Christian",
          serialNumber: "121-brown",
          hireDate: "2017-01-15T09:10:36 +07:00"
        },
        {
          name: "Hale Hanson",
          serialNumber: "260-blue",
          hireDate: "2017-03-10T10:06:36 +07:00"
        },
        {
          name: "Everett Paul",
          serialNumber: "83-brown",
          hireDate: "2012-12-24T10:16:34 +07:00"
        },
        {
          name: "Wendi Strong",
          serialNumber: "436-brown",
          hireDate: "1995-03-22T04:21:54 +07:00"
        },
        {
          name: "Jewell Thornton",
          serialNumber: "376-blue",
          hireDate: "1995-05-02T07:29:56 +07:00"
        },
        {
          name: "Aguirre Callahan",
          serialNumber: "470-brown",
          hireDate: "2008-06-10T12:43:01 +07:00"
        },
        {
          name: "Josephine Bradford",
          serialNumber: "181-blue",
          hireDate: "2005-07-15T03:17:28 +07:00"
        },
        {
          name: "Norman Hensley",
          serialNumber: "427-green",
          hireDate: "1997-07-09T07:41:09 +07:00"
        },
        {
          name: "Ebony Serrano",
          serialNumber: "306-brown",
          hireDate: "2013-06-04T07:53:51 +07:00"
        },
        {
          name: "Erica Wolfe",
          serialNumber: "459-blue",
          hireDate: "1994-09-07T06:45:52 +07:00"
        },
        {
          name: "Gilda Curtis",
          serialNumber: "110-blue",
          hireDate: "2012-02-07T03:31:01 +07:00"
        },
        {
          name: "Avila Trujillo",
          serialNumber: "289-green",
          hireDate: "2000-05-19T07:48:17 +07:00"
        },
        {
          name: "Lenora Camacho",
          serialNumber: "381-green",
          hireDate: "2007-09-08T11:19:32 +07:00"
        },
        {
          name: "Harrison Zimmerman",
          serialNumber: "106-green",
          hireDate: "2014-05-14T08:17:45 +07:00"
        },
        {
          name: "Gomez Whitney",
          serialNumber: "140-blue",
          hireDate: "1992-08-15T10:32:16 +07:00"
        },
        {
          name: "Adrian Warner",
          serialNumber: "65-blue",
          hireDate: "2002-04-28T06:19:29 +07:00"
        },
        {
          name: "Liz Vasquez",
          serialNumber: "491-brown",
          hireDate: "2009-10-07T01:48:24 +07:00"
        },
        {
          name: "Joanna Houston",
          serialNumber: "468-brown",
          hireDate: "1994-03-18T11:03:41 +07:00"
        },
        {
          name: "Genevieve Mays",
          serialNumber: "314-blue",
          hireDate: "2004-11-24T10:55:55 +07:00"
        },
        {
          name: "Olson Soto",
          serialNumber: "31-blue",
          hireDate: "1995-10-24T07:31:08 +07:00"
        },
        {
          name: "Susana Whitley",
          serialNumber: "80-blue",
          hireDate: "1995-07-18T12:40:06 +07:00"
        },
        {
          name: "Sondra Kirkland",
          serialNumber: "369-brown",
          hireDate: "2002-01-22T01:36:43 +07:00"
        },
        {
          name: "Shelly Atkinson",
          serialNumber: "432-green",
          hireDate: "1994-09-30T07:23:19 +07:00"
        },
        {
          name: "Ava Wells",
          serialNumber: "237-blue",
          hireDate: "1997-11-15T01:49:47 +07:00"
        },
        {
          name: "Marian Beasley",
          serialNumber: "187-brown",
          hireDate: "1991-08-29T11:51:04 +07:00"
        },
        {
          name: "Mack Harris",
          serialNumber: "180-blue",
          hireDate: "1991-12-11T10:24:17 +07:00"
        },
        {
          name: "Moses Lindsay",
          serialNumber: "413-green",
          hireDate: "2010-08-12T10:06:41 +07:00"
        },
        {
          name: "Lynda Lee",
          serialNumber: "141-brown",
          hireDate: "2000-10-21T05:17:19 +07:00"
        },
        {
          name: "Sasha Murphy",
          serialNumber: "22-green",
          hireDate: "1991-07-14T06:43:20 +07:00"
        },
        {
          name: "Marci Nunez",
          serialNumber: "267-brown",
          hireDate: "2017-06-22T07:33:13 +07:00"
        },
        {
          name: "Higgins Hurley",
          serialNumber: "112-green",
          hireDate: "2017-12-11T07:16:35 +07:00"
        },
        {
          name: "Johnston Waters",
          serialNumber: "289-blue",
          hireDate: "2000-03-15T02:41:56 +07:00"
        },
        {
          name: "Angelia Rodriguez",
          serialNumber: "473-brown",
          hireDate: "2005-12-29T02:02:00 +07:00"
        },
        {
          name: "Wright Sharp",
          serialNumber: "428-blue",
          hireDate: "2009-06-12T02:42:28 +07:00"
        },
        {
          name: "Knowles Fuller",
          serialNumber: "378-brown",
          hireDate: "2012-05-11T11:00:26 +07:00"
        },
        {
          name: "Virginia Ferrell",
          serialNumber: "404-green",
          hireDate: "2002-08-03T12:09:26 +07:00"
        },
        {
          name: "Molina Gates",
          serialNumber: "242-blue",
          hireDate: "1999-03-27T02:04:51 +07:00"
        },
        {
          name: "Marquita Taylor",
          serialNumber: "495-brown",
          hireDate: "2015-03-29T12:59:48 +07:00"
        },
        {
          name: "Matthews Palmer",
          serialNumber: "498-brown",
          hireDate: "2008-01-03T05:47:23 +07:00"
        },
        {
          name: "April Church",
          serialNumber: "212-brown",
          hireDate: "2004-06-07T05:32:54 +07:00"
        },
        {
          name: "Maxine Hart",
          serialNumber: "169-brown",
          hireDate: "2018-07-15T10:35:16 +07:00"
        },
        {
          name: "Hutchinson Wagner",
          serialNumber: "305-blue",
          hireDate: "1991-06-28T10:41:50 +07:00"
        },
        {
          name: "Castaneda Berger",
          serialNumber: "380-green",
          hireDate: "1996-12-10T06:26:26 +07:00"
        },
        {
          name: "Morris Luna",
          serialNumber: "106-blue",
          hireDate: "2012-09-01T02:27:36 +07:00"
        },
        {
          name: "Josie Peterson",
          serialNumber: "123-brown",
          hireDate: "2002-03-12T01:45:06 +07:00"
        },
        {
          name: "Mercer Knight",
          serialNumber: "94-green",
          hireDate: "1999-06-12T09:58:39 +07:00"
        },
        {
          name: "Warren Gilmore",
          serialNumber: "341-brown",
          hireDate: "2017-03-12T09:08:22 +07:00"
        },
        {
          name: "Evans Ball",
          serialNumber: "430-brown",
          hireDate: "2001-03-08T08:29:45 +07:00"
        },
        {
          name: "Noreen Sears",
          serialNumber: "154-blue",
          hireDate: "2007-03-10T02:57:14 +07:00"
        },
        {
          name: "Maritza Torres",
          serialNumber: "423-brown",
          hireDate: "1995-11-20T03:57:59 +07:00"
        },
        {
          name: "Joan Parsons",
          serialNumber: "307-green",
          hireDate: "2000-06-05T02:18:10 +07:00"
        },
        {
          name: "Singleton Henderson",
          serialNumber: "14-brown",
          hireDate: "2009-08-18T06:01:15 +07:00"
        },
        {
          name: "Regina Hahn",
          serialNumber: "486-blue",
          hireDate: "2014-08-07T02:51:50 +07:00"
        },
        {
          name: "Dillon Weaver",
          serialNumber: "426-brown",
          hireDate: "2011-06-05T02:36:15 +07:00"
        },
        {
          name: "Cecilia Hernandez",
          serialNumber: "55-brown",
          hireDate: "2005-07-02T05:29:51 +07:00"
        },
        {
          name: "Joseph Burt",
          serialNumber: "281-blue",
          hireDate: "1999-09-07T09:50:18 +07:00"
        },
        {
          name: "Blair Gaines",
          serialNumber: "189-brown",
          hireDate: "2015-10-06T09:43:10 +07:00"
        },
        {
          name: "Burgess Blackburn",
          serialNumber: "479-green",
          hireDate: "1995-10-18T11:32:28 +07:00"
        },
        {
          name: "Huffman Oneal",
          serialNumber: "212-blue",
          hireDate: "2007-05-12T02:07:07 +07:00"
        },
        {
          name: "Combs Greer",
          serialNumber: "318-brown",
          hireDate: "1990-01-21T06:17:45 +07:00"
        },
        {
          name: "Mavis Knowles",
          serialNumber: "183-green",
          hireDate: "2014-04-26T01:26:17 +07:00"
        },
        {
          name: "Jenkins Sargent",
          serialNumber: "209-green",
          hireDate: "1993-04-17T02:39:23 +07:00"
        },
        {
          name: "Bertha Jarvis",
          serialNumber: "385-blue",
          hireDate: "2008-05-05T01:20:20 +07:00"
        },
        {
          name: "Jeanine Erickson",
          serialNumber: "57-blue",
          hireDate: "2012-06-26T09:36:47 +07:00"
        },
        {
          name: "Small Robles",
          serialNumber: "171-brown",
          hireDate: "1996-07-17T03:48:17 +07:00"
        },
        {
          name: "Gallegos Becker",
          serialNumber: "130-brown",
          hireDate: "2016-09-08T10:43:40 +07:00"
        },
        {
          name: "Ada Solomon",
          serialNumber: "484-blue",
          hireDate: "2012-09-21T12:57:58 +07:00"
        },
        {
          name: "Carole Mills",
          serialNumber: "233-brown",
          hireDate: "2005-06-13T10:20:42 +07:00"
        },
        {
          name: "Letitia Patel",
          serialNumber: "482-brown",
          hireDate: "1998-12-17T01:16:04 +07:00"
        },
        {
          name: "Teri Sweet",
          serialNumber: "445-brown",
          hireDate: "1991-10-13T01:53:30 +07:00"
        },
        {
          name: "Latonya Hobbs",
          serialNumber: "231-brown",
          hireDate: "2002-03-13T07:32:35 +07:00"
        },
        {
          name: "Delores Mcpherson",
          serialNumber: "466-brown",
          hireDate: "1996-08-20T07:28:55 +07:00"
        },
        {
          name: "Sharron Bender",
          serialNumber: "157-brown",
          hireDate: "1998-02-08T07:18:54 +07:00"
        },
        {
          name: "Shannon Cote",
          serialNumber: "177-blue",
          hireDate: "1997-03-19T01:22:18 +07:00"
        },
        {
          name: "Riley Johnson",
          serialNumber: "102-blue",
          hireDate: "2018-12-08T08:29:34 +07:00"
        },
        {
          name: "Berg Kirby",
          serialNumber: "405-brown",
          hireDate: "2012-06-17T08:34:56 +07:00"
        },
        {
          name: "Lang Hale",
          serialNumber: "87-blue",
          hireDate: "2000-03-02T05:38:51 +07:00"
        },
        {
          name: "Howard Mercer",
          serialNumber: "246-green",
          hireDate: "2013-03-28T09:48:12 +07:00"
        },
        {
          name: "Estelle Gilbert",
          serialNumber: "140-green",
          hireDate: "2008-06-29T09:21:06 +07:00"
        },
        {
          name: "Jennifer Hines",
          serialNumber: "87-green",
          hireDate: "2012-12-25T08:26:19 +07:00"
        },
        {
          name: "Katina Harrell",
          serialNumber: "301-green",
          hireDate: "1992-11-04T10:29:47 +07:00"
        },
        {
          name: "Jody Woods",
          serialNumber: "473-brown",
          hireDate: "2011-06-01T10:17:58 +07:00"
        },
        {
          name: "Camacho Nielsen",
          serialNumber: "244-blue",
          hireDate: "2009-01-09T05:58:50 +07:00"
        },
        {
          name: "Wilcox Villarreal",
          serialNumber: "259-green",
          hireDate: "2006-10-02T02:12:53 +07:00"
        },
        {
          name: "Essie Short",
          serialNumber: "311-green",
          hireDate: "2014-09-18T08:42:57 +07:00"
        },
        {
          name: "Sylvia Rose",
          serialNumber: "235-blue",
          hireDate: "2008-03-21T09:42:37 +07:00"
        },
        {
          name: "Owen Bryan",
          serialNumber: "217-green",
          hireDate: "2019-07-24T12:54:14 +07:00"
        },
        {
          name: "Jamie Mejia",
          serialNumber: "467-blue",
          hireDate: "1997-01-01T09:33:05 +07:00"
        },
        {
          name: "Coffey Calhoun",
          serialNumber: "409-green",
          hireDate: "2002-04-16T02:36:09 +07:00"
        },
        {
          name: "Zamora Duffy",
          serialNumber: "215-brown",
          hireDate: "1991-03-24T07:12:09 +07:00"
        },
        {
          name: "Nolan Valenzuela",
          serialNumber: "226-blue",
          hireDate: "1992-04-18T09:20:54 +07:00"
        },
        {
          name: "Dickerson Moody",
          serialNumber: "288-blue",
          hireDate: "1996-12-17T06:19:56 +07:00"
        }
      ]);
    });
};
