// [
//     '{{repeat(200)}}',
//     {
//       daysOff:  '{{lorem(3, "words")}}',
//        fromHours: '{{integer(0, 24)}}',
//   fromMinutes: '{{integer(0, 60)}}',
//   untilHours: '{{integer(0, 24)}}',
//       untilMinutes: '{{integer(0, 60)}}'}]

exports.seed = function(knex, Promise) {
  return knex("schedules")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("schedules").insert([
        {
          daysOff: "id cillum quis",
          fromHours: 14,
          fromMinutes: 27,
          untilHours: 15,
          untilMinutes: 9
        },
        {
          daysOff: "anim id anim",
          fromHours: 3,
          fromMinutes: 55,
          untilHours: 13,
          untilMinutes: 49
        },
        {
          daysOff: "eu non excepteur",
          fromHours: 15,
          fromMinutes: 34,
          untilHours: 14,
          untilMinutes: 2
        },
        {
          daysOff: "exercitation veniam laboris",
          fromHours: 10,
          fromMinutes: 51,
          untilHours: 21,
          untilMinutes: 11
        },
        {
          daysOff: "adipisicing consectetur voluptate",
          fromHours: 5,
          fromMinutes: 1,
          untilHours: 0,
          untilMinutes: 35
        },
        {
          daysOff: "reprehenderit nulla ut",
          fromHours: 4,
          fromMinutes: 17,
          untilHours: 4,
          untilMinutes: 42
        },
        {
          daysOff: "id magna ad",
          fromHours: 18,
          fromMinutes: 16,
          untilHours: 5,
          untilMinutes: 53
        },
        {
          daysOff: "id culpa consequat",
          fromHours: 9,
          fromMinutes: 54,
          untilHours: 1,
          untilMinutes: 4
        },
        {
          daysOff: "ex tempor aliqua",
          fromHours: 5,
          fromMinutes: 10,
          untilHours: 23,
          untilMinutes: 32
        },
        {
          daysOff: "Lorem dolor excepteur",
          fromHours: 20,
          fromMinutes: 50,
          untilHours: 2,
          untilMinutes: 41
        },
        {
          daysOff: "deserunt ut occaecat",
          fromHours: 16,
          fromMinutes: 13,
          untilHours: 13,
          untilMinutes: 47
        },
        {
          daysOff: "aliqua laborum dolor",
          fromHours: 12,
          fromMinutes: 24,
          untilHours: 13,
          untilMinutes: 34
        },
        {
          daysOff: "nulla consectetur aliqua",
          fromHours: 9,
          fromMinutes: 3,
          untilHours: 8,
          untilMinutes: 49
        },
        {
          daysOff: "enim nisi elit",
          fromHours: 6,
          fromMinutes: 53,
          untilHours: 21,
          untilMinutes: 37
        },
        {
          daysOff: "ullamco do nisi",
          fromHours: 0,
          fromMinutes: 20,
          untilHours: 17,
          untilMinutes: 48
        },
        {
          daysOff: "consequat ut laboris",
          fromHours: 24,
          fromMinutes: 55,
          untilHours: 9,
          untilMinutes: 48
        },
        {
          daysOff: "irure magna duis",
          fromHours: 18,
          fromMinutes: 44,
          untilHours: 1,
          untilMinutes: 49
        },
        {
          daysOff: "voluptate mollit eiusmod",
          fromHours: 19,
          fromMinutes: 24,
          untilHours: 9,
          untilMinutes: 26
        },
        {
          daysOff: "eu magna reprehenderit",
          fromHours: 13,
          fromMinutes: 22,
          untilHours: 1,
          untilMinutes: 39
        },
        {
          daysOff: "excepteur ad reprehenderit",
          fromHours: 18,
          fromMinutes: 53,
          untilHours: 9,
          untilMinutes: 44
        },
        {
          daysOff: "eiusmod ullamco labore",
          fromHours: 24,
          fromMinutes: 1,
          untilHours: 11,
          untilMinutes: 1
        },
        {
          daysOff: "ipsum eu magna",
          fromHours: 15,
          fromMinutes: 8,
          untilHours: 17,
          untilMinutes: 14
        },
        {
          daysOff: "ullamco quis do",
          fromHours: 9,
          fromMinutes: 37,
          untilHours: 23,
          untilMinutes: 4
        },
        {
          daysOff: "pariatur elit ex",
          fromHours: 18,
          fromMinutes: 4,
          untilHours: 22,
          untilMinutes: 7
        },
        {
          daysOff: "duis proident magna",
          fromHours: 17,
          fromMinutes: 20,
          untilHours: 1,
          untilMinutes: 12
        },
        {
          daysOff: "ipsum sit nisi",
          fromHours: 24,
          fromMinutes: 20,
          untilHours: 22,
          untilMinutes: 4
        },
        {
          daysOff: "ad occaecat nisi",
          fromHours: 11,
          fromMinutes: 45,
          untilHours: 14,
          untilMinutes: 30
        },
        {
          daysOff: "eu magna Lorem",
          fromHours: 16,
          fromMinutes: 50,
          untilHours: 14,
          untilMinutes: 41
        },
        {
          daysOff: "fugiat do et",
          fromHours: 14,
          fromMinutes: 27,
          untilHours: 10,
          untilMinutes: 43
        },
        {
          daysOff: "tempor nulla aliquip",
          fromHours: 15,
          fromMinutes: 24,
          untilHours: 15,
          untilMinutes: 26
        },
        {
          daysOff: "excepteur Lorem incididunt",
          fromHours: 6,
          fromMinutes: 12,
          untilHours: 13,
          untilMinutes: 30
        },
        {
          daysOff: "amet magna in",
          fromHours: 18,
          fromMinutes: 58,
          untilHours: 13,
          untilMinutes: 14
        },
        {
          daysOff: "et pariatur eiusmod",
          fromHours: 10,
          fromMinutes: 25,
          untilHours: 20,
          untilMinutes: 58
        },
        {
          daysOff: "laboris voluptate id",
          fromHours: 19,
          fromMinutes: 36,
          untilHours: 4,
          untilMinutes: 43
        },
        {
          daysOff: "ipsum ullamco elit",
          fromHours: 7,
          fromMinutes: 5,
          untilHours: 9,
          untilMinutes: 58
        },
        {
          daysOff: "esse laborum sit",
          fromHours: 17,
          fromMinutes: 44,
          untilHours: 13,
          untilMinutes: 5
        },
        {
          daysOff: "minim quis exercitation",
          fromHours: 4,
          fromMinutes: 36,
          untilHours: 13,
          untilMinutes: 58
        },
        {
          daysOff: "labore id non",
          fromHours: 15,
          fromMinutes: 30,
          untilHours: 5,
          untilMinutes: 25
        },
        {
          daysOff: "amet ullamco qui",
          fromHours: 10,
          fromMinutes: 9,
          untilHours: 4,
          untilMinutes: 28
        },
        {
          daysOff: "pariatur do ipsum",
          fromHours: 15,
          fromMinutes: 27,
          untilHours: 19,
          untilMinutes: 57
        },
        {
          daysOff: "eu id sunt",
          fromHours: 15,
          fromMinutes: 50,
          untilHours: 3,
          untilMinutes: 59
        },
        {
          daysOff: "aliquip magna aliquip",
          fromHours: 0,
          fromMinutes: 24,
          untilHours: 6,
          untilMinutes: 49
        },
        {
          daysOff: "in dolore aliquip",
          fromHours: 20,
          fromMinutes: 11,
          untilHours: 15,
          untilMinutes: 54
        },
        {
          daysOff: "consectetur amet est",
          fromHours: 12,
          fromMinutes: 59,
          untilHours: 8,
          untilMinutes: 57
        },
        {
          daysOff: "in fugiat ut",
          fromHours: 9,
          fromMinutes: 10,
          untilHours: 4,
          untilMinutes: 8
        },
        {
          daysOff: "consectetur dolore sunt",
          fromHours: 19,
          fromMinutes: 35,
          untilHours: 22,
          untilMinutes: 60
        },
        {
          daysOff: "aliqua amet mollit",
          fromHours: 7,
          fromMinutes: 52,
          untilHours: 1,
          untilMinutes: 40
        },
        {
          daysOff: "consequat cupidatat velit",
          fromHours: 22,
          fromMinutes: 26,
          untilHours: 5,
          untilMinutes: 39
        },
        {
          daysOff: "adipisicing ullamco voluptate",
          fromHours: 14,
          fromMinutes: 43,
          untilHours: 13,
          untilMinutes: 54
        },
        {
          daysOff: "eu cillum laboris",
          fromHours: 16,
          fromMinutes: 21,
          untilHours: 18,
          untilMinutes: 9
        },
        {
          daysOff: "nulla occaecat reprehenderit",
          fromHours: 16,
          fromMinutes: 53,
          untilHours: 22,
          untilMinutes: 22
        },
        {
          daysOff: "laborum qui laboris",
          fromHours: 0,
          fromMinutes: 45,
          untilHours: 2,
          untilMinutes: 57
        },
        {
          daysOff: "amet et duis",
          fromHours: 22,
          fromMinutes: 60,
          untilHours: 1,
          untilMinutes: 13
        },
        {
          daysOff: "in mollit ullamco",
          fromHours: 16,
          fromMinutes: 58,
          untilHours: 11,
          untilMinutes: 4
        },
        {
          daysOff: "nisi laborum esse",
          fromHours: 11,
          fromMinutes: 53,
          untilHours: 4,
          untilMinutes: 15
        },
        {
          daysOff: "nostrud nisi occaecat",
          fromHours: 2,
          fromMinutes: 0,
          untilHours: 13,
          untilMinutes: 56
        },
        {
          daysOff: "dolore adipisicing eu",
          fromHours: 24,
          fromMinutes: 54,
          untilHours: 21,
          untilMinutes: 15
        },
        {
          daysOff: "laboris dolore mollit",
          fromHours: 16,
          fromMinutes: 60,
          untilHours: 20,
          untilMinutes: 47
        },
        {
          daysOff: "aute non deserunt",
          fromHours: 1,
          fromMinutes: 40,
          untilHours: 12,
          untilMinutes: 14
        },
        {
          daysOff: "velit nulla laborum",
          fromHours: 18,
          fromMinutes: 41,
          untilHours: 1,
          untilMinutes: 36
        },
        {
          daysOff: "Lorem ut aliquip",
          fromHours: 14,
          fromMinutes: 29,
          untilHours: 14,
          untilMinutes: 12
        },
        {
          daysOff: "amet sunt anim",
          fromHours: 24,
          fromMinutes: 29,
          untilHours: 12,
          untilMinutes: 10
        },
        {
          daysOff: "labore exercitation reprehenderit",
          fromHours: 20,
          fromMinutes: 24,
          untilHours: 4,
          untilMinutes: 9
        },
        {
          daysOff: "non est esse",
          fromHours: 3,
          fromMinutes: 34,
          untilHours: 22,
          untilMinutes: 32
        },
        {
          daysOff: "dolor anim incididunt",
          fromHours: 1,
          fromMinutes: 42,
          untilHours: 1,
          untilMinutes: 16
        },
        {
          daysOff: "consequat mollit deserunt",
          fromHours: 18,
          fromMinutes: 6,
          untilHours: 9,
          untilMinutes: 11
        },
        {
          daysOff: "dolor enim elit",
          fromHours: 19,
          fromMinutes: 60,
          untilHours: 23,
          untilMinutes: 22
        },
        {
          daysOff: "irure amet mollit",
          fromHours: 16,
          fromMinutes: 28,
          untilHours: 15,
          untilMinutes: 15
        },
        {
          daysOff: "consequat consectetur ullamco",
          fromHours: 18,
          fromMinutes: 18,
          untilHours: 18,
          untilMinutes: 29
        },
        {
          daysOff: "aute et fugiat",
          fromHours: 12,
          fromMinutes: 48,
          untilHours: 9,
          untilMinutes: 18
        },
        {
          daysOff: "eu est ad",
          fromHours: 16,
          fromMinutes: 54,
          untilHours: 22,
          untilMinutes: 60
        },
        {
          daysOff: "eu ut cupidatat",
          fromHours: 5,
          fromMinutes: 60,
          untilHours: 13,
          untilMinutes: 28
        },
        {
          daysOff: "labore minim pariatur",
          fromHours: 21,
          fromMinutes: 24,
          untilHours: 11,
          untilMinutes: 17
        },
        {
          daysOff: "elit cillum consectetur",
          fromHours: 19,
          fromMinutes: 48,
          untilHours: 5,
          untilMinutes: 60
        },
        {
          daysOff: "duis sunt fugiat",
          fromHours: 10,
          fromMinutes: 1,
          untilHours: 18,
          untilMinutes: 50
        },
        {
          daysOff: "irure excepteur mollit",
          fromHours: 24,
          fromMinutes: 17,
          untilHours: 17,
          untilMinutes: 1
        },
        {
          daysOff: "non aliqua aute",
          fromHours: 22,
          fromMinutes: 35,
          untilHours: 0,
          untilMinutes: 34
        },
        {
          daysOff: "ex nulla ut",
          fromHours: 23,
          fromMinutes: 50,
          untilHours: 11,
          untilMinutes: 21
        },
        {
          daysOff: "consectetur exercitation exercitation",
          fromHours: 8,
          fromMinutes: 36,
          untilHours: 0,
          untilMinutes: 12
        },
        {
          daysOff: "eiusmod culpa laboris",
          fromHours: 11,
          fromMinutes: 52,
          untilHours: 20,
          untilMinutes: 21
        },
        {
          daysOff: "dolor occaecat consequat",
          fromHours: 16,
          fromMinutes: 26,
          untilHours: 24,
          untilMinutes: 13
        },
        {
          daysOff: "est laboris nostrud",
          fromHours: 5,
          fromMinutes: 3,
          untilHours: 17,
          untilMinutes: 5
        },
        {
          daysOff: "qui non nisi",
          fromHours: 6,
          fromMinutes: 23,
          untilHours: 8,
          untilMinutes: 26
        },
        {
          daysOff: "aute aute sit",
          fromHours: 3,
          fromMinutes: 38,
          untilHours: 11,
          untilMinutes: 14
        },
        {
          daysOff: "sint amet quis",
          fromHours: 19,
          fromMinutes: 50,
          untilHours: 9,
          untilMinutes: 60
        },
        {
          daysOff: "dolor cupidatat velit",
          fromHours: 3,
          fromMinutes: 35,
          untilHours: 11,
          untilMinutes: 15
        },
        {
          daysOff: "aute cupidatat cillum",
          fromHours: 15,
          fromMinutes: 3,
          untilHours: 22,
          untilMinutes: 16
        },
        {
          daysOff: "qui eu ullamco",
          fromHours: 24,
          fromMinutes: 57,
          untilHours: 5,
          untilMinutes: 27
        },
        {
          daysOff: "deserunt occaecat ea",
          fromHours: 20,
          fromMinutes: 35,
          untilHours: 16,
          untilMinutes: 6
        },
        {
          daysOff: "adipisicing nulla excepteur",
          fromHours: 4,
          fromMinutes: 10,
          untilHours: 19,
          untilMinutes: 45
        },
        {
          daysOff: "ullamco commodo aliqua",
          fromHours: 12,
          fromMinutes: 47,
          untilHours: 21,
          untilMinutes: 22
        },
        {
          daysOff: "laboris culpa sint",
          fromHours: 20,
          fromMinutes: 6,
          untilHours: 24,
          untilMinutes: 19
        },
        {
          daysOff: "anim laborum labore",
          fromHours: 11,
          fromMinutes: 4,
          untilHours: 21,
          untilMinutes: 54
        },
        {
          daysOff: "mollit in quis",
          fromHours: 10,
          fromMinutes: 44,
          untilHours: 16,
          untilMinutes: 49
        },
        {
          daysOff: "nulla do enim",
          fromHours: 21,
          fromMinutes: 3,
          untilHours: 17,
          untilMinutes: 17
        },
        {
          daysOff: "ad ad id",
          fromHours: 10,
          fromMinutes: 5,
          untilHours: 3,
          untilMinutes: 0
        },
        {
          daysOff: "duis occaecat labore",
          fromHours: 18,
          fromMinutes: 31,
          untilHours: 3,
          untilMinutes: 30
        },
        {
          daysOff: "sint non laborum",
          fromHours: 8,
          fromMinutes: 46,
          untilHours: 8,
          untilMinutes: 60
        },
        {
          daysOff: "non do consequat",
          fromHours: 17,
          fromMinutes: 51,
          untilHours: 11,
          untilMinutes: 2
        },
        {
          daysOff: "voluptate sit laborum",
          fromHours: 3,
          fromMinutes: 50,
          untilHours: 15,
          untilMinutes: 56
        },
        {
          daysOff: "velit cillum elit",
          fromHours: 16,
          fromMinutes: 10,
          untilHours: 0,
          untilMinutes: 55
        },
        {
          daysOff: "minim quis consectetur",
          fromHours: 1,
          fromMinutes: 35,
          untilHours: 11,
          untilMinutes: 59
        },
        {
          daysOff: "aliquip consequat esse",
          fromHours: 16,
          fromMinutes: 40,
          untilHours: 5,
          untilMinutes: 57
        },
        {
          daysOff: "excepteur cupidatat pariatur",
          fromHours: 7,
          fromMinutes: 39,
          untilHours: 13,
          untilMinutes: 55
        },
        {
          daysOff: "excepteur dolore mollit",
          fromHours: 0,
          fromMinutes: 10,
          untilHours: 1,
          untilMinutes: 44
        },
        {
          daysOff: "aliquip veniam qui",
          fromHours: 20,
          fromMinutes: 16,
          untilHours: 15,
          untilMinutes: 28
        },
        {
          daysOff: "est eu consequat",
          fromHours: 8,
          fromMinutes: 13,
          untilHours: 5,
          untilMinutes: 42
        },
        {
          daysOff: "tempor cupidatat quis",
          fromHours: 1,
          fromMinutes: 20,
          untilHours: 3,
          untilMinutes: 17
        },
        {
          daysOff: "quis consectetur nisi",
          fromHours: 11,
          fromMinutes: 31,
          untilHours: 3,
          untilMinutes: 16
        },
        {
          daysOff: "qui consectetur adipisicing",
          fromHours: 24,
          fromMinutes: 57,
          untilHours: 17,
          untilMinutes: 18
        },
        {
          daysOff: "non nisi commodo",
          fromHours: 0,
          fromMinutes: 16,
          untilHours: 14,
          untilMinutes: 30
        },
        {
          daysOff: "proident deserunt esse",
          fromHours: 3,
          fromMinutes: 7,
          untilHours: 14,
          untilMinutes: 39
        },
        {
          daysOff: "laborum anim do",
          fromHours: 8,
          fromMinutes: 3,
          untilHours: 9,
          untilMinutes: 60
        },
        {
          daysOff: "aute qui irure",
          fromHours: 14,
          fromMinutes: 1,
          untilHours: 0,
          untilMinutes: 51
        },
        {
          daysOff: "consectetur incididunt veniam",
          fromHours: 19,
          fromMinutes: 21,
          untilHours: 4,
          untilMinutes: 58
        },
        {
          daysOff: "commodo nisi exercitation",
          fromHours: 9,
          fromMinutes: 55,
          untilHours: 13,
          untilMinutes: 25
        },
        {
          daysOff: "commodo quis ut",
          fromHours: 21,
          fromMinutes: 43,
          untilHours: 18,
          untilMinutes: 5
        },
        {
          daysOff: "proident duis laborum",
          fromHours: 0,
          fromMinutes: 31,
          untilHours: 12,
          untilMinutes: 27
        },
        {
          daysOff: "culpa pariatur tempor",
          fromHours: 9,
          fromMinutes: 4,
          untilHours: 15,
          untilMinutes: 44
        },
        {
          daysOff: "esse voluptate sint",
          fromHours: 1,
          fromMinutes: 53,
          untilHours: 4,
          untilMinutes: 29
        },
        {
          daysOff: "duis exercitation fugiat",
          fromHours: 7,
          fromMinutes: 10,
          untilHours: 0,
          untilMinutes: 2
        },
        {
          daysOff: "mollit tempor elit",
          fromHours: 24,
          fromMinutes: 6,
          untilHours: 14,
          untilMinutes: 8
        },
        {
          daysOff: "aute officia magna",
          fromHours: 15,
          fromMinutes: 24,
          untilHours: 6,
          untilMinutes: 20
        },
        {
          daysOff: "adipisicing est mollit",
          fromHours: 13,
          fromMinutes: 4,
          untilHours: 19,
          untilMinutes: 0
        },
        {
          daysOff: "tempor excepteur esse",
          fromHours: 19,
          fromMinutes: 32,
          untilHours: 22,
          untilMinutes: 11
        },
        {
          daysOff: "nulla esse id",
          fromHours: 11,
          fromMinutes: 44,
          untilHours: 23,
          untilMinutes: 2
        },
        {
          daysOff: "sunt eu commodo",
          fromHours: 5,
          fromMinutes: 11,
          untilHours: 6,
          untilMinutes: 55
        },
        {
          daysOff: "duis ullamco laboris",
          fromHours: 5,
          fromMinutes: 11,
          untilHours: 19,
          untilMinutes: 41
        },
        {
          daysOff: "anim ad labore",
          fromHours: 3,
          fromMinutes: 24,
          untilHours: 4,
          untilMinutes: 30
        },
        {
          daysOff: "ea aliquip sit",
          fromHours: 5,
          fromMinutes: 24,
          untilHours: 6,
          untilMinutes: 13
        },
        {
          daysOff: "non qui cupidatat",
          fromHours: 1,
          fromMinutes: 31,
          untilHours: 2,
          untilMinutes: 47
        },
        {
          daysOff: "tempor ipsum cillum",
          fromHours: 7,
          fromMinutes: 33,
          untilHours: 12,
          untilMinutes: 10
        },
        {
          daysOff: "proident magna officia",
          fromHours: 24,
          fromMinutes: 1,
          untilHours: 6,
          untilMinutes: 53
        },
        {
          daysOff: "sit commodo est",
          fromHours: 13,
          fromMinutes: 35,
          untilHours: 13,
          untilMinutes: 20
        },
        {
          daysOff: "mollit ad deserunt",
          fromHours: 14,
          fromMinutes: 6,
          untilHours: 1,
          untilMinutes: 56
        },
        {
          daysOff: "quis non ullamco",
          fromHours: 9,
          fromMinutes: 8,
          untilHours: 13,
          untilMinutes: 9
        },
        {
          daysOff: "adipisicing eu officia",
          fromHours: 24,
          fromMinutes: 47,
          untilHours: 13,
          untilMinutes: 53
        },
        {
          daysOff: "laboris ut anim",
          fromHours: 24,
          fromMinutes: 51,
          untilHours: 6,
          untilMinutes: 29
        },
        {
          daysOff: "ullamco dolor magna",
          fromHours: 19,
          fromMinutes: 40,
          untilHours: 6,
          untilMinutes: 53
        },
        {
          daysOff: "officia dolor aliquip",
          fromHours: 24,
          fromMinutes: 35,
          untilHours: 17,
          untilMinutes: 57
        },
        {
          daysOff: "pariatur ipsum magna",
          fromHours: 5,
          fromMinutes: 57,
          untilHours: 9,
          untilMinutes: 55
        },
        {
          daysOff: "officia sint pariatur",
          fromHours: 13,
          fromMinutes: 34,
          untilHours: 10,
          untilMinutes: 3
        },
        {
          daysOff: "dolore laboris nisi",
          fromHours: 20,
          fromMinutes: 59,
          untilHours: 23,
          untilMinutes: 43
        },
        {
          daysOff: "pariatur veniam nulla",
          fromHours: 18,
          fromMinutes: 40,
          untilHours: 5,
          untilMinutes: 3
        },
        {
          daysOff: "esse exercitation qui",
          fromHours: 2,
          fromMinutes: 9,
          untilHours: 0,
          untilMinutes: 54
        },
        {
          daysOff: "labore quis amet",
          fromHours: 15,
          fromMinutes: 16,
          untilHours: 15,
          untilMinutes: 36
        },
        {
          daysOff: "esse nulla fugiat",
          fromHours: 9,
          fromMinutes: 13,
          untilHours: 7,
          untilMinutes: 51
        },
        {
          daysOff: "veniam culpa duis",
          fromHours: 11,
          fromMinutes: 27,
          untilHours: 5,
          untilMinutes: 9
        },
        {
          daysOff: "officia qui consequat",
          fromHours: 18,
          fromMinutes: 18,
          untilHours: 1,
          untilMinutes: 27
        },
        {
          daysOff: "fugiat dolor incididunt",
          fromHours: 6,
          fromMinutes: 60,
          untilHours: 4,
          untilMinutes: 59
        },
        {
          daysOff: "commodo quis aute",
          fromHours: 13,
          fromMinutes: 43,
          untilHours: 2,
          untilMinutes: 19
        },
        {
          daysOff: "minim velit tempor",
          fromHours: 2,
          fromMinutes: 21,
          untilHours: 2,
          untilMinutes: 43
        },
        {
          daysOff: "magna proident ad",
          fromHours: 8,
          fromMinutes: 44,
          untilHours: 7,
          untilMinutes: 32
        },
        {
          daysOff: "non dolor proident",
          fromHours: 12,
          fromMinutes: 36,
          untilHours: 3,
          untilMinutes: 47
        },
        {
          daysOff: "in duis in",
          fromHours: 11,
          fromMinutes: 57,
          untilHours: 13,
          untilMinutes: 57
        },
        {
          daysOff: "dolor enim enim",
          fromHours: 19,
          fromMinutes: 55,
          untilHours: 2,
          untilMinutes: 44
        },
        {
          daysOff: "tempor mollit veniam",
          fromHours: 0,
          fromMinutes: 35,
          untilHours: 12,
          untilMinutes: 11
        },
        {
          daysOff: "cupidatat velit Lorem",
          fromHours: 7,
          fromMinutes: 5,
          untilHours: 12,
          untilMinutes: 34
        },
        {
          daysOff: "dolore mollit duis",
          fromHours: 17,
          fromMinutes: 1,
          untilHours: 23,
          untilMinutes: 47
        },
        {
          daysOff: "duis minim culpa",
          fromHours: 6,
          fromMinutes: 16,
          untilHours: 22,
          untilMinutes: 27
        },
        {
          daysOff: "quis dolore consequat",
          fromHours: 8,
          fromMinutes: 52,
          untilHours: 16,
          untilMinutes: 39
        },
        {
          daysOff: "aliquip ea sit",
          fromHours: 17,
          fromMinutes: 12,
          untilHours: 6,
          untilMinutes: 21
        },
        {
          daysOff: "esse laboris consectetur",
          fromHours: 14,
          fromMinutes: 31,
          untilHours: 12,
          untilMinutes: 5
        },
        {
          daysOff: "aliqua ipsum mollit",
          fromHours: 1,
          fromMinutes: 11,
          untilHours: 9,
          untilMinutes: 14
        },
        {
          daysOff: "duis aute sit",
          fromHours: 23,
          fromMinutes: 32,
          untilHours: 23,
          untilMinutes: 27
        },
        {
          daysOff: "consectetur esse ullamco",
          fromHours: 17,
          fromMinutes: 60,
          untilHours: 1,
          untilMinutes: 54
        },
        {
          daysOff: "sunt cillum enim",
          fromHours: 5,
          fromMinutes: 33,
          untilHours: 15,
          untilMinutes: 17
        },
        {
          daysOff: "adipisicing id minim",
          fromHours: 11,
          fromMinutes: 20,
          untilHours: 1,
          untilMinutes: 54
        },
        {
          daysOff: "aliqua enim qui",
          fromHours: 8,
          fromMinutes: 8,
          untilHours: 14,
          untilMinutes: 60
        },
        {
          daysOff: "ut deserunt anim",
          fromHours: 8,
          fromMinutes: 1,
          untilHours: 4,
          untilMinutes: 10
        },
        {
          daysOff: "elit aliqua do",
          fromHours: 2,
          fromMinutes: 54,
          untilHours: 22,
          untilMinutes: 17
        },
        {
          daysOff: "eu dolore et",
          fromHours: 24,
          fromMinutes: 13,
          untilHours: 5,
          untilMinutes: 19
        },
        {
          daysOff: "commodo laborum ex",
          fromHours: 9,
          fromMinutes: 37,
          untilHours: 3,
          untilMinutes: 8
        },
        {
          daysOff: "excepteur mollit ad",
          fromHours: 0,
          fromMinutes: 36,
          untilHours: 9,
          untilMinutes: 59
        },
        {
          daysOff: "reprehenderit consequat nisi",
          fromHours: 14,
          fromMinutes: 40,
          untilHours: 17,
          untilMinutes: 36
        },
        {
          daysOff: "enim sit cupidatat",
          fromHours: 10,
          fromMinutes: 40,
          untilHours: 1,
          untilMinutes: 32
        },
        {
          daysOff: "est aute laborum",
          fromHours: 14,
          fromMinutes: 24,
          untilHours: 10,
          untilMinutes: 28
        },
        {
          daysOff: "dolore amet dolor",
          fromHours: 3,
          fromMinutes: 32,
          untilHours: 18,
          untilMinutes: 57
        },
        {
          daysOff: "et consectetur exercitation",
          fromHours: 4,
          fromMinutes: 0,
          untilHours: 16,
          untilMinutes: 29
        },
        {
          daysOff: "do laboris labore",
          fromHours: 19,
          fromMinutes: 7,
          untilHours: 24,
          untilMinutes: 33
        },
        {
          daysOff: "esse aliqua commodo",
          fromHours: 16,
          fromMinutes: 59,
          untilHours: 0,
          untilMinutes: 47
        },
        {
          daysOff: "incididunt aliquip sit",
          fromHours: 20,
          fromMinutes: 14,
          untilHours: 23,
          untilMinutes: 48
        },
        {
          daysOff: "veniam mollit amet",
          fromHours: 2,
          fromMinutes: 48,
          untilHours: 4,
          untilMinutes: 17
        },
        {
          daysOff: "anim est excepteur",
          fromHours: 3,
          fromMinutes: 18,
          untilHours: 6,
          untilMinutes: 55
        },
        {
          daysOff: "nulla aliqua cupidatat",
          fromHours: 22,
          fromMinutes: 22,
          untilHours: 19,
          untilMinutes: 27
        },
        {
          daysOff: "duis labore duis",
          fromHours: 1,
          fromMinutes: 0,
          untilHours: 20,
          untilMinutes: 9
        },
        {
          daysOff: "cillum sunt nisi",
          fromHours: 11,
          fromMinutes: 34,
          untilHours: 10,
          untilMinutes: 47
        },
        {
          daysOff: "ea ut occaecat",
          fromHours: 23,
          fromMinutes: 35,
          untilHours: 10,
          untilMinutes: 16
        },
        {
          daysOff: "dolor velit nulla",
          fromHours: 12,
          fromMinutes: 25,
          untilHours: 3,
          untilMinutes: 23
        },
        {
          daysOff: "laboris proident excepteur",
          fromHours: 11,
          fromMinutes: 35,
          untilHours: 7,
          untilMinutes: 45
        },
        {
          daysOff: "ex sint ea",
          fromHours: 1,
          fromMinutes: 38,
          untilHours: 5,
          untilMinutes: 14
        },
        {
          daysOff: "do culpa sint",
          fromHours: 11,
          fromMinutes: 18,
          untilHours: 16,
          untilMinutes: 24
        },
        {
          daysOff: "aliquip est qui",
          fromHours: 11,
          fromMinutes: 41,
          untilHours: 2,
          untilMinutes: 0
        },
        {
          daysOff: "laboris nostrud aliqua",
          fromHours: 13,
          fromMinutes: 56,
          untilHours: 3,
          untilMinutes: 44
        },
        {
          daysOff: "qui id pariatur",
          fromHours: 8,
          fromMinutes: 13,
          untilHours: 1,
          untilMinutes: 32
        },
        {
          daysOff: "cupidatat voluptate pariatur",
          fromHours: 10,
          fromMinutes: 50,
          untilHours: 20,
          untilMinutes: 20
        },
        {
          daysOff: "aliqua id occaecat",
          fromHours: 9,
          fromMinutes: 40,
          untilHours: 11,
          untilMinutes: 53
        },
        {
          daysOff: "cupidatat voluptate deserunt",
          fromHours: 24,
          fromMinutes: 57,
          untilHours: 22,
          untilMinutes: 44
        },
        {
          daysOff: "culpa Lorem commodo",
          fromHours: 24,
          fromMinutes: 31,
          untilHours: 12,
          untilMinutes: 46
        },
        {
          daysOff: "id Lorem cillum",
          fromHours: 19,
          fromMinutes: 40,
          untilHours: 17,
          untilMinutes: 28
        }
      ]);
    });
};
