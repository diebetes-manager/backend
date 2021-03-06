
exports.seed = function(knex) {
  return knex('insulin').del()
    .then(function () {
      return knex('insulin').insert([
        {"id":1,"timestamp":"2019-02-01T03:21:53Z","amount":15,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":2,"timestamp":"2019-02-01T04:19:14Z","amount":9,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":3,"timestamp":"2019-02-01T05:10:54Z","amount":8,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":4,"timestamp":"2019-02-01T08:34:49Z","amount":3,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":5,"timestamp":"2019-02-01T03:43:06Z","amount":18,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":6,"timestamp":"2019-02-01T06:05:25Z","amount":9,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":7,"timestamp":"2019-02-01T00:47:01Z","amount":3,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":8,"timestamp":"2019-02-01T10:37:55Z","amount":9,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":9,"timestamp":"2019-02-01T07:33:45Z","amount":6,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":10,"timestamp":"2019-02-01T02:26:19Z","amount":3,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":11,"timestamp":"2019-02-01T00:47:01Z","amount":20,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":12,"timestamp":"2019-02-01T09:10:14Z","amount":14,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":13,"timestamp":"2019-02-01T01:31:15Z","amount":19,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":14,"timestamp":"2019-02-01T10:06:10Z","amount":18,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":15,"timestamp":"2019-02-01T09:16:20Z","amount":9,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":16,"timestamp":"2019-02-01T09:25:13Z","amount":19,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":17,"timestamp":"2019-02-01T08:09:27Z","amount":8,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":18,"timestamp":"2019-02-01T02:10:15Z","amount":20,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":19,"timestamp":"2019-02-01T03:58:45Z","amount":4,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":20,"timestamp":"2019-02-01T01:30:53Z","amount":13,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":21,"timestamp":"2019-02-01T09:13:17Z","amount":19,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":22,"timestamp":"2019-02-01T00:08:29Z","amount":19,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":23,"timestamp":"2019-02-01T05:05:53Z","amount":17,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":24,"timestamp":"2019-02-01T08:16:53Z","amount":12,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":25,"timestamp":"2019-02-01T02:18:05Z","amount":16,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":26,"timestamp":"2019-02-01T05:17:11Z","amount":17,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":27,"timestamp":"2019-02-01T09:43:22Z","amount":20,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":28,"timestamp":"2019-02-01T05:14:47Z","amount":18,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":29,"timestamp":"2019-02-01T05:04:16Z","amount":17,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":30,"timestamp":"2019-02-01T06:46:32Z","amount":7,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":31,"timestamp":"2019-02-01T09:12:53Z","amount":19,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":32,"timestamp":"2019-02-01T01:57:41Z","amount":18,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":33,"timestamp":"2019-02-01T05:00:29Z","amount":14,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":34,"timestamp":"2019-02-01T04:50:01Z","amount":9,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":35,"timestamp":"2019-02-01T03:08:14Z","amount":15,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":36,"timestamp":"2019-02-01T08:22:16Z","amount":17,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":37,"timestamp":"2019-02-01T01:00:42Z","amount":5,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":38,"timestamp":"2019-02-01T08:26:40Z","amount":16,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":39,"timestamp":"2019-02-01T08:16:50Z","amount":7,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":40,"timestamp":"2019-02-01T06:23:07Z","amount":13,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":41,"timestamp":"2019-02-01T00:16:20Z","amount":20,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":42,"timestamp":"2019-02-01T00:36:25Z","amount":3,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":43,"timestamp":"2019-02-01T10:46:16Z","amount":19,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":44,"timestamp":"2019-02-01T08:33:52Z","amount":14,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":45,"timestamp":"2019-02-01T00:34:15Z","amount":18,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":46,"timestamp":"2019-02-01T07:03:16Z","amount":12,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":47,"timestamp":"2019-02-01T07:07:57Z","amount":10,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":48,"timestamp":"2019-02-01T07:59:23Z","amount":13,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":49,"timestamp":"2019-02-01T04:43:00Z","amount":17,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":50,"timestamp":"2019-02-01T05:48:09Z","amount":16,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":51,"timestamp":"2019-02-01T01:47:59Z","amount":17,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":52,"timestamp":"2019-02-01T05:41:17Z","amount":14,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":53,"timestamp":"2019-02-01T03:37:23Z","amount":11,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":54,"timestamp":"2019-02-01T11:09:20Z","amount":13,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":55,"timestamp":"2019-02-01T00:35:08Z","amount":5,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":56,"timestamp":"2019-02-01T02:48:44Z","amount":4,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":57,"timestamp":"2019-02-01T05:00:01Z","amount":7,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":58,"timestamp":"2019-02-01T05:17:01Z","amount":7,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":59,"timestamp":"2019-02-01T08:19:25Z","amount":16,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":60,"timestamp":"2019-02-01T00:35:19Z","amount":9,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":61,"timestamp":"2019-02-01T03:29:48Z","amount":12,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":62,"timestamp":"2019-02-01T07:00:04Z","amount":5,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":63,"timestamp":"2019-02-01T07:40:32Z","amount":11,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":64,"timestamp":"2019-02-01T06:41:04Z","amount":10,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":65,"timestamp":"2019-02-01T07:09:22Z","amount":19,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":66,"timestamp":"2019-02-01T00:36:53Z","amount":10,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":67,"timestamp":"2019-02-01T00:39:54Z","amount":6,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":68,"timestamp":"2019-02-01T00:18:37Z","amount":11,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":69,"timestamp":"2019-02-01T11:19:43Z","amount":7,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":70,"timestamp":"2019-02-01T00:46:31Z","amount":19,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":71,"timestamp":"2019-02-01T01:26:04Z","amount":15,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":72,"timestamp":"2019-02-01T10:07:56Z","amount":13,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":73,"timestamp":"2019-02-01T01:43:46Z","amount":17,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":74,"timestamp":"2019-02-01T00:34:41Z","amount":3,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":75,"timestamp":"2019-02-01T07:19:18Z","amount":18,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":76,"timestamp":"2019-02-01T08:24:24Z","amount":13,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":77,"timestamp":"2019-02-01T01:33:18Z","amount":4,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":78,"timestamp":"2019-02-01T06:30:14Z","amount":20,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":79,"timestamp":"2019-02-01T04:49:04Z","amount":5,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":80,"timestamp":"2019-02-01T09:38:59Z","amount":7,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":81,"timestamp":"2019-02-01T11:56:28Z","amount":6,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":82,"timestamp":"2019-02-01T10:06:44Z","amount":14,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":83,"timestamp":"2019-02-01T00:07:35Z","amount":16,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":84,"timestamp":"2019-02-01T01:43:31Z","amount":10,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":85,"timestamp":"2019-02-01T02:56:49Z","amount":11,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":86,"timestamp":"2019-02-01T05:37:12Z","amount":3,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":87,"timestamp":"2019-02-01T02:40:22Z","amount":19,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":88,"timestamp":"2019-02-01T00:24:14Z","amount":17,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":89,"timestamp":"2019-02-01T04:52:47Z","amount":10,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":90,"timestamp":"2019-02-01T04:26:31Z","amount":4,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":91,"timestamp":"2019-02-01T05:48:39Z","amount":7,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":92,"timestamp":"2019-02-01T04:55:51Z","amount":16,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":93,"timestamp":"2019-02-01T00:34:36Z","amount":20,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":94,"timestamp":"2019-02-01T05:37:55Z","amount":7,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":95,"timestamp":"2019-02-01T00:50:49Z","amount":11,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":96,"timestamp":"2019-02-01T10:02:41Z","amount":4,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":97,"timestamp":"2019-02-01T11:52:14Z","amount":15,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":98,"timestamp":"2019-02-01T08:48:37Z","amount":15,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":99,"timestamp":"2019-02-01T09:35:29Z","amount":7,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":100,"timestamp":"2019-02-01T04:24:33Z","amount":16,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":101,"timestamp":"2019-02-01T06:54:25Z","amount":20,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":102,"timestamp":"2019-02-01T05:02:18Z","amount":18,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":103,"timestamp":"2019-02-01T02:27:18Z","amount":3,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":104,"timestamp":"2019-02-01T10:35:36Z","amount":3,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":105,"timestamp":"2019-02-01T01:31:02Z","amount":14,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":106,"timestamp":"2019-02-01T08:46:47Z","amount":10,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":107,"timestamp":"2019-02-01T00:54:27Z","amount":20,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":108,"timestamp":"2019-02-01T11:44:17Z","amount":20,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":109,"timestamp":"2019-02-01T10:11:57Z","amount":5,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":110,"timestamp":"2019-02-01T06:47:42Z","amount":18,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":111,"timestamp":"2019-02-01T08:11:43Z","amount":16,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":112,"timestamp":"2019-02-01T02:18:53Z","amount":17,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":113,"timestamp":"2019-02-01T02:13:01Z","amount":6,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":114,"timestamp":"2019-02-01T01:42:08Z","amount":14,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":115,"timestamp":"2019-02-01T10:36:26Z","amount":3,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":116,"timestamp":"2019-02-01T03:58:07Z","amount":11,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":117,"timestamp":"2019-02-01T09:01:29Z","amount":17,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":118,"timestamp":"2019-02-01T05:48:23Z","amount":20,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":119,"timestamp":"2019-02-01T02:08:42Z","amount":12,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":120,"timestamp":"2019-02-01T05:07:31Z","amount":16,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":121,"timestamp":"2019-02-01T10:29:25Z","amount":14,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":122,"timestamp":"2019-02-01T08:23:06Z","amount":20,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":123,"timestamp":"2019-02-01T01:48:13Z","amount":14,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":124,"timestamp":"2019-02-01T06:55:30Z","amount":10,"type":"slow acting","brand":"Humalog","user_id":1},
        {"id":125,"timestamp":"2019-02-01T05:44:54Z","amount":14,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":126,"timestamp":"2019-02-01T10:06:04Z","amount":9,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":127,"timestamp":"2019-02-01T10:03:16Z","amount":19,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":128,"timestamp":"2019-02-01T03:27:51Z","amount":6,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":129,"timestamp":"2019-02-01T11:40:50Z","amount":13,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":130,"timestamp":"2019-02-01T00:05:38Z","amount":7,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":131,"timestamp":"2019-02-01T11:06:11Z","amount":15,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":132,"timestamp":"2019-02-01T10:25:42Z","amount":16,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":133,"timestamp":"2019-02-01T04:05:06Z","amount":14,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":134,"timestamp":"2019-02-01T04:09:43Z","amount":16,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":135,"timestamp":"2019-02-01T08:17:19Z","amount":12,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":136,"timestamp":"2019-02-01T06:49:02Z","amount":18,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":137,"timestamp":"2019-02-01T05:01:03Z","amount":11,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":138,"timestamp":"2019-02-01T05:09:06Z","amount":11,"type":"slow acting","brand":"Novolog","user_id":1},
        {"id":139,"timestamp":"2019-02-01T02:42:44Z","amount":17,"type":"fast acting","brand":"Novolog","user_id":1},
        {"id":140,"timestamp":"2019-02-01T10:55:37Z","amount":13,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":141,"timestamp":"2019-02-01T02:55:20Z","amount":12,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":142,"timestamp":"2019-02-01T01:27:14Z","amount":6,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":143,"timestamp":"2019-02-01T02:17:34Z","amount":15,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":144,"timestamp":"2019-02-01T05:55:12Z","amount":16,"type":"fast acting","brand":"Humalog","user_id":1},
        {"id":145,"timestamp":"2019-02-01T01:00:53Z","amount":4,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":146,"timestamp":"2019-02-01T05:07:05Z","amount":12,"type":"fast acting","brand":"Apidra","user_id":1},
        {"id":147,"timestamp":"2019-02-01T03:36:28Z","amount":13,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":148,"timestamp":"2019-02-01T10:57:07Z","amount":11,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":149,"timestamp":"2019-02-01T04:52:53Z","amount":19,"type":"pill form","brand":"Apidra","user_id":1},
        {"id":150,"timestamp":"2019-02-01T03:10:45Z","amount":17,"type":"pill form","brand":"Novolog","user_id":1},
        {"id":151,"timestamp":"2019-02-01T07:40:56Z","amount":17,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":152,"timestamp":"2019-02-01T11:55:33Z","amount":19,"type":"slow acting","brand":"Apidra","user_id":1},
        {"id":153,"timestamp":"2019-02-01T10:36:40Z","amount":5,"type":"pill form","brand":"Humalog","user_id":1},
        {"id":154,"timestamp":"2019-02-01T08:40:59Z","amount":13,"type":"pill form","brand":"Apidra","user_id":1}
      ]);
    });
};

