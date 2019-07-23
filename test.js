const douyu_danmu = require('./index')
const roomid = '88660'
const client = new douyu_danmu(roomid)
const sendDb = require('./sendDb');

client.on('connect', () => {
	console.log(`已连接douyu ${roomid}房间弹幕~`)
})

client.on('message', msg => {
	switch (msg.type) {
        case 'chat':
		    console.log(msg);
            // showModel.setData(msg);
            break
		// case 'gift':
		// 	console.log(`[${msg.from.brand}][${msg.from.brandLevel}]:[${msg.from.name}]->赠送${msg.count}个${msg.name}`)
		// 	break
		// case 'yuwan':
		// 	console.log(`[${msg.from.brand}][${msg.from.brandLevel}]:[${msg.from.name}]->赠送${msg.count}个${msg.name}`)
		// 	break
		// case 'deserve':
		// 	console.log(`[${msg.from.brand}][${msg.from.brandLevel}]:[${msg.from.name}]->赠送${msg.count}个${msg.name}`)
		// 	break
	}
})

client.on('error', e => {
	console.log(e)
})

client.on('close', () => {
	console.log('close')
})

client.start()


// var showModel = {
//
//     setDbData : [],
//
//     setData:function (msg){
//
//     // { type: 'chat',
//     //     time: 1563464458468,
//     //     from:
//     //     { name: 'Agony_HGE',
//     //         rid: '722731',
//     //         level: 21,
//     //         plat: 'ios',
//     //         brand: '女流',
//     //         brandLevel: '12',
//     //         brandRoom: '156277' },
//     //     id: 'b3180c7dfbd945facb69be0000000000',
//     //         content: 'Gungungun' }
//
//     console.log(msg);
//
//     var tmpObj = {};
//
//     // var tmpObj = {
//     //     danmu_id : msg.id,
//     //     user_name : msg.from.name,
//     //     user_rid : msg.from.rid,
//     //     content : msg.content,
//     //     createtime : parseInt(msg.time/1000),
//     //     user_level : msg.from.level,
//     //     plat : msg.from.plat, // 设备
//     //     brand : msg.from.brand, //所带牌子
//     //     brandLevel : msg.from.brandLevel, // 牌子等级
//     //     brandRoom : msg.from.brandRoom, // 牌子对应房间号
//     // };
//     //
//
//     console.log(tmpObj);
//     this.setDbData.push(tmpObj);
//
//     if (setDbData.length >= 3){
//         // 写入到数据库
//         var saveData = {'danmu':setDbData};
//
//         console.log(saveData);
//         //
//         //
//         // var DB = new sendDb();
//         // DB.danmu(saveData);
//         // this.setDbData = [];
//         // return true;
//     }
// }
//
//
// };
