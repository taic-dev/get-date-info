<style>
.column-left{
  float: left;
  width: 47.5%;
  text-align: left;
}
.column-right{
  float: right;
  width: 47.5%;
  text-align: left;
}
.column-one{
  float: left;
  width: 100%;
  text-align: left;
}
</style>

# get-date-info
 An npm package that can get time information.

## Install
```
$ npm i get-date-info
```

## Usage
```
const getDateInfo = require("get-date-info");
or
import getDateInfo from "get-date-info";

getDateInfo("time-initial","lang")
```

## Argument

<div class="column-one">
  <div class="column-left">

  |  time-initial | meaning       |
  | ----          | ----          |
  |  y            |  Year         |
  |  m            |  Month        |
  |  d            |  Date         |
  |  h            |  Hours        |
  |  i            |  Minutes      |
  |  s            |  Seconds      |
  |  w            |  Week         |
  |  ms           |  Milliseconds |

  </div>
  <div class="column-right">

  |  lang  | meaning     |
  | ----   | ----        |
  |  en    |  English    |
  |  ja    |  Japanese   |
  |  ko    |  Korea      |
  |  zh    |  Chinese    |
  |  la    |  Latin      |
  |  ms    |  Malay      |
  |  eo    |  Esperanto  |
  |  it    |  Italian    |
  |  de    |  German     |
  |  el    |  Greek      |
  |  es    |  Spanish    |
  |  fr    |  French     |
  |  ar    |  Arabic     |
  |  ru    |  Russian    |

  </div>

</div>

## Example
```
const getDateInfo = require("get-date-info");

// current month in english
console.log(getDateInfo("m","en"));

// current week in japanese
console.log(getDateInfo("w","ja"));
```

## Author
<a href="https://github.com/taic-dev">taic-dev</a>

## License
The source code is licensed MIT.