type formatType = {
  en: {
    w: Array<string>,
    m: Array<string>,
  },
  ja: {
    w: Array<string>,
    m: Array<string>,
  }
  ko: {
    w: Array<string>,
    m: Array<string>,
  }
  zh: {
    w: Array<string>,
    m: Array<string>,
  }
  la: {
    w: Array<string>,
    m: Array<string>,
  }
  ms: {
    w: Array<string>,
    m: Array<string>,
  }
  eo: {
    w: Array<string>,
    m: Array<string>,
  }
  it: {
    w: Array<string>,
    m: Array<string>,
  }
  de: {
    w: Array<string>,
    m: Array<string>,
  }
  el: {
    w: Array<string>,
    m: Array<string>,
  }
  es: {
    w: Array<string>,
    m: Array<string>,    
  }
  fr: {
    w: Array<string>,
    m: Array<string>,
  }
  ar: {
    w: Array<string>,
    m: Array<string>,
  }
  ru: {
    w: Array<string>,
    m: Array<string>,
  }
}

export const formatObj:formatType = {
  en: {
    w: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",],
    m: ["January","February","March","April","May","June","July","August","September","October","Nobember","December",]
  },
  ja: {
    w: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日",],
    m: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",]
  },
  ko: {
    w: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일",],
    m: ["일월","이월","삼월","사월","오월","유월","칠월","팔월","구월","시월","십일월","십이월",]
  },
  zh: {
    w: ["星期 天","星期 一","星期 二","星期 三","星期 四","星期 五","星期 六",],
    m: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",]
  },
  la: {
    w: ["Dies Solis","Dies Lunae","Dies Martis","Dies Mercurii","Dies Lovis","Dies Veneris","Dies Saturni",],
    m: ["Januarius","Februarius","Martius","Aprilis","Maius","Junius","Julius","Augustus","September","October","November","December",]
  },
  ms: {
    w: ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu",],
    m: ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember",]
  },
  eo: {
    w: ["Dimanĉo","Lundo","Mardo","Merkredo","Jaŭdo","Vendredo","Sabate",],
    m: ["Januaro","Februaro","Marto","Aprilo","Majo","Junio","Julio","Aŭgusto","Septembro","Oktobro","Novembro","Decembro",]
  },
  it: {
    w: ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato",],
    m: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre",]
  },
  de: {
    w: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag",],
    m: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",]
  },
  el: {
    w: ["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο",],
    m: ["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος",]
  },
  es: {
    w: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado",],
    m: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]
  },
  fr: {
    w: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi",],
    m: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre",]
  },
  ar: {
    w: ["الأحد","التنين","التلاتا","الأربعا","الخميس","الجمعة","السبت",],
    m: ["كانون تاني","شباط","آذار","نيسان","أيّار","حزيران","تمّوز","آب","إيلول","تشرين أوّل","تشرين تاني","كانون أوّل",]
  },
  ru: {
    w: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота",],
    m: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",]
  }
};
