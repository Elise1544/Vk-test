`use strict`;

const emojiLibrary = [
  {
    "title": "Эмоции",
    "items": ["😀", "😃", "😄", "😁", "😅", "😆", "😂", "🤣", "😉", "😊", "☺", "🙂", "🙃", "😇", "😗", "😙", "😚", "😘", "😍", "🥰", "🤩", "🤗", "😋", "😜", "🤪", "😛", "😝", "🤑", "🤭", "🤐", "🤫", "😶", "🤔", "🤨", "🧐", "😐", "😑", "🙄", "😬", "🤥", "😏", "😌", "🤤", "😴", "🤓", "😎", "🥳", "🤠", "😒", "😔", "😪", "😕", "😟", "🙁", "☹", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥶", "🥵", "🥴", "😵", "🤯", "😤", "😠", "😡", "🤬", "😈", "👿", "💀", "☠", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🦠"],
  },
  {
    "title": "Жесты и люди",
    "items": ["👍", "👎", "👌", "✌", "🤞", "🤟", "🤘", "🤙", "🖕", "✊", "👊", "🤛", "🤜", "👈", "👉", "👆", "👇", "☝", "👋", "🤚", "🖐", "✋", "🖖", "👏", "🙌", "👐", "🤲", "🤝🏻", "🙏", "💪", "🦵", "🦶", "👂", "👃", "🧠", "🦷", "🦴", "👀", "👁", "👅", "👄", "✍", "💅", "🤳", "👫", "👭", "👬", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍♂️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👱‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "🧓️", "👴️", "👵️", "🙍‍♂️️", "🙍‍♀️️", "🙎‍♂️", "🙎‍♀️️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "💁‍♂️", "💁‍♀️️", "🙋‍♂️", "🙋‍♀️️", "🙇‍♂️", "🙇‍♀️️", "🤦‍♂️", "🤦‍♀️", "🤷‍♂️", "🤷‍♀️", "💆‍♂️️", "💆‍♀️", "💇‍♂️️", "💇‍♀️", "🚶‍♂️️", "🚶‍♀️️", "🏃‍♂️️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯‍♂️️", "👯‍♀️", "🧖‍♂️", "🧖‍♀️️", "👼", "🎅", "🤶", "🦸‍♂️", "🦸‍♀️", "🦹‍♂️", "🦹‍♀️", "🧙‍♂️", "🧙‍♀️", "🧚‍♂️", "🧚‍♀️", "🧛‍♂️", "🧛‍♀️", "🧜‍♂️", "🧜‍♀️", "🧝‍♂️", "🧝‍♀️", "🧞‍♂️", "🧞‍♀️", "🧟‍♂️", "🧟‍♀️", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮‍♂️", "👮‍♀️", "🕵️‍♂️", "🕵️‍♀️", "💂‍♂️", "💂‍♀️", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "🛀", "🛌"],
  },
  {
    "title": "Символы",
    "items": ["💋", "❤", "💔", "❣", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💜", "🧡", "💛", "💚", "💙", "🖤", "💯", "💢", "💥", "💫", "🕳", "💣", "💬", "👁️‍🗨️", "🗨", "🗯", "💭", "💤", "🗣", "👤", "👥", "👣", "🔇", "🔊", "📢", "📣", "🔔", "🔕", "🎼", "🎵", "🎶", "⚠", "🚸", "☢", "☣", "🆚", "🆓", "🆕", "🚮", "🚾", "🚭", "✅", "♻", "⚕", "🔱", "‼", "⁉", "❓", "❗", "🆘", "⛔", "🚫", "🚳", "🚯", "🚱", "🚷", "📵", "🔞"],
  },
  {
    "title": "Животные и растения",
    "items": ["🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🐮", "🐂", "🐃", "🐄", "🐷", "🐽", "🐖", "🐗", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿", "🦔", "🦇", "🐻", "🐨", "🐼", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊", "🦅", "🦆", "🦢", "🦉", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🐟", "🐠", "🐡", "🦈", "🐙", "🦀", "🦞", "🦐", "🦑", "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🐞", "🦗", "🕷", "🕸", "🦂", "🦟", "💐", "🌸", "💮", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌳", "🌲", "🎄", "🌴", "🌵", "🌾", "🌱", "🌿", "☘", "🍀", "🍁", "🍂", "🍃", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌡", "☀", "🌝", "🌞", "⭐", "🌟", "🌠", "☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "💨", "🌀", "🌈", "🌂", "☂", "☔", "⛱", "⚡", "❄", "☃", "⛄", "☄", "🔥", "💦", "💧", "🌊"],
  },
  {
    "title": "Еда и напитки",
    "items": ["🍏", "🍎", "🍐", "🍅", "🥝", "🍑", "🍒", "🍓", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🥢", "🍽", "🍴", "🥄"],
  },
  {
    "title": "Спорт и активности",
    "items": ["⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "🥅", "⛳", "⛸", "🎣", "🎽", "🛹", "🎿", "🛷", "🥌", "🎯", "🎱", "🎮", "🕹", "🎰", "🎲", "🧩", "♟", "🧗‍♂️️", "🧗‍♀️", "🤺", "🏇", "⛷", "🏂", "🏌️‍♂️", "🏌️‍♀️", "🏄‍♂️", "🏄‍♀️", "🚣‍♂️", "🚣‍♀️", "🏊‍♂️", "🏊‍♀️", "⛹️‍♂️", "⛹️‍♀️", "🏋️‍♂️", "🏋️‍♀️", "🚴‍♂️", "🚴‍♀️", "🚵‍♂️", "🚵‍♀️", "🤸", "🤼‍♂️", "🤼‍♀️", "🤽‍♂️", "🤽‍♀️", "🤾‍♂️", "🤾‍♀️", "🤹‍♂️", "🤹‍♀️", "🧘‍♂️", "🧘‍♀️", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉"],
  },
  {
    "title": "Путешествия и транспорт",
    "items": ["🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚝", "🚞", "🚋", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🏎", "🏍", "🛵", "🚲", "🛴", "🚏", "🛣", "🛤", "🛢", "⛽", "🚨", "🚥", "🚦", "🛑", "🚧", "⚓", "⛵", "🛶", "🚤", "🛳", "⛴", "🛥", "🚢", "✈", "🛩", "🛫", "🛬", "💺", "🚁", "🚟", "🚠", "🚡", "🛰", "🚀", "🛸", "🌍", "🌎", "🌏", "🌐", "🗺", "🗾", "🧭", "🏔", "⛰", "🌋", "🗻", "🏕", "🏖", "🏜", "🏝", "🏞", "🏟", "🏛", "🏗", "🧱", "🏘", "🏚", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🕍", "⛩", "🕋", "⛲", "⛺", "🌁", "🌃", "🏙", "🌄", "🌅", "🌆", "🌇", "🌉", "♨", "🌌", "🎠", "🎡", "🎢", "💈", "🎪"],
  },
  {
    "title": "Предметы",
    "items": ["🎙", "🎚", "🎛", "🎤", "🎧", "📻", "🎷", "🎸", "🎹", "🎺", "🎻", "🥁", "📯", "🎭", "🖼", "🎨", "🧵", "🧶", "🔮", "🧿", "🧸", "🃏", "🀄", "🎴", "🎃", "🎆", "🎇", "🧨", "✨", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎀", "🎁", "🎗", "🎟", "🎫", "🛎", "🧳", "⌛", "⏳", "⌚", "⏰", "⏱", "⏲", "🕰", "👓", "🕶", "🥽", "🥼", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "🛍", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "📿", "💄", "💍", "💎", "📱", "📲", "☎", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥", "🖨", "⌨", "🖱", "🖲", "💽", "💾", "💿", "📀", "🧮", "🎥", "🎞", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍", "🔎", "🕯", "💡", "🔦", "🏮", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞", "📑", "🔖", "🏷", "💰", "💴", "💵", "💶", "💷", "💸", "💳", "🧾", "💹", "💱", "💲", "✉", "💌", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📬", "📭", "📮", "🗳", "✏", "✒", "🖋", "🖊", "🖌", "🖍", "📝", "💼", "📁", "📂", "🗂", "📅", "📆", "🗒", "🗓", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "🖇", "📏", "📐", "✂", "🗃", "🗄", "🗑", "🔒", "🔓", "🔏", "🔐", "🔑", "🗝", "🔨", "⛏", "⚒", "🛠", "🗡", "⚔", "🔪", "🔫", "🏹", "🛡", "🔧", "🔩", "⚙", "🗜", "⚖", "🔗", "⛓", "🧰", "🧲", "⚗", "🧪", "🧫", "🧬", "🔬", "🔭", "📡", "💉", "💊", "🚪", "🛏", "🛋", "🚽", "🚿", "🛁", "🧴", "🧷", "🧹", "🧺", "🧻", "🧼", "🧽", "🧯", "🛒", "🚬", "⚰", "⚱", "🏺", "🗿"],
  },
  {
    "title": "Флаги",
    "items": ["🇷🇺", "🇰🇿", "🇧🇾", "🇺🇦", "🇲🇳", "🇬🇪", "🇦🇿", "🇹🇯", "🇧🇷", "🇱🇹", "🇱🇻", "🇪🇪", "🇦🇲", "🏁", "🚩", "🎌", "🏴", "🏳", "🏳️‍🌈", "🏴‍☠️", "🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇨", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇾", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇺", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼"]
  }
]

window.addEventListener(`DOMContentLoaded`, () => {

  const inputArea = document.querySelector(`.input__area`),
    inputEmojiBtn = document.querySelector(`.input__emoji`),
    changeEmojies = document.querySelector(`.emoji__change-type`).querySelectorAll(`.emoji-icon`),
    allEmojiBtn = document.querySelector(`.emoji__all-emoji`),
    recentlyEmojiBtn = document.querySelector(`.emoji__recently-emoji`),
    emoji = document.querySelector(`.emoji`),
    emojiBlockAll = document.querySelector(`.emoji__block--all`),
    emojiBlockRecently = document.querySelector(`.emoji__block--recently`),
    tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
    tabsFieldElems = document.querySelectorAll('[data-tabs-field]'),
    outputBlock = document.querySelector(`.output-block`);

  const showEmoji = () => {

    const newEmoji = [];

    for (let i = 0; i < emojiLibrary.length; i++) {
      newEmoji.push(emojiLibrary[i].title);
      newEmoji.push(emojiLibrary[i].items);
    }

    for (let i = 0; i < newEmoji.length; i++) {
      let li = document.createElement(`li`);
      li.classList.add(`li`);
      emojiBlockAll.append(li);
      let liList = document.getElementsByClassName(`li`);
      if (i % 2 === 0) {
        liList[i].textContent = newEmoji[i];
      } else {
        for (let k = 0; k < newEmoji[i].length; k++) {
          let div = document.createElement(`div`);
          div.classList.add(`img-emoji`);
          div.tabIndex = `0`;
          div.textContent = newEmoji[i][k];
          liList[i].append(div)
        }
      }
    }
  }
  showEmoji()

  inputEmojiBtn.addEventListener(`click`, () => {
    emoji.classList.toggle(`emoji--active`);
  });

  inputEmojiBtn.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Enter`) {
      emoji.classList.toggle(`emoji--active`);
    }
  });

  for (let tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
      tabsHandlerElems.forEach(item => {
        if (tab === item) {
          item.classList.add('emoji-icon--active');
        } else {
          item.classList.remove('emoji-icon--active');
        }
      });

      tabsFieldElems.forEach(item => {
        if (item.dataset.tabsField === tab.dataset.tabsHandler) {
          item.style.display = `block`;
        } else {
          item.style.display = `none`;
        }
      });
    }
    );
    tab.addEventListener('keydown', (evt) => {
      if (evt.key === `Enter`) {
        tabsHandlerElems.forEach(item => {
          if (tab === item) {
            item.classList.add('emoji-icon--active');
          } else {
            item.classList.remove('emoji-icon--active');
          }
        });

        tabsFieldElems.forEach(item => {
          if (item.dataset.tabsField === tab.dataset.tabsHandler) {
            item.style.display = `block`;
          } else {
            item.style.display = `none`;
          }
        });
      }
    });
  };

  let recentlyEmoji = [];

  let showRecentlyEmojies = () => {
    newEmojiItems = emojiBlockRecently.querySelectorAll(`.img-emoji`);
    newEmojiItems.forEach(item => {
      item.remove();
    })
    for (let i = 0; i < recentlyEmoji.length; i++) {
      let div = document.createElement(`div`);
      div.classList.add(`img-emoji`);
      div.tabIndex = `0`;
      div.textContent = recentlyEmoji[i];
      div.addEventListener(`click`, () => {
        inputArea.value += div.textContent;
        inputArea.focus();
      });
      emojiBlockRecently.append(div);
      div.addEventListener(`keydown`, (evt) => {
        if (evt.key === `Enter`) {
          inputArea.value += div.textContent;
          inputArea.focus();
        }
      })
    }
  }

  if (localStorage.key(`recentlyEmoji`)) {
    recentlyEmoji = JSON.parse(localStorage.getItem(`recentlyEmoji`));
    showRecentlyEmojies();
  }

  const addEmoji = () => {

    let emojiItems = document.querySelectorAll(`.img-emoji`);
    emojiItems.forEach(emoji => {

      const createEmojiItem = () => {
        if (recentlyEmoji.includes(emoji.textContent)) {
          recentlyEmoji = recentlyEmoji.slice(0, recentlyEmoji.length)
          localStorage.setItem(`recentlyEmoji`, JSON.stringify(recentlyEmoji));
        } else if (recentlyEmoji.length < 25) {
          recentlyEmoji.unshift(emoji.textContent);
          localStorage.setItem(`recentlyEmoji`, JSON.stringify(recentlyEmoji));
        } else {
          recentlyEmoji.unshift(emoji.textContent);
          recentlyEmoji = recentlyEmoji.slice(0, 25);
          localStorage.setItem(`recentlyEmoji`, JSON.stringify(recentlyEmoji));
        }
      };

      emoji.addEventListener(`click`, () => {
        createEmojiItem();
        inputArea.value += emoji.textContent;
        inputArea.focus();
        showRecentlyEmojies();
      });

      emoji.addEventListener(`keydown`, (evt) => {
        if (evt.key === `Enter`) {
          createEmojiItem()
          inputArea.value += emoji.textContent;
          inputArea.focus();
          showRecentlyEmojies();
        }
      })

    });
  };
  addEmoji();

  const changeSize = (evt) => {
    if (evt.key !== `Enter`) {
      inputArea.style.height = `${inputArea.scrollHeight}px`;
    } else {
      evt.preventDefault();

      let output = document.createElement(`p`);
      output.classList.add(`output`);
      output.textContent = inputArea.value;
      outputBlock.append(output);
      inputArea.style.height = '36px';
      inputArea.value = ``;
    }
  };
  inputArea.addEventListener(`keydown`, changeSize);
});