export const initialState={}
export const reducer = (state ,action)=>{
const type = action.type.toLowerCase()||''
switch(type){
case 'get':return state;
case 'delete':return {};
}
}