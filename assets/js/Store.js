const games = [
  {
    id: 1,
    name: "Call of Duty®: Modern Warfare® II",
    category: ["Hành động", "Chiến thuật", "Mô phỏng"],
    img: "assets/images/Call of Duty-Modern Warfare-II.jpg",
    price: 690000,
    oldPrice: 890000,
    description: "Trò chơi bắn súng góc nhìn thứ nhất với các chiến dịch quân sự chân thực và kịch tính.",
    filterClass: ["act", "str", "sim"]
  },
  {
    id: 2,
    name: "Assassin Creed",
    category: ["Phiêu lưu", "Hành động", "Nhập vai"],
    img: "assets/images/assassin-creed.jpg",
    price: 790000,
    oldPrice: 1000000,
    description: "Hành trình phiêu lưu qua các nền văn minh cổ đại với lối chơi hành động lén lút đặc trưng.",
    filterClass: ["adv", "act", "rpg"]
  },
  {
    id: 3,
    name: "Clair Obscur: Expedition 33",
    category: ["Nhập vai", "Phiêu lưu"],
    img: "assets/images/Clair-Obscur.jpg",
    price: 520000,
    oldPrice: 640000,
    description: "Một thế giới kỳ ảo kết hợp phong cách hội họa cổ điển với lối chơi nhập vai chiến thuật sâu sắc.",
    filterClass: ["rpg", "adv"]
  },
  {
    id: 4,
    name: "Split Fiction",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/split-fiction.jpg",
    price: 440000,
    oldPrice: 440000,
    description: "Một game hành động độc đáo với cơ chế phân thân và lựa chọn nhánh truyện hấp dẫn.",
    filterClass: ["act", "adv"]
  },
  {
    id: 5,
    name: "Blue Prince",
    category: ["Chiến thuật", "Phiêu lưu"],
    img: "assets/images/Blue-Prince-shop.jpg",
    price: 310000,
    oldPrice: 460000,
    description: "Khám phá lâu đài vô tận trong một trò chơi chiến thuật giải đố đậm chất nghệ thuật.",
    filterClass: ["str", "adv"]
  },
  {
    id: 6,
    name: "Kingdom Come II",
    category: ["Nhập vai", "Mô phỏng", "Hành động"],
    img: "assets/images/Kingdom-come-II.jpg",
    price: 780000,
    oldPrice: 780000,
    description: "Tái hiện lịch sử Trung Âu thời Trung cổ với gameplay nhập vai chân thực và không có phép thuật.",
    filterClass: ["rpg", "sim", "act"]
  },
  {
    id: 7,
    name: "Baldur's Gate 3",
    category: ["Nhập vai", "Chiến thuật"],
    img: "assets/images/baldurs-gate-3.jpg",
    price: 890000,
    oldPrice: 990000,
    description: "Tựa game nhập vai theo lượt dựa trên Dungeons & Dragons với cốt truyện phong phú và lựa chọn ảnh hưởng sâu rộng.",
    filterClass: ["rpg", "str"]
  },
  {
    id: 8,
    name: "Farming Simulator",
    category: ["Chiến thuật", "Mô phỏng"],
    img: "assets/images/farming-simulator.jpg",
    price: 430000,
    oldPrice: 550000,
    description: "Trải nghiệm quản lý nông trại chân thực với hệ thống máy móc nông nghiệp hiện đại.",
    filterClass: ["str", "sim"]
  },
  {
    id: 9,
    name: "R.E.P.O",
    category: ["Kinh dị", "Sinh tồn", "Hành động"],
    img: "assets/images/repo.jpg",
    price: 310000,
    oldPrice: 310000,
    description: "Một game sinh tồn kinh dị trong không gian tối tăm, đầy căng thẳng và bí ẩn.",
    filterClass: ["horror", "sur", "act"]
  },
  {
    id: 10,
    name: "HELLDIVERS™ 2",
    category: ["Hành động", "Chiến thuật", "Mô phỏng"],
    img: "assets/images/helldivers.jpg",
    price: 690000,
    oldPrice: 850000,
    description: "Game bắn súng phối hợp góc nhìn thứ ba, nơi bạn chiến đấu vì nền dân chủ siêu cấp chống lại các chủng loài ngoài hành tinh.",
    filterClass: ["act", "str", "sim"]
  },
  {
    id: 11,
    name: "PUBG: BATTLEGROUNDS",
    category: ["Hành động", "Sinh tồn", "Thể thao"],
    img: "assets/images/pubg-battlegrounds.jpg",
    price: 0,
    oldPrice: 320000,
    description: "Trận chiến sinh tồn 100 người chơi đầy căng thẳng, nơi kẻ sống sót cuối cùng sẽ chiến thắng.",
    filterClass: ["act", "sur", "sports"]
  },
  {
    id: 12,
    name: "Rust",
    category: ["Sinh tồn", "Hành động", "Mô phỏng"],
    img: "assets/images/rust.jpg",
    price: 320000,
    oldPrice: 440000,
    description: "Bắt đầu từ hai bàn tay trắng, người chơi phải xây dựng, sinh tồn và chiến đấu trong một thế giới khắc nghiệt.",
    filterClass: ["sur", "act", "sim"]
  },
  {
    id: 13,
    name: "Dead By Daylight",
    category: ["Kinh dị", "Sinh tồn"],
    img: "assets/images/deadbydaylight.jpg",
    price: 330000,
    oldPrice: 490000,
    description: "Trò chơi kinh dị nhiều người chơi không đối xứng, nơi một kẻ sát nhân săn lùng bốn người sống sót.",
    filterClass: ["horror", "sur"]
  },
  {
  id: 14,
  name: "EA SPORTS FC™ 24",
  category: ["Thể thao", "Mô phỏng"],
  img: "assets/images/eafc.jpg",
  price: 950000,
  oldPrice: 1150000,
  description: "Tựa game bóng đá đỉnh cao kế thừa FIFA, mang đến trải nghiệm sân cỏ chân thực với công nghệ HyperMotionV.",
  filterClass: ["sports", "sim"]
},
{
  id: 15,
  name: "The Sims™ 4",
  category: ["Mô phỏng", "Chiến thuật"],
  img: "assets/images/sims4.jpg",
  price: 0,
  oldPrice: 490000,
  description: "Xây dựng cuộc sống ảo của bạn với tự do sáng tạo tối đa trong một thế giới mở đầy màu sắc và drama.",
  filterClass: ["sim", "str"]
},
{
  id: 16,
  name: "Resident Evil 4 Remake",
  category: ["Hành động", "Kinh dị"],
  img: "assets/images/re4.jpg",
  price: 890000,
  oldPrice: 1050000,
  description: "Leon S. Kennedy trở lại trong phiên bản làm lại của tựa game kinh dị sinh tồn huyền thoại với đồ họa hiện đại.",
  filterClass: ["act", "horror"]
},
{
  id: 17,
  name: "Hades II",
  category: ["Hành động", "Nhập vai"],
  img: "assets/images/hades2.jpg",
  price: 490000,
  oldPrice: 640000,
  description: "Phần tiếp theo của siêu phẩm hành động roguelike, nơi bạn nhập vai em gái của Hades trong cuộc chiến với thần Titan.",
  filterClass: ["act", "rpg"]
},
{
  id: 18,
  name: "Sons of the Forest",
  category: ["Sinh tồn", "Kinh dị", "Hành động"],
  img: "assets/images/sonsoftheforest.jpg",
  price: 450000,
  oldPrice: 580000,
  description: "Kế thừa tinh thần của The Forest, trò chơi đưa bạn vào thế giới sinh tồn đầy rùng rợn và bí ẩn trên hòn đảo hoang.",
  filterClass: ["sur", "horror", "act"]
},
{ 
  id: 19,
  name: "Dragon Kingdom",
  category: ["Kinh dị"],
  img: "assets/images/dragon-kingdom.jpg",
  price: 468000,
  oldPrice: 602000,
  description: "Xây dựng đế chế của bạn và đánh bại mọi kẻ thù.",
  filterClass: ["horror"]
},
{
  id: 20,
  name: "Cyberpunk 2077",
  category: ["Hành động", "Nhập vai"],
  img: "assets/images/cyberpunk2077.jpg",
  price: 760000,
  oldPrice: 950000,
  description: "Thành phố đêm rực rỡ với lối chơi nhập vai sâu sắc và các nhiệm vụ mang tính điện ảnh cao.",
  filterClass: ["act", "rpg"]
},
{
  id: 21,
  name: "Elden Ring",
  category: ["Nhập vai", "Hành động", "Phiêu lưu"],
  img: "assets/images/elden-ring.jpg",
  price: 890000,
  oldPrice: 1100000,
  description: "Một thế giới mở rộng lớn đầy thử thách, nơi bạn phải chiến đấu và khám phá những bí ẩn cổ xưa.",
  filterClass: ["rpg", "act", "adv"]
},
{
  id: 22,
  name: "The Witcher 3: Wild Hunt",
  category: ["Nhập vai", "Phiêu lưu"],
  img: "assets/images/witcher3.jpg",
  price: 420000,
  oldPrice: 630000,
  description: "Theo chân Geralt trên hành trình săn quái vật trong thế giới đầy mê hoặc và nguy hiểm.",
  filterClass: ["rpg", "adv"]
},
{
  id: 23,
  name: "Starfield",
  category: ["Nhập vai", "Mô phỏng", "Phiêu lưu"],
  img: "assets/images/starfield.jpg",
  price: 990000,
  oldPrice: 1200000,
  description: "Khám phá không gian sâu thẳm trong tựa game nhập vai thế giới mở quy mô lớn đến từ Bethesda.",
  filterClass: ["rpg", "sim", "adv"]
},
{
  id: 24,
  name: "Detroit: Become Human",
  category: ["Mô phỏng", "Phiêu lưu"],
  img: "assets/images/detroit.jpg",
  price: 540000,
  oldPrice: 690000,
  description: "Trò chơi tương tác sâu sắc với cốt truyện nhiều nhánh, nơi mọi quyết định đều tạo nên số phận.",
  filterClass: ["sim", "adv"]
},
{
  id: 25,
  name: "Forza Horizon 5",
  category: ["Thể thao", "Mô phỏng"],
  img: "assets/images/forza5.jpg",
  price: 750000,
  oldPrice: 980000,
  description: "Tận hưởng thế giới đua xe mở sống động với phong cảnh Mexico rực rỡ và xe đua tốc độ cao.",
  filterClass: ["sports", "sim"]
},
{
  id: 26,
  name: "Dying Light 2 Stay Human",
  category: ["Hành động", "Kinh dị", "Sinh tồn"],
  img: "assets/images/dyinglight2.jpg",
  price: 790000,
  oldPrice: 920000,
  description: "Một thế giới hậu tận thế tràn ngập zombie, nơi parkour và chiến đấu sinh tồn là chìa khóa để sống sót.",
  filterClass: ["act", "horror", "sur"]
},
{
  id: 27,
  name: "It Takes Two",
  category: ["Phiêu lưu", "Chiến thuật"],
  img: "assets/images/ittakestwo.jpg",
  price: 560000,
  oldPrice: 690000,
  description: "Trò chơi hợp tác hai người chơi cực kỳ sáng tạo và cảm động với các cơ chế chơi phong phú.",
  filterClass: ["adv", "str"]
},
{
  id: 28,
  name: "Red Dead Redemption 2",
  category: ["Hành động", "Phiêu lưu", "Mô phỏng"],
  img: "assets/images/rdr2.jpg",
  price: 850000,
  oldPrice: 1060000,
  description: "Hành trình cao bồi huyền thoại trong thế giới mở sống động và đầy chân thực.",
  filterClass: ["act", "adv", "sim"]
},
{
  id: 29,
  name: "Hollow Knight: Silksong",
  category: ["Phiêu lưu", "Hành động"],
  img: "assets/images/silksong.jpg",
  price: 390000,
  oldPrice: 490000,
  description: "Phần tiếp theo của siêu phẩm metroidvania với thế giới ngầm sâu thẳm và các pha hành động mãn nhãn.",
  filterClass: ["adv", "act"]
},
{
  id: 30,
  name: "Stray",
  category: ["Phiêu lưu", "Mô phỏng"],
  img: "assets/images/stray.jpg",
  price: 490000,
  oldPrice: 630000,
  description: "Hóa thân thành một chú mèo lang thang khám phá thành phố cyberpunk đầy bí ẩn và robot.",
  filterClass: ["adv", "sim"]
},
{
  id: 31,
  name: "Ghost of Tsushima",
  category: ["Hành động", "Phiêu lưu"],
  img: "assets/images/ghost-tsushima.jpg",
  price: 990000,
  oldPrice: 1190000,
  description: "Chiến đấu bảo vệ quê hương Tsushima trong một thế giới Nhật Bản cổ đại đầy nghệ thuật và samurai.",
  filterClass: ["act", "adv"]
},
{
  id: 32,
  name: "Alan Wake II",
  category: ["Kinh dị", "Phiêu lưu"],
  img: "assets/images/alanwake2.jpg",
  price: 920000,
  oldPrice: 1150000,
  description: "Tiếp nối câu chuyện rùng rợn của nhà văn Alan Wake với gameplay đậm chất tâm lý kinh dị.",
  filterClass: ["horror", "adv"]
},
{
  id: 33,
  name: "Stardew Valley",
  category: ["Mô phỏng", "Chiến thuật"],
  img: "assets/images/stardewvalley.jpg",
  price: 190000,
  oldPrice: 290000,
  description: "Xây dựng và phát triển nông trại của bạn, làm quen với dân làng và khám phá hang động kỳ bí.",
  filterClass: ["sim", "str"]
},
{
  id: 34,
  name: "Hogwarts Legacy",
  category: ["Phiêu lưu", "Nhập vai"],
  img: "assets/images/hogwartslegacy.jpg",
  price: 980000,
  oldPrice: 1250000,
  description: "Khám phá thế giới phù thủy rộng lớn với vai trò một học sinh tại Hogwarts vào thế kỷ 19.",
  filterClass: ["adv", "rpg"]
},
{
  id: 35,
  name: "Atomic Heart",
  category: ["Hành động", "Kinh dị", "Mô phỏng"],
  img: "assets/images/atomicheart.jpg",
  price: 790000,
  oldPrice: 920000,
  description: "Trò chơi bắn súng viễn tưởng trong một Liên Xô giả tưởng đầy rẫy robot và bí ẩn rùng rợn.",
  filterClass: ["act", "horror", "sim"]
},
{
  id: 36,
  name: "Little Nightmares II",
  category: ["Kinh dị", "Phiêu lưu"],
  img: "assets/images/littlenightmares2.jpg",
  price: 410000,
  oldPrice: 540000,
  description: "Một cuộc phiêu lưu rùng rợn và kỳ dị qua thế giới ác mộng đầy biểu tượng.",
  filterClass: ["horror", "adv"]
},
{
  id: 37,
  name: "Plague Tale: Requiem",
  category: ["Phiêu lưu", "Hành động"],
  img: "assets/images/plaguetale.jpg",
  price: 860000,
  oldPrice: 1050000,
  description: "Theo chân hai anh em trong cuộc hành trình sinh tồn giữa thời kỳ bệnh dịch kinh hoàng ở châu Âu.",
  filterClass: ["adv", "act"]
},
{
  id: 38,
  name: "Sea of Thieves",
  category: ["Mô phỏng", "Phiêu lưu", "Hành động"],
  img: "assets/images/seaofthieves.jpg",
  price: 490000,
  oldPrice: 640000,
  description: "Trở thành cướp biển tự do, khám phá đại dương, tìm kho báu và chiến đấu với sinh vật huyền thoại.",
  filterClass: ["sim", "adv", "act"]
},
{
  id: 39,
  name: "Lies of P",
  category: ["Hành động", "Nhập vai"],
  img: "assets/images/liesofp.jpg",
  price: 840000,
  oldPrice: 990000,
  description: "Một phiên bản đen tối và gothic của câu chuyện Pinocchio với lối chơi soulslike đầy thử thách.",
  filterClass: ["act", "rpg"]
},
{
  id: 40,
  name: "Palworld",
  category: ["Sinh tồn", "Mô phỏng", "Nhập vai"],
  img: "assets/images/palworld.jpg",
  price: 650000,
  oldPrice: 790000,
  description: "Thế giới mở nơi bạn bắt, huấn luyện và chiến đấu cùng những sinh vật kỳ lạ gọi là Pal.",
  filterClass: ["sur", "sim", "rpg"]
},
{
  id: 41,
  name: "ARK: Survival Ascended",
  category: ["Sinh tồn", "Hành động", "Mô phỏng"],
  img: "assets/images/ark-survival.jpg",
  price: 890000,
  oldPrice: 1120000,
  description: "Sinh tồn giữa thế giới khủng long đầy nguy hiểm với đồ họa nâng cấp hoàn toàn.",
  filterClass: ["sur", "act", "sim"]
},
{
  id: 42,
  name: "Project Zomboid",
  category: ["Sinh tồn", "Chiến thuật", "Mô phỏng"],
  img: "assets/images/projectzomboid.jpg",
  price: 240000,
  oldPrice: 310000,
  description: "Game sinh tồn zombie cực kỳ chi tiết, nơi cái chết luôn rình rập mọi hành động của bạn.",
  filterClass: ["sur", "str", "sim"]
},
{
  id: 43,
  name: "No Man's Sky",
  category: ["Phiêu lưu", "Mô phỏng"],
  img: "assets/images/nomanssky.jpg",
  price: 750000,
  oldPrice: 940000,
  description: "Khám phá hàng tỷ hành tinh trong vũ trụ rộng lớn và không ngừng phát triển.",
  filterClass: ["adv", "sim"]
},
{
  id: 44,
  name: "Control",
  category: ["Hành động", "Kinh dị"],
  img: "assets/images/control.jpg",
  price: 690000,
  oldPrice: 890000,
  description: "Trò chơi siêu nhiên độc đáo với lối chơi hấp dẫn và môi trường bí ẩn đầy năng lực siêu nhiên.",
  filterClass: ["act", "horror"]
},
{
  id: 45,
  name: "The Forest",
  category: ["Sinh tồn", "Kinh dị"],
  img: "assets/images/theforest.jpg",
  price: 390000,
  oldPrice: 480000,
  description: "Sau vụ rơi máy bay, bạn phải sinh tồn giữa khu rừng đầy quái vật đột biến và bí ẩn.",
  filterClass: ["sur", "horror"]
},
{
  id: 46,
  name: "Slay the Spire",
  category: ["Chiến thuật", "Nhập vai"],
  img: "assets/images/slaythespire.jpg",
  price: 210000,
  oldPrice: 320000,
  description: "Game thẻ bài kết hợp roguelike nơi bạn xây dựng bộ bài để vượt qua kẻ thù và leo tháp.",
  filterClass: ["str", "rpg"]
},
{
  id: 47,
  name: "Terraria",
  category: ["Phiêu lưu", "Sinh tồn"],
  img: "assets/images/terraria.jpg",
  price: 190000,
  oldPrice: 270000,
  description: "Thế giới 2D mở với vô số khả năng xây dựng, khám phá và chiến đấu.",
  filterClass: ["adv", "sur"]
},
{
  id: 48,
  name: "Don't Starve Together",
  category: ["Sinh tồn", "Mô phỏng"],
  img: "assets/images/dontstarve.jpg",
  price: 210000,
  oldPrice: 330000,
  description: "Game sinh tồn kỳ dị với phong cách đồ họa riêng biệt và cơ chế chơi hợp tác hấp dẫn.",
  filterClass: ["sur", "sim"]
},
{
  id: 49,
  name: "Outer Wilds",
  category: ["Phiêu lưu", "Mô phỏng"],
  img: "assets/images/outerwilds.jpg",
  price: 440000,
  oldPrice: 570000,
  description: "Một chuyến phiêu lưu không gian độc đáo với vòng lặp thời gian và các bí ẩn thiên văn kỳ lạ.",
  filterClass: ["adv", "sim"]
},
 {
    id: 50,
    name: "Doom Eternal",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/doom-eternal.jpg",
    price: 600000,
    oldPrice: 800000,
    description: "Trận chiến sinh tử chống lại quái vật địa ngục với gameplay nhanh và mãn nhãn.",
    filterClass: ["act", "adv"]
  },
  {
    id: 51,
    name: "Minecraft",
    category: ["Phiêu lưu", "Mô phỏng"],
    img: "assets/images/minecraft.jpg",
    price: 300000,
    oldPrice: 350000,
    description: "Tựa game xây dựng thế giới mở nổi tiếng với khả năng sáng tạo vô hạn và chế độ sinh tồn.",
    filterClass: ["adv", "sim"]
  },
  {
    id: 52,
    name: "Valorant",
    category: ["Hành động","Thể thao"],
    img: "assets/images/valorant.jpg",
    price: 0,
    oldPrice: 0,
    description: "Game bắn súng chiến thuật nhiều người chơi với các nhân vật có kỹ năng độc đáo.",
    filterClass: ["act","sports"]
  },
  {
    id: 53,
    name: "Death Stranding",
    category: ["Phiêu lưu", "Mô phỏng", "Hành động"],
    img: "assets/images/death-stranding.jpg",
    price: 700000,
    oldPrice: 950000,
    description: "Một trải nghiệm phiêu lưu kỳ lạ và đầy cảm xúc trong thế giới hậu tận thế.",
    filterClass: ["adv", "sim", "act"]
  },
  {
    id: 54,
    name: "Resident Evil Village",
    category: ["Kinh dị", "Hành động", "Phiêu lưu"],
    img: "assets/images/resident-evil-village.jpg",
    price: 650000,
    oldPrice: 800000,
    description: "Tiếp tục câu chuyện kinh dị sống còn với đồ họa và âm thanh sống động.",
    filterClass: ["horror", "act", "adv"]
  },
  {
    id: 55,
    name: "Shadow of the Tomb Raider",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/shadow-of-the-tomb-raider.jpg",
    price: 480000,
    oldPrice: 600000,
    description: "Cuộc phiêu lưu của Lara Croft trong hành trình tìm kiếm sự thật và sinh tồn nguy hiểm.",
    filterClass: ["adv", "act"]
  },
  {
    id: 56,
    name: "Sekiro: Shadows Die Twice",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/sekiro.jpg",
    price: 600000,
    oldPrice: 750000,
    description: "Game hành động chặt chém khó nhằn lấy bối cảnh Nhật Bản thời phong kiến.",
    filterClass: ["act", "adv"]
  },
  {
    id: 57,
    name: "Mass Effect Legendary Edition",
    category: ["Nhập vai", "Hành động", "Phiêu lưu"],
    img: "assets/images/mass-effect-legendary.jpg",
    price: 850000,
    oldPrice: 1000000,
    description: "Bộ ba game nhập vai khoa học viễn tưởng kinh điển với nhiều lựa chọn cốt truyện.",
    filterClass: ["rpg", "act", "adv"]
  },
  {
    id: 58,
    name: "Planet Zoo",
    category: ["Mô phỏng", "Chiến thuật"],
    img: "assets/images/planet-zoo.jpg",
    price: 450000,
    oldPrice: 580000,
    description: "Xây dựng và quản lý sở thú với hệ thống sinh thái đa dạng và chi tiết.",
    filterClass: ["sim", "str"]
  },
  {
    id: 59,
    name: "Ori and the Will of the Wisps",
    category: ["Phiêu lưu", "Nhập vai", "Hành động"],
    img: "assets/images/ori-will-of-the-wisps.jpg",
    price: 400000,
    oldPrice: 500000,
    description: "Một câu chuyện cảm động với gameplay platformer tuyệt đẹp và lôi cuốn.",
    filterClass: ["adv", "rpg", "act"]
  },
  {
    id: 60,
    name: "Metro Exodus",
    category: ["Hành động", "Sinh tồn", "Phiêu lưu"],
    img: "assets/images/metro-exodus.jpg",
    price: 530000,
    oldPrice: 700000,
    description: "Khám phá vùng đất hậu tận thế trong một thế giới mở rộng lớn và nguy hiểm.",
    filterClass: ["act", "sur", "adv"]
  },
  {
    id: 61,
    name: "The Outer Worlds",
    category: ["Nhập vai", "Phiêu lưu", "Hành động"],
    img: "assets/images/the-outer-worlds.jpg",
    price: 520000,
    oldPrice: 700000,
    description: "Game nhập vai khoa học viễn tưởng với lối chơi tự do và cốt truyện hấp dẫn.",
    filterClass: ["rpg", "adv", "act"]
  },
  {
    id: 62,
    name: "Divinity: Original Sin 2",
    category: ["Nhập vai", "Chiến thuật", "Phiêu lưu"],
    img: "assets/images/divinity-original-sin-2.jpg",
    price: 600000,
    oldPrice: 750000,
    description: "Game nhập vai chiến thuật theo lượt với cốt truyện phong phú và thế giới mở rộng lớn.",
    filterClass: ["rpg", "str", "adv"]
  },
  {
    id: 63,
    name: "Cuphead",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/cuphead.jpg",
    price: 350000,
    oldPrice: 400000,
    description: "Game platformer với phong cách hoạt hình cổ điển và gameplay khó nhằn.",
    filterClass: ["act", "adv"]
  },
  {
    id: 64,
    name: "Celeste",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/celeste.jpg",
    price: 300000,
    oldPrice: 350000,
    description: "Game platformer thử thách cao với câu chuyện cảm động về sự vượt lên bản thân.",
    filterClass: ["act", "adv"]
  },
  {
    id: 65,
    name: "Subnautica",
    category: ["Sinh tồn", "Phiêu lưu", "Mô phỏng"],
    img: "assets/images/subnautica.jpg",
    price: 450000,
    oldPrice: 550000,
    description: "Khám phá đại dương ngoài hành tinh, xây dựng căn cứ và sinh tồn dưới nước.",
    filterClass: ["sur", "adv", "sim"]
  },
  {
    id: 66,
    name: "The Talos Principle",
    category: ["Phiêu lưu"],
    img: "assets/images/talos-principle.jpg",
    price: 300000,
    oldPrice: 400000,
    description: "Game giải đố trí tuệ với cốt truyện triết học sâu sắc.",
    filterClass: [ "adv"]
  },
  {
    id: 67,
    name: "Hollow Knight",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/hollow-knight.jpg",
    price: 350000,
    oldPrice: 450000,
    description: "Game metroidvania với lối chơi khám phá sâu rộng và phong cách nghệ thuật tuyệt đẹp.",
    filterClass: ["act", "adv"]
  },
  {
    id: 68,
    name: "Slime Rancher",
    category: ["Mô phỏng", "Phiêu lưu"],
    img: "assets/images/slime-rancher.jpg",
    price: 400000,
    oldPrice: 480000,
    description: "Game mô phỏng vui nhộn về việc nuôi và chăm sóc slime trong thế giới đầy màu sắc.",
    filterClass: ["sim", "adv"]
  },
  {
    id: 69,
    name: "Factorio",
    category: ["Chiến thuật", "Mô phỏng"],
    img: "assets/images/factorio.jpg",
    price: 550000,
    oldPrice: 650000,
    description: "Game xây dựng và tối ưu hóa nhà máy tự động hóa đầy thử thách.",
    filterClass: ["str", "sim"]
  },
   {
    id: 70,
    name: "Ghostrunner",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/ghostrunner.jpg",
    price: 450000,
    oldPrice: 600000,
    description: "Game hành động tốc độ cao, parkour kết hợp chặt chém trong thế giới cyberpunk.",
    filterClass: ["act", "adv"]
  },
  {
    id: 71,
    name: "Ori and the Blind Forest",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/ori-blind-forest.jpg",
    price: 320000,
    oldPrice: 400000,
    description: "Tiền thân của Ori and the Will of the Wisps, game platformer đầy cảm xúc và nghệ thuật.",
    filterClass: ["adv", "act"]
  },
  {
    id: 72,
    name: "Frostpunk",
    category: ["Chiến thuật", "Mô phỏng", "Sinh tồn"],
    img: "assets/images/frostpunk.jpg",
    price: 480000,
    oldPrice: 600000,
    description: "Game xây dựng thành phố sinh tồn trong bối cảnh thời kỳ băng giá khắc nghiệt.",
    filterClass: ["str", "sim", "sur"]
  },
  {
    id: 73,
    name: "Darkest Dungeon",
    category: ["Chiến thuật", "Nhập vai", "Phiêu lưu"],
    img: "assets/images/darkest-dungeon.jpg",
    price: 400000,
    oldPrice: 520000,
    description: "Game nhập vai chiến thuật theo lượt với yếu tố kinh dị và sinh tồn tâm lý.",
    filterClass: ["rpg", "str", "adv"]
  },
  {
    id: 74,
    name: "Cuphead: The Delicious Last Course",
    category: ["Hành động"],
    img: "assets/images/cuphead-dlc.jpg",
    price: 250000,
    oldPrice: 300000,
    description: "DLC mới của Cuphead với những màn boss đầy thử thách và đồ họa hoạt hình đẹp mắt.",
    filterClass: ["act"]
  },
  {
      id: 75,
      name: "Disco Elysium",
      category: ["Phiêu lưu", "Nhập vai"],
      img: "assets/images/disco-elysium.jpg",
      price: 650000,
      oldPrice: 800000,
      description: "Game nhập vai điều tra tội phạm với cốt truyện sâu sắc, tập trung vào câu chuyện và sự phát triển nhân vật trong thế giới mở.",
      filterClass: ["adv", "rpg"]
  },
  {
    id: 76,
    name: "Kerbal Space Program",
    category: ["Mô phỏng", "Chiến thuật"],
    img: "assets/images/kerbal-space-program.jpg",
    price: 400000,
    oldPrice: 500000,
    description: "Game mô phỏng khoa học, xây dựng tàu vũ trụ và khám phá hệ mặt trời.",
    filterClass: ["sim", "str"]
  },
  {
    id: 77,
    name: "Stellaris",
    category: ["Chiến thuật", "Mô phỏng"],
    img: "assets/images/stellaris.jpg",
    price: 550000,
    oldPrice: 700000,
    description: "Game chiến lược vũ trụ lớn, quản lý đế chế trong thiên hà rộng lớn.",
    filterClass: ["str", "sim"]
  },
  {
    id: 78,
    name: "Tales of Arise",
    category: ["Nhập vai", "Hành động", "Phiêu lưu"],
    img: "assets/images/tales-of-arise.jpg",
    price: 700000,
    oldPrice: 850000,
    description: "Game nhập vai hành động với cốt truyện hấp dẫn và đồ họa anime tuyệt đẹp.",
    filterClass: ["rpg", "adv", "act"]
  },
  {
    id: 79,
    name: "Dark Souls III",
    category: ["Hành động", "Nhập vai", "Phiêu lưu"],
    img: "assets/images/dark-souls-3.jpg",
    price: 600000,
    oldPrice: 750000,
    description: "Game hành động nhập vai khó nhằn với thế giới tối tăm và lối chơi thách thức.",
    filterClass: ["act", "rpg", "adv"]
  },
  {
      id: 80,
      name: "Death's Door",
      category: ["Hành động", "Phiêu lưu"],
      img: "assets/images/deaths-door.jpg",
      price: 550000,
      oldPrice: 650000,
      description: "Bạn vào vai một con quạ thu thập linh hồn, chiến đấu qua những vùng đất kỳ lạ với lối chơi hành động chặt chém kết hợp giải đố.",
      filterClass: ["act", "adv"]
  },
  {
      id: 81,
      name: "Gris",
      category: ["Phiêu lưu"],
      img: "assets/images/gris.jpg",
      price: 400000,
      oldPrice: 480000,
      description: "Một hành trình cảm xúc đầy nghệ thuật theo chân cô gái Gris trong thế giới trừu tượng, nơi bạn khám phá thông qua giải đố",
      filterClass: ["adv"]
  },
  {
    id: 82,
    name: "Valheim",
    category: ["Sinh tồn", "Phiêu lưu", "Mô phỏng"],
    img: "assets/images/valheim.jpg",
    price: 420000,
    oldPrice: 500000,
    description: "Game sinh tồn thế giới mở lấy cảm hứng từ thần thoại Bắc Âu.",
    filterClass: ["sur", "adv", "sim"]
  },
  {
    id: 83,
    name: "Psychonauts 2",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/psychonauts-2.jpg",
    price: 550000,
    oldPrice: 700000,
    description: "Game phiêu lưu hành động với cốt truyện hài hước và phong cách nghệ thuật độc đáo.",
    filterClass: ["adv", "act"]
  },
  {
    id: 84,
    name: "Monster Hunter: World",
    category: ["Hành động", "Phiêu lưu", "Nhập vai"],
    img: "assets/images/monster-hunter-world.jpg",
    price: 600000,
    oldPrice: 750000,
    description: "Truyền thuyết săn quái vật mở rộng với nhiều con thú và môi trường đa dạng.",
    filterClass: ["act", "rpg", "adv"]
  },
  {
    id: 85,
    name: "The Long Dark",
    category: ["Sinh tồn", "Phiêu lưu"],
    img: "assets/images/the-long-dark.jpg",
    price: 450000,
    oldPrice: 580000,
    description: "Game sinh tồn trong môi trường hoang dã lạnh giá với gameplay chậm rãi và căng thẳng.",
    filterClass: ["sur", "adv"]
  },
  {
    id: 86,
    name: "Inside",
    category: ["Phiêu lưu"],
    img: "assets/images/inside.jpg",
    price: 300000,
    oldPrice: 400000,
    description: "Game platformer giải đố đen tối, tạo cảm giác hồi hộp và sâu sắc.",
    filterClass: ["adv"]
  },
  {
    id: 87,
    name: "RimWorld",
    category: ["Chiến thuật", "Mô phỏng", "Sinh tồn"],
    img: "assets/images/rimworld.jpg",
    price: 500000,
    oldPrice: 600000,
    description: "Game mô phỏng xây dựng thuộc địa với các yếu tố sinh tồn và chiến thuật phức tạp.",
    filterClass: ["sim", "str", "sur"]
  },
  {
    id: 88,
    name: "Hotline Miami",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/hotline-miami.jpg",
    price: 250000,
    oldPrice: 320000,
    description: "Game hành động góc nhìn top-down với nhịp độ nhanh và phong cách neon độc đáo.",
    filterClass: ["act", "adv"]
  },
  {
    id: 89,
    name: "Tropico 6",
    category: ["Chiến thuật", "Mô phỏng"],
    img: "assets/images/tropico-6.jpg",
    price: 600000,
    oldPrice: 700000,
    description: "Game xây dựng và quản lý đảo quốc với phong cách hài hước và nhiều tính năng đa dạng.",
    filterClass: ["str", "sim"]
  },
  {
    id: 90,
    name: "Returnal",
    category: ["Hành động"],
    img: "assets/images/returnal.jpg",
    price: 550000,
    oldPrice: 700000,
    description: "Tựa game bắn súng góc nhìn thứ ba pha, nơi bạn vào vai Selene — một phi hành gia mắc kẹt trong vòng lặp thời gian.",
    filterClass: ["act"]
      },
  {
    id: 91,
    name: "Dark Souls Remastered",
    category: ["Nhập vai", "Hành động", "Phiêu lưu"],
    img: "assets/images/dark-souls-remastered.jpg",
    price: 650000,
    oldPrice: 800000,
    description: "Game nhập vai turn-based với cốt truyện phong phú và cơ chế chiến đấu đa dạng.",
    filterClass: ["rpg", "act", "adv"]
  },
  {
    id: 92,
    name: "Batman: Arkham Knight",
    category: ["Hành động", "Phiêu lưu", "Nhập vai"],
    img: "assets/images/batman-arkham-knight.jpg",
    price: 300000,
    oldPrice: 350000,
    description: "Game hành động phiêu lưu về Batman với cốt truyện sâu sắc và lối chơi kịch tính.",
    filterClass: ["act", "adv", "rpg"]
  },
  {
      id: 93,
      name: "Assassin's Creed Odyssey",
      category: ["Hành động", "Phiêu lưu", "Nhập vai"],
      img: "assets/images/assassins-creed-odyssey.jpg",
      price: 600000,
      oldPrice: 720000,
      description: "Hành trình nhập vai vào một chiến binh Sparta trong thế giới Hy Lạp cổ đại rộng lớn, nơi bạn lựa chọn định mệnh của mình.",
      filterClass: ["act", "adv", "rpg"]
  },
  {
    id: 94,
    name: "Horizon Zero Dawn",
    category: ["Phiêu lưu", "Hành động"],
    img: "assets/images/horizon-zero-dawn.jpg",
    price: 700000,
    oldPrice: 850000,
    description: "Game hành động phiêu lưu trong thế giới mở rộng lớn với robot và câu chuyện hấp dẫn.",
    filterClass: ["adv", "act"]
  },
  {
    id: 95,
    name: "Amnesia: The Bunker",
    category: ["Kinh dị", "Sinh tồn"],
    img: "assets/images/amnesia-the-bunker.jpg",
    price: 400000,
    oldPrice: 520000,
    description: "Trò chơi kinh dị sinh tồn góc nhìn thứ nhất, đặt bạn vào một hầm ngầm thời Thế chiến với mối đe dọa rình rập từng phút.",
    filterClass: ["horror", "sur"]
  },
  {
    id: 96,
    name: "HITMAN 3",
    category: ["Hành động", "Nhập vai"],
    img: "assets/images/hitman-3.jpg",
    price: 350000,
    oldPrice: 450000,
    description:"Hóa thân thành sát thủ Agent 47 trong những nhiệm vụ ám sát tinh vi trên toàn thế giới với lối chơi tự do và đầy chiến lược.",
    filterClass: ["action", "rpg"]
  },
  {
    id: 97,
    name: "Dark Souls II",
    category: ["Hành động", "Nhập vai", "Phiêu lưu"],
    img: "assets/images/dark-souls-2.jpg",
    price: 500000,
    oldPrice: 650000,
    description: "Phần tiếp theo của series Dark Souls với thử thách và lối chơi đặc trưng.",
    filterClass: ["act", "rpg", "adv"]
  },
  {
    id: 98,
    name: "Bioshock Infinite",
    category: ["Hành động", "Phiêu lưu"],
    img: "assets/images/bioshock-infinite.jpg",
    price: 450000,
    oldPrice: 600000,
    description: "Game bắn súng góc nhìn thứ nhất với cốt truyện phong phú và thế giới đầy màu sắc.",
    filterClass: ["act", "adv"]
  },
  {
    id: 99,
    name: "Fallout 4",
    category: ["Nhập vai", "Hành động"],
    img:  "assets/images/fallout-4.jpg",
    price: 550000,
    oldPrice: 700000,
    description: "Game nhập vai hành động với nhiều lựa chọn và thế giới hậu tận thế rộng lớn.",
    filterClass: ["rpg", "act"]
  },
  {
    id: 100,
    name: "Darksiders III",
    category: ["Hành động", "Phiêu lưu", "Nhập vai"],
    img: "assets/images/darksiders-3.jpg",
    price: 480000,
    oldPrice: 600000,
    description: "Game hành động phiêu lưu với phong cách chiến đấu nhanh và cốt truyện hấp dẫn.",
    filterClass: ["act", "adv", "rpg"]
  }
];


