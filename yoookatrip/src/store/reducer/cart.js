import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,CHANGE_GOODS_QTY} from '../action/cart'

// State：初始化数据
let initialState = {
    goodslist:[{
        goods_id: "1",
        title: "色达稻城七日",
        coverPicUrl: "http://img.saihuitong.com/5636/img/4102974/16b9797dc81.jpg",
        startTime: 1435680000000,
        endTime: 1577807940000,
        priceMin: 2580,
        goods_qty: 2
    },
    {
        goods_id: "2",
        title: "色达稻城八日",
        coverPicUrl: "http://img.saihuitong.com/5636/img/4102974/16b9797dc81.jpg",
        startTime: 1435680000000,
        endTime: 1577807940000,
        priceMin: 2580,
        goods_qty: 1
    }]
}

// Reducer：修改state的方式（创建一份并覆盖）
// reducer会在执行store.dispatch()方法时被内部调用
const reducer = function(state=initialState,{type,payload}){
    // state为最新的数据

    // 根据action执行不同的操作
    switch(type){
        // 添加到购物车
        case ADD_TO_CART:
            state = {
                ...state,
                goodslist:[payload,...state.goodslist]
            }
            return state
        // 删除购物车商品
        // dispacth({type:'remove_from_cart',payload:{id}})
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.goods_id!=payload.goods_id)
            }

        // 修改商品数量
        // dispacth({type:'change_goods_qty',payload:{id,qty}})
        case CHANGE_GOODS_QTY:
        return {
            ...state,
            goodslist:state.goodslist.map(item=>{
                if(item.goods_id == payload.goods_id){
                    item.goods_qty = payload.goods_qty;
                }
                return item;
            })
        }

        // 清空购物车
        case CLEAR_CART:
            return {
                ...state,
                goodslist:[]
            }
        default:
            return state;
    }

}

export default reducer
