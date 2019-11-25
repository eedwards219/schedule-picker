exports.seed = function(knex, Promise) {
  return knex("schedules_operators")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("schedules_operators").insert([
        {
          schedule_id: 194,
          operator_id: 138
        },
        {
          schedule_id: 25,
          operator_id: 47
        },
        {
          schedule_id: 67,
          operator_id: 82
        },
        {
          schedule_id: 138,
          operator_id: 39
        },
        {
          schedule_id: 76,
          operator_id: 170
        },
        {
          schedule_id: 90,
          operator_id: 109
        },
        {
          schedule_id: 32,
          operator_id: 38
        },
        {
          schedule_id: 82,
          operator_id: 83
        },
        {
          schedule_id: 88,
          operator_id: 103
        },
        {
          schedule_id: 73,
          operator_id: 100
        },
        {
          schedule_id: 169,
          operator_id: 134
        },
        {
          schedule_id: 154,
          operator_id: 6
        },
        {
          schedule_id: 81,
          operator_id: 37
        },
        {
          schedule_id: 151,
          operator_id: 135
        },
        {
          schedule_id: 79,
          operator_id: 95
        },
        {
          schedule_id: 194,
          operator_id: 91
        },
        {
          schedule_id: 37,
          operator_id: 26
        },
        {
          schedule_id: 132,
          operator_id: 93
        },
        {
          schedule_id: 61,
          operator_id: 30
        },
        {
          schedule_id: 180,
          operator_id: 131
        },
        {
          schedule_id: 165,
          operator_id: 183
        },
        {
          schedule_id: 74,
          operator_id: 10
        },
        {
          schedule_id: 24,
          operator_id: 101
        },
        {
          schedule_id: 195,
          operator_id: 18
        },
        {
          schedule_id: 60,
          operator_id: 31
        },
        {
          schedule_id: 48,
          operator_id: 137
        },
        {
          schedule_id: 33,
          operator_id: 170
        },
        {
          schedule_id: 27,
          operator_id: 75
        },
        {
          schedule_id: 149,
          operator_id: 95
        },
        {
          schedule_id: 141,
          operator_id: 164
        },
        {
          schedule_id: 65,
          operator_id: 1
        },
        {
          schedule_id: 132,
          operator_id: 146
        },
        {
          schedule_id: 117,
          operator_id: 59
        },
        {
          schedule_id: 138,
          operator_id: 124
        },
        {
          schedule_id: 20,
          operator_id: 71
        },
        {
          schedule_id: 70,
          operator_id: 195
        },
        {
          schedule_id: 174,
          operator_id: 18
        },
        {
          schedule_id: 194,
          operator_id: 129
        },
        {
          schedule_id: 151,
          operator_id: 80
        },
        {
          schedule_id: 34,
          operator_id: 197
        },
        {
          schedule_id: 13,
          operator_id: 82
        },
        {
          schedule_id: 142,
          operator_id: 17
        },
        {
          schedule_id: 177,
          operator_id: 88
        },
        {
          schedule_id: 6,
          operator_id: 181
        },
        {
          schedule_id: 176,
          operator_id: 136
        },
        {
          schedule_id: 76,
          operator_id: 53
        },
        {
          schedule_id: 177,
          operator_id: 124
        },
        {
          schedule_id: 46,
          operator_id: 88
        },
        {
          schedule_id: 150,
          operator_id: 24
        },
        {
          schedule_id: 195,
          operator_id: 131
        },
        {
          schedule_id: 69,
          operator_id: 142
        },
        {
          schedule_id: 105,
          operator_id: 114
        },
        {
          schedule_id: 28,
          operator_id: 33
        },
        {
          schedule_id: 72,
          operator_id: 104
        },
        {
          schedule_id: 2,
          operator_id: 137
        },
        {
          schedule_id: 173,
          operator_id: 175
        },
        {
          schedule_id: 172,
          operator_id: 83
        },
        {
          schedule_id: 14,
          operator_id: 15
        },
        {
          schedule_id: 15,
          operator_id: 89
        },
        {
          schedule_id: 133,
          operator_id: 141
        },
        {
          schedule_id: 35,
          operator_id: 15
        },
        {
          schedule_id: 108,
          operator_id: 134
        },
        {
          schedule_id: 146,
          operator_id: 19
        },
        {
          schedule_id: 65,
          operator_id: 20
        },
        {
          schedule_id: 75,
          operator_id: 106
        },
        {
          schedule_id: 32,
          operator_id: 163
        },
        {
          schedule_id: 92,
          operator_id: 25
        },
        {
          schedule_id: 20,
          operator_id: 45
        },
        {
          schedule_id: 133,
          operator_id: 82
        },
        {
          schedule_id: 24,
          operator_id: 101
        },
        {
          schedule_id: 14,
          operator_id: 31
        },
        {
          schedule_id: 18,
          operator_id: 72
        },
        {
          schedule_id: 140,
          operator_id: 88
        },
        {
          schedule_id: 150,
          operator_id: 1
        },
        {
          schedule_id: 19,
          operator_id: 14
        },
        {
          schedule_id: 73,
          operator_id: 43
        },
        {
          schedule_id: 49,
          operator_id: 179
        },
        {
          schedule_id: 157,
          operator_id: 168
        },
        {
          schedule_id: 130,
          operator_id: 57
        },
        {
          schedule_id: 90,
          operator_id: 124
        },
        {
          schedule_id: 102,
          operator_id: 175
        },
        {
          schedule_id: 175,
          operator_id: 83
        },
        {
          schedule_id: 102,
          operator_id: 17
        },
        {
          schedule_id: 82,
          operator_id: 159
        },
        {
          schedule_id: 141,
          operator_id: 26
        },
        {
          schedule_id: 190,
          operator_id: 188
        },
        {
          schedule_id: 93,
          operator_id: 81
        },
        {
          schedule_id: 152,
          operator_id: 114
        },
        {
          schedule_id: 68,
          operator_id: 77
        },
        {
          schedule_id: 18,
          operator_id: 162
        },
        {
          schedule_id: 16,
          operator_id: 110
        },
        {
          schedule_id: 34,
          operator_id: 80
        },
        {
          schedule_id: 34,
          operator_id: 199
        },
        {
          schedule_id: 51,
          operator_id: 133
        },
        {
          schedule_id: 88,
          operator_id: 180
        },
        {
          schedule_id: 127,
          operator_id: 40
        },
        {
          schedule_id: 78,
          operator_id: 138
        },
        {
          schedule_id: 72,
          operator_id: 128
        },
        {
          schedule_id: 132,
          operator_id: 181
        },
        {
          schedule_id: 183,
          operator_id: 84
        },
        {
          schedule_id: 38,
          operator_id: 56
        },
        {
          schedule_id: 50,
          operator_id: 63
        },
        {
          schedule_id: 76,
          operator_id: 4
        },
        {
          schedule_id: 195,
          operator_id: 165
        },
        {
          schedule_id: 156,
          operator_id: 11
        },
        {
          schedule_id: 108,
          operator_id: 5
        },
        {
          schedule_id: 110,
          operator_id: 28
        },
        {
          schedule_id: 178,
          operator_id: 95
        },
        {
          schedule_id: 109,
          operator_id: 95
        },
        {
          schedule_id: 107,
          operator_id: 107
        },
        {
          schedule_id: 61,
          operator_id: 119
        },
        {
          schedule_id: 199,
          operator_id: 30
        },
        {
          schedule_id: 144,
          operator_id: 162
        },
        {
          schedule_id: 108,
          operator_id: 21
        },
        {
          schedule_id: 108,
          operator_id: 149
        },
        {
          schedule_id: 168,
          operator_id: 2
        },
        {
          schedule_id: 29,
          operator_id: 21
        },
        {
          schedule_id: 10,
          operator_id: 111
        },
        {
          schedule_id: 54,
          operator_id: 180
        },
        {
          schedule_id: 165,
          operator_id: 51
        },
        {
          schedule_id: 174,
          operator_id: 53
        },
        {
          schedule_id: 60,
          operator_id: 3
        },
        {
          schedule_id: 37,
          operator_id: 130
        },
        {
          schedule_id: 176,
          operator_id: 180
        },
        {
          schedule_id: 113,
          operator_id: 128
        },
        {
          schedule_id: 45,
          operator_id: 100
        },
        {
          schedule_id: 111,
          operator_id: 127
        },
        {
          schedule_id: 29,
          operator_id: 137
        },
        {
          schedule_id: 6,
          operator_id: 157
        },
        {
          schedule_id: 8,
          operator_id: 196
        },
        {
          schedule_id: 66,
          operator_id: 133
        },
        {
          schedule_id: 14,
          operator_id: 186
        },
        {
          schedule_id: 64,
          operator_id: 60
        },
        {
          schedule_id: 94,
          operator_id: 68
        },
        {
          schedule_id: 81,
          operator_id: 90
        },
        {
          schedule_id: 144,
          operator_id: 72
        },
        {
          schedule_id: 57,
          operator_id: 160
        },
        {
          schedule_id: 2,
          operator_id: 54
        },
        {
          schedule_id: 42,
          operator_id: 26
        },
        {
          schedule_id: 77,
          operator_id: 134
        },
        {
          schedule_id: 133,
          operator_id: 165
        },
        {
          schedule_id: 17,
          operator_id: 59
        },
        {
          schedule_id: 21,
          operator_id: 50
        },
        {
          schedule_id: 199,
          operator_id: 118
        },
        {
          schedule_id: 38,
          operator_id: 200
        },
        {
          schedule_id: 155,
          operator_id: 101
        },
        {
          schedule_id: 57,
          operator_id: 15
        },
        {
          schedule_id: 37,
          operator_id: 166
        },
        {
          schedule_id: 125,
          operator_id: 118
        },
        {
          schedule_id: 139,
          operator_id: 170
        },
        {
          schedule_id: 2,
          operator_id: 131
        },
        {
          schedule_id: 196,
          operator_id: 193
        },
        {
          schedule_id: 137,
          operator_id: 39
        },
        {
          schedule_id: 173,
          operator_id: 85
        },
        {
          schedule_id: 120,
          operator_id: 7
        },
        {
          schedule_id: 81,
          operator_id: 33
        },
        {
          schedule_id: 116,
          operator_id: 82
        },
        {
          schedule_id: 29,
          operator_id: 138
        },
        {
          schedule_id: 134,
          operator_id: 181
        },
        {
          schedule_id: 138,
          operator_id: 62
        },
        {
          schedule_id: 104,
          operator_id: 124
        },
        {
          schedule_id: 73,
          operator_id: 197
        },
        {
          schedule_id: 55,
          operator_id: 37
        },
        {
          schedule_id: 163,
          operator_id: 180
        },
        {
          schedule_id: 30,
          operator_id: 137
        },
        {
          schedule_id: 144,
          operator_id: 124
        },
        {
          schedule_id: 22,
          operator_id: 60
        },
        {
          schedule_id: 15,
          operator_id: 16
        },
        {
          schedule_id: 155,
          operator_id: 148
        },
        {
          schedule_id: 155,
          operator_id: 167
        },
        {
          schedule_id: 89,
          operator_id: 10
        },
        {
          schedule_id: 141,
          operator_id: 8
        },
        {
          schedule_id: 72,
          operator_id: 136
        },
        {
          schedule_id: 149,
          operator_id: 183
        },
        {
          schedule_id: 196,
          operator_id: 186
        },
        {
          schedule_id: 161,
          operator_id: 23
        },
        {
          schedule_id: 199,
          operator_id: 98
        },
        {
          schedule_id: 41,
          operator_id: 88
        },
        {
          schedule_id: 30,
          operator_id: 161
        },
        {
          schedule_id: 98,
          operator_id: 100
        },
        {
          schedule_id: 125,
          operator_id: 32
        },
        {
          schedule_id: 14,
          operator_id: 66
        },
        {
          schedule_id: 169,
          operator_id: 141
        },
        {
          schedule_id: 111,
          operator_id: 118
        },
        {
          schedule_id: 85,
          operator_id: 104
        },
        {
          schedule_id: 121,
          operator_id: 145
        },
        {
          schedule_id: 181,
          operator_id: 14
        },
        {
          schedule_id: 32,
          operator_id: 162
        },
        {
          schedule_id: 2,
          operator_id: 178
        },
        {
          schedule_id: 100,
          operator_id: 155
        },
        {
          schedule_id: 167,
          operator_id: 38
        },
        {
          schedule_id: 22,
          operator_id: 104
        },
        {
          schedule_id: 189,
          operator_id: 62
        },
        {
          schedule_id: 164,
          operator_id: 178
        },
        {
          schedule_id: 1,
          operator_id: 83
        },
        {
          schedule_id: 69,
          operator_id: 139
        },
        {
          schedule_id: 34,
          operator_id: 65
        },
        {
          schedule_id: 86,
          operator_id: 63
        },
        {
          schedule_id: 136,
          operator_id: 26
        },
        {
          schedule_id: 1,
          operator_id: 50
        }
      ]);
    });
};
