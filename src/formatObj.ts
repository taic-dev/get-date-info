type monthType = {
  en: {
    week: Array<string>,
    month: Array<string>,
  },
  ja: {
    week: Array<string>,
    month: Array<string>,
  }
}

export const formatObj:monthType = {
  en: {
    week: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",],
    month: ["January","February","March","April","May","June","July","August","September","October","Nobember","December",]
  },
  ja: {
    week: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日",],
    month: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",]
  },
};
