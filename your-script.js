window.open = function(url, windowName, windowFeatures) {
    // يمكنك إضافة رسالة تنبيهية للمستخدم هنا
    console.log("تم منع نافذة منبثقة!");
    return null; 
};
