// [
//     '{{repeat(200)}}',
//     {

//       supervisor_id: '{{integer(0,20)}}',
//       operator_id: '{{integer(0,200)}}',
//       schedule_id:'{{integer(0,200)}}'

//     }
//   ]
exports.seed = function(knex, Promise) {
  return knex("supervisors_operators")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("supervisors_operators").insert([
        {
          supervisor_id: 16,
          operator_id: 129
        },
        {
          supervisor_id: 14,
          operator_id: 29
        },
        {
          supervisor_id: 15,
          operator_id: 94
        },
        {
          supervisor_id: 9,
          operator_id: 178
        },
        {
          supervisor_id: 5,
          operator_id: 172
        },
        {
          supervisor_id: 1,
          operator_id: 108
        },
        {
          supervisor_id: 6,
          operator_id: 150
        },
        {
          supervisor_id: 9,
          operator_id: 160
        },
        {
          supervisor_id: 10,
          operator_id: 123
        },
        {
          supervisor_id: 1,
          operator_id: 23
        },
        {
          supervisor_id: 13,
          operator_id: 147
        },
        {
          supervisor_id: 14,
          operator_id: 5
        },
        {
          supervisor_id: 3,
          operator_id: 180
        },
        {
          supervisor_id: 16,
          operator_id: 67
        },
        {
          supervisor_id: 14,
          operator_id: 155
        },
        {
          supervisor_id: 15,
          operator_id: 33
        },
        {
          supervisor_id: 8,
          operator_id: 61
        },
        {
          supervisor_id: 14,
          operator_id: 192
        },
        {
          supervisor_id: 6,
          operator_id: 155
        },
        {
          supervisor_id: 4,
          operator_id: 160
        },
        {
          supervisor_id: 3,
          operator_id: 53
        },
        {
          supervisor_id: 3,
          operator_id: 73
        },
        {
          supervisor_id: 14,
          operator_id: 121
        },
        {
          supervisor_id: 8,
          operator_id: 140
        },
        {
          supervisor_id: 19,
          operator_id: 15
        },
        {
          supervisor_id: 1,
          operator_id: 126
        },
        {
          supervisor_id: 4,
          operator_id: 5
        },
        {
          supervisor_id: 3,
          operator_id: 6
        },
        {
          supervisor_id: 19,
          operator_id: 50
        },
        {
          supervisor_id: 9,
          operator_id: 120
        },
        {
          supervisor_id: 5,
          operator_id: 123
        },
        {
          supervisor_id: 5,
          operator_id: 59
        },
        {
          supervisor_id: 8,
          operator_id: 104
        },
        {
          supervisor_id: 15,
          operator_id: 183
        },
        {
          supervisor_id: 8,
          operator_id: 102
        },
        {
          supervisor_id: 6,
          operator_id: 60
        },
        {
          supervisor_id: 5,
          operator_id: 165
        },
        {
          supervisor_id: 4,
          operator_id: 25
        },
        {
          supervisor_id: 12,
          operator_id: 76
        },
        {
          supervisor_id: 3,
          operator_id: 83
        },
        {
          supervisor_id: 15,
          operator_id: 109
        },
        {
          supervisor_id: 10,
          operator_id: 157
        },
        {
          supervisor_id: 8,
          operator_id: 71
        },
        {
          supervisor_id: 11,
          operator_id: 54
        },
        {
          supervisor_id: 6,
          operator_id: 93
        },
        {
          supervisor_id: 8,
          operator_id: 152
        },
        {
          supervisor_id: 7,
          operator_id: 163
        },
        {
          supervisor_id: 20,
          operator_id: 159
        },
        {
          supervisor_id: 2,
          operator_id: 118
        },
        {
          supervisor_id: 9,
          operator_id: 177
        },
        {
          supervisor_id: 11,
          operator_id: 6
        },
        {
          supervisor_id: 9,
          operator_id: 80
        },
        {
          supervisor_id: 13,
          operator_id: 152
        },
        {
          supervisor_id: 11,
          operator_id: 153
        },
        {
          supervisor_id: 9,
          operator_id: 3
        },
        {
          supervisor_id: 12,
          operator_id: 63
        },
        {
          supervisor_id: 4,
          operator_id: 193
        },
        {
          supervisor_id: 9,
          operator_id: 42
        },
        {
          supervisor_id: 5,
          operator_id: 93
        },
        {
          supervisor_id: 6,
          operator_id: 125
        },
        {
          supervisor_id: 2,
          operator_id: 166
        },
        {
          supervisor_id: 3,
          operator_id: 10
        },
        {
          supervisor_id: 9,
          operator_id: 108
        },
        {
          supervisor_id: 20,
          operator_id: 158
        },
        {
          supervisor_id: 18,
          operator_id: 196
        },
        {
          supervisor_id: 18,
          operator_id: 173
        },
        {
          supervisor_id: 11,
          operator_id: 80
        },
        {
          supervisor_id: 16,
          operator_id: 160
        },
        {
          supervisor_id: 18,
          operator_id: 87
        },
        {
          supervisor_id: 17,
          operator_id: 34
        },
        {
          supervisor_id: 3,
          operator_id: 135
        },
        {
          supervisor_id: 6,
          operator_id: 6
        },
        {
          supervisor_id: 14,
          operator_id: 195
        },
        {
          supervisor_id: 20,
          operator_id: 120
        },
        {
          supervisor_id: 3,
          operator_id: 136
        },
        {
          supervisor_id: 1,
          operator_id: 107
        },
        {
          supervisor_id: 14,
          operator_id: 134
        },
        {
          supervisor_id: 8,
          operator_id: 90
        },
        {
          supervisor_id: 6,
          operator_id: 145
        },
        {
          supervisor_id: 6,
          operator_id: 19
        },
        {
          supervisor_id: 16,
          operator_id: 141
        },
        {
          supervisor_id: 4,
          operator_id: 64
        },
        {
          supervisor_id: 17,
          operator_id: 140
        },
        {
          supervisor_id: 11,
          operator_id: 63
        },
        {
          supervisor_id: 17,
          operator_id: 108
        },
        {
          supervisor_id: 15,
          operator_id: 4
        },
        {
          supervisor_id: 12,
          operator_id: 132
        },
        {
          supervisor_id: 2,
          operator_id: 191
        },
        {
          supervisor_id: 12,
          operator_id: 114
        },
        {
          supervisor_id: 15,
          operator_id: 190
        },
        {
          supervisor_id: 8,
          operator_id: 101
        },
        {
          supervisor_id: 1,
          operator_id: 193
        },
        {
          supervisor_id: 11,
          operator_id: 107
        },
        {
          supervisor_id: 16,
          operator_id: 33
        },
        {
          supervisor_id: 8,
          operator_id: 6
        },
        {
          supervisor_id: 18,
          operator_id: 192
        },
        {
          supervisor_id: 8,
          operator_id: 104
        },
        {
          supervisor_id: 10,
          operator_id: 7
        },
        {
          supervisor_id: 14,
          operator_id: 166
        },
        {
          supervisor_id: 16,
          operator_id: 70
        },
        {
          supervisor_id: 20,
          operator_id: 176
        },
        {
          supervisor_id: 9,
          operator_id: 135
        },
        {
          supervisor_id: 9,
          operator_id: 174
        },
        {
          supervisor_id: 4,
          operator_id: 161
        },
        {
          supervisor_id: 3,
          operator_id: 170
        },
        {
          supervisor_id: 14,
          operator_id: 109
        },
        {
          supervisor_id: 19,
          operator_id: 130
        },
        {
          supervisor_id: 14,
          operator_id: 101
        },
        {
          supervisor_id: 12,
          operator_id: 193
        },
        {
          supervisor_id: 10,
          operator_id: 56
        },
        {
          supervisor_id: 13,
          operator_id: 23
        },
        {
          supervisor_id: 4,
          operator_id: 48
        },
        {
          supervisor_id: 10,
          operator_id: 70
        },
        {
          supervisor_id: 2,
          operator_id: 30
        },
        {
          supervisor_id: 13,
          operator_id: 101
        },
        {
          supervisor_id: 11,
          operator_id: 51
        },
        {
          supervisor_id: 18,
          operator_id: 77
        },
        {
          supervisor_id: 19,
          operator_id: 53
        },
        {
          supervisor_id: 6,
          operator_id: 158
        },
        {
          supervisor_id: 12,
          operator_id: 19
        },
        {
          supervisor_id: 3,
          operator_id: 105
        },
        {
          supervisor_id: 11,
          operator_id: 200
        },
        {
          supervisor_id: 1,
          operator_id: 67
        },
        {
          supervisor_id: 13,
          operator_id: 38
        },
        {
          supervisor_id: 1,
          operator_id: 92
        },
        {
          supervisor_id: 18,
          operator_id: 17
        },
        {
          supervisor_id: 15,
          operator_id: 107
        },
        {
          supervisor_id: 11,
          operator_id: 21
        },
        {
          supervisor_id: 10,
          operator_id: 132
        },
        {
          supervisor_id: 3,
          operator_id: 134
        },
        {
          supervisor_id: 6,
          operator_id: 59
        },
        {
          supervisor_id: 2,
          operator_id: 124
        },
        {
          supervisor_id: 16,
          operator_id: 80
        },
        {
          supervisor_id: 6,
          operator_id: 92
        },
        {
          supervisor_id: 8,
          operator_id: 96
        },
        {
          supervisor_id: 9,
          operator_id: 156
        },
        {
          supervisor_id: 3,
          operator_id: 136
        },
        {
          supervisor_id: 1,
          operator_id: 12
        },
        {
          supervisor_id: 9,
          operator_id: 59
        },
        {
          supervisor_id: 12,
          operator_id: 188
        },
        {
          supervisor_id: 3,
          operator_id: 4
        },
        {
          supervisor_id: 19,
          operator_id: 115
        },
        {
          supervisor_id: 10,
          operator_id: 96
        },
        {
          supervisor_id: 2,
          operator_id: 192
        },
        {
          supervisor_id: 18,
          operator_id: 95
        },
        {
          supervisor_id: 6,
          operator_id: 29
        },
        {
          supervisor_id: 2,
          operator_id: 118
        },
        {
          supervisor_id: 15,
          operator_id: 93
        },
        {
          supervisor_id: 12,
          operator_id: 62
        },
        {
          supervisor_id: 13,
          operator_id: 200
        },
        {
          supervisor_id: 7,
          operator_id: 60
        },
        {
          supervisor_id: 17,
          operator_id: 138
        },
        {
          supervisor_id: 18,
          operator_id: 122
        },
        {
          supervisor_id: 18,
          operator_id: 145
        },
        {
          supervisor_id: 13,
          operator_id: 31
        },
        {
          supervisor_id: 6,
          operator_id: 121
        },
        {
          supervisor_id: 3,
          operator_id: 56
        },
        {
          supervisor_id: 14,
          operator_id: 186
        },
        {
          supervisor_id: 16,
          operator_id: 38
        },
        {
          supervisor_id: 12,
          operator_id: 56
        },
        {
          supervisor_id: 5,
          operator_id: 196
        },
        {
          supervisor_id: 16,
          operator_id: 30
        },
        {
          supervisor_id: 7,
          operator_id: 92
        },
        {
          supervisor_id: 2,
          operator_id: 25
        },
        {
          supervisor_id: 20,
          operator_id: 15
        },
        {
          supervisor_id: 3,
          operator_id: 126
        },
        {
          supervisor_id: 2,
          operator_id: 132
        },
        {
          supervisor_id: 15,
          operator_id: 11
        },
        {
          supervisor_id: 3,
          operator_id: 74
        },
        {
          supervisor_id: 16,
          operator_id: 12
        },
        {
          supervisor_id: 2,
          operator_id: 61
        },
        {
          supervisor_id: 17,
          operator_id: 56
        },
        {
          supervisor_id: 15,
          operator_id: 39
        },
        {
          supervisor_id: 4,
          operator_id: 156
        },
        {
          supervisor_id: 16,
          operator_id: 36
        },
        {
          supervisor_id: 2,
          operator_id: 174
        },
        {
          supervisor_id: 16,
          operator_id: 145
        },
        {
          supervisor_id: 4,
          operator_id: 17
        },
        {
          supervisor_id: 16,
          operator_id: 96
        },
        {
          supervisor_id: 4,
          operator_id: 120
        },
        {
          supervisor_id: 20,
          operator_id: 82
        },
        {
          supervisor_id: 19,
          operator_id: 99
        },
        {
          supervisor_id: 18,
          operator_id: 3
        },
        {
          supervisor_id: 9,
          operator_id: 190
        },
        {
          supervisor_id: 2,
          operator_id: 94
        },
        {
          supervisor_id: 15,
          operator_id: 192
        },
        {
          supervisor_id: 15,
          operator_id: 22
        },
        {
          supervisor_id: 3,
          operator_id: 189
        },
        {
          supervisor_id: 6,
          operator_id: 71
        },
        {
          supervisor_id: 18,
          operator_id: 10
        },
        {
          supervisor_id: 13,
          operator_id: 195
        },
        {
          supervisor_id: 8,
          operator_id: 134
        },
        {
          supervisor_id: 15,
          operator_id: 141
        },
        {
          supervisor_id: 10,
          operator_id: 71
        },
        {
          supervisor_id: 20,
          operator_id: 124
        },
        {
          supervisor_id: 15,
          operator_id: 139
        },
        {
          supervisor_id: 18,
          operator_id: 29
        },
        {
          supervisor_id: 15,
          operator_id: 95
        },
        {
          supervisor_id: 5,
          operator_id: 2
        },
        {
          supervisor_id: 15,
          operator_id: 182
        }
      ]);
    });
};