const ITEMS_PER_PAGE = 32;
let currentFilter = "all";
let currentPriceFilter = "all";
let currentPage = 1;
let searchKeyword = "";

function renderGames() {
  const container = document.getElementById("game-list");
  container.classList.remove("show");

  setTimeout(() => {
    let filteredGames = currentFilter === "all"
  ? [...games]
  : games.filter(g => Array.isArray(g.filterClass) && g.filterClass.includes(currentFilter));

    if (searchKeyword.trim()) {
      filteredGames = filteredGames.filter(g => g.name.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    filteredGames = filteredGames.filter(g => {
      const price = g.price;
      switch (currentPriceFilter) {
        case "free": return price === 0;
        case "50000": return price >= 0 && price <= 50000;
        case "100000": return price >= 50000 && price <= 200000;
        case "200000": return price >= 200000 && price <= 300000;
        case "500000": return price >= 300000 && price <=500000;
        case "more": return price >= 500000;
        default: return true;
      }
    });

    const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);
    currentPage = Math.min(currentPage, totalPages || 1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageGames = filteredGames.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    container.innerHTML = "";

    if (pageGames.length === 0) {
      container.innerHTML = '<p class="text-center text-muted">No games found.</p>';
    }

    pageGames.forEach(game => {
      const col = document.createElement("div");
      col.className = `col-lg-3 col-md-6 game-item ${game.filterClass}`;

      col.innerHTML = `
  <div class="card h-100 shadow-sm rounded-4 overflow-hidden">
    <img src="${game.img}" alt="${game.name}" class="card-img-top rounded-top-4" style="cursor: pointer;" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${game.name}</h5>
      <p class="card-text flex-grow-1">${game.description}</p>
      <p class="card-text fw-bold">
        ${game.oldPrice && game.oldPrice > game.price ? `<span style="text-decoration: line-through; color: #888; margin-right: 8px;">${game.oldPrice.toLocaleString()} VNĐ</span>` : ''}
        ${game.price === 0 ? 'Miễn phí' : `${game.price.toLocaleString()} VNĐ`}
      </p>
      <a href="product-details.html?id=${game.id}" class="btn btn-primary rounded-pill mt-auto buy-now-btn">Mua ngay</a>
    </div>
  </div>
`;
      // Cả ảnh và nút đều trỏ link kèm id
      const thumb = col.querySelector(".card-img-top");
      thumb.addEventListener("click", () => {
        window.location.href = `product-details.html?id=${game.id}`;
      });

      container.appendChild(col);
    });

    container.classList.add("show");
    renderPagination(totalPages);
  }, 200);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  if (totalPages <= 1) return;

  const createPageButton = (content, isDisabled, isActive, onClick) => {
    const li = document.createElement("li");
    li.className = `page-item ${isDisabled ? "disabled" : ""} ${isActive ? "active" : ""}`;
    li.innerHTML = `
      <a class="page-link rounded-circle d-flex align-items-center justify-content-center"
         style="width: 40px; height: 40px;" href="#">${content}</a>`;
    if (!isDisabled) li.onclick = onClick;
    return li;
  };

  // Nút về trang đầu <<
  pagination.appendChild(createPageButton('<<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage = 1;
    renderGames();
  }));

  // Nút lùi <
  pagination.appendChild(createPageButton('<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage--;
    renderGames();
  }));

  const maxVisible = 3; // số trang hiển thị
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = startPage + maxVisible - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  if (startPage > 1) {
    pagination.appendChild(createPageButton("1", false, currentPage === 1, e => {
      e.preventDefault();
      currentPage = 1;
      renderGames();
    }));
    if (startPage > 2) {
      const dots = document.createElement("li");
      dots.className = "page-item disabled";
      dots.innerHTML = `<span class="page-link">...</span>`;
      pagination.appendChild(dots);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.appendChild(createPageButton(i, false, currentPage === i, e => {
      e.preventDefault();
      currentPage = i;
      renderGames();
    }));
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement("li");
      dots.className = "page-item disabled";
      dots.innerHTML = `<span class="page-link">...</span>`;
      pagination.appendChild(dots);
    }
    pagination.appendChild(createPageButton(totalPages, false, currentPage === totalPages, e => {
      e.preventDefault();
      currentPage = totalPages;
      renderGames();
    }));
  }

  // Nút tiến >
  pagination.appendChild(createPageButton('>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage++;
    renderGames();
  }));

  // Nút đến trang cuối >>
  pagination.appendChild(createPageButton('>>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage = totalPages;
    renderGames();
  }));
}


function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const filter = btn.dataset.filter;
      if (filter !== currentFilter) {
        currentFilter = filter;
        currentPage = 1;
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGames();
      }
    });
  });
}

function setupPriceFilter() {
  const priceBtns = document.querySelectorAll(".price-filter-btn");
  priceBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const price = btn.dataset.price;
      if (price !== currentPriceFilter) {
        currentPriceFilter = price;
        currentPage = 1;
        priceBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGames();
      }
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchKeyword = e.target.value;
      currentPage = 1;
      renderGames();
    });
  }
}

// MAIN
window.onload = () => {
  setupFilterButtons();
  setupPriceFilter();
  setupSearch();
  renderGames();
};
