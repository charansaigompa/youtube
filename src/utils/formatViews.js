
export const formatViews=(views)=>{
  
    if(views<1000) return views;
    if(views<100000) {
        return (views/1000).toFixed(1).replace(".0","")+"k";
    }
    if(views<1000000) {
        return (views/100000).toFixed(1).replace(".0","")+"L";
    }
   return (views/1000000).toFixed(1).replace(".0","")+"M";

}