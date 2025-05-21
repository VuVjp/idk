const ITEMS_PER_PAGE = 9;
let currentFilter = "all";
let searchKeyword = "";
let currentPage = 1;

const news = [
  {
    id: 1,
    title: "Sự kiện mùa hè giảm giá 70%",
    description: "Tham gia sự kiện lớn nhất năm với ưu đãi cực sốc!",
    img: "assets/images/tintuc1.jpg",
    date: "2025-05-19",
    filterClass: ["event", "promotion"]
  },
  {
    id: 2,
    title: "Ra mắt game mới cực hot",
    description: "Trải nghiệm tựa game hành động nhập vai siêu hấp dẫn!",
    img: "assets/images/helldivers.jpg",
    date: "2025-05-18",
    filterClass: ["release"]
  },
  {
    id: 3,
    title: "Hollow Knight - Sự kiện đua top nhận thưởng",
    description: "Leo bảng xếp hạng và nhận phần quà cực chất!",
    img: "assets/images/newsdetailimg-3-1.jpg",
    date: "2025-05-17",
    filterClass: ["event"]
  },
  {
  id: 4,
  title: "Thông Tin Bản Cập Nhật 25.10 của Liên Minh Huyền Thoại",
  description: "Khám phá những thay đổi tướng, sự kiện vũ trụ và trang phục mới cực hấp dẫn!",
  img: "assets/images/newsdetailimg-4-1.jpg",
  date: "2025-05-19",
  filterClass: ["release"]
},
{
  id: 5,
  title: "Split Fiction: Game viễn tưởng hành động ra mắt",
  description: "Khám phá thế giới tương lai đầy rạn nứt và hỗn loạn trong Split Fiction!",
  img: "assets/images/split-fiction.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 6,
  title: "Rust Jungle Update: Khám phá rừng rậm hoang dã!",
  description: "Bản cập nhật Jungle mang đến hệ sinh thái hoàn toàn mới cho thế giới Rust!",
  img: "assets/images/newsdetailimg-6-1.jpg", 
  date: "2025-05-19",
  filterClass: ["release"]
},
{
  id: 7,
  title: "Assassin's Creed Shadows - Bản Cập Nhật 1.0.4",
  description: "Khám phá nhiệm vụ mới, tiểu sử nhân vật và hơn 50 sửa lỗi từ bản vá 1.0.4!",
  img: "assets/images/newsdetailimg-7-1.jpg",
  date: "2025-05-20",
  filterClass: ["release", "event"]
},
{
  id: 8,
  title: "Call of Duty®: Modern Warfare® II - Cập Nhật Season 3",
  description: "Khám phá các thay đổi và bổ sung mới nhất trong bản cập nhật Season 3 của MWII!",
  img: "assets/images/Call of Duty-Modern Warfare-II.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 9,
  title: "Clair Obscur: Expedition 33 - Patch Notes v1.2.3",
  description: "Khám phá những thay đổi và tối ưu hóa mới nhất trong bản cập nhật 1.2.3 của Expedition 33.",
  img: "assets/images/Clair-Obscur.jpg", 
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 10,
  title: "Kingdom Come II – Cập Nhật Patch 1.3",
  description: "Tính năng đua ngựa, tùy chỉnh khiên và DLC mới đã cập bến!",
  img: "assets/images/Kingdom-Come-II.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 11,
  title: "Baldur's Gate 3 - Hotfix #30 đã ra mắt",
  description: "Hotfix #30 giải quyết hàng loạt lỗi và cải thiện hiệu năng trò chơi.",
  img: "assets/images/newsdetailimg-11-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 12,
  title: "Ford tham gia Farming Simulator với Plains & Prairies Pack!",
  description: "Gói mở rộng mới đánh dấu sự xuất hiện đầu tiên của Ford trong thế giới nông nghiệp mô phỏng!",
  img: "assets/images/farming-simulator.jpg",
  date: "2025-06-03",
  filterClass: ["release"]
},
{
  id: 13,
  title: "The Sims™ 4 - Hệ thống kinh doanh và sở thích!",
  description: "Người chơi có thể mở tiệm bánh, thư viện, và tạo không gian độc đáo theo đam mê sáng tạo!",
  img: "assets/images/newsdetailimg-13-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 14,
  title: "Cyberpunk 2077 - Cập Nhật 2.2: Cá nhân hóa & công nghệ xe mới",
  description: "Bản cập nhật 2.2 cho phép tùy chỉnh V sâu hơn, nâng cấp chế độ ảnh, thêm xe và công nghệ CrystalCoat™!",
  img: "assets/images/newsdetailimg-14-2.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 15,
  title: "ELDEN RING: Nightreign – Chiến trường bóng tối mở ra!",
  description: "Trải nghiệm chế độ co-op sinh tồn mới trong Elden Ring: Nightreign – Đối mặt với màn đêm và những Nightlord đáng sợ!",
  img: "assets/images/newsdetailimg-15-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 16,
  title: "The Witcher in Concert – Hòa nhạc huyền thoại sắp bắt đầu!",
  description: "Một trải nghiệm âm nhạc đắm chìm từ The Witcher 3: Wild Hunt sắp ra mắt khán giả toàn cầu!",
  img: "assets/images/newsdetailimg-16-1.jpg",
  date: "2025-04-22",
  filterClass: ["event"]
},
{
    id: 17,
    title: "Starfield - Cập nhật 1.15.214 (BETA): Tối ưu, sửa lỗi và hỗ trợ Creations!",
    description: "Bethesda phát hành bản cập nhật thử nghiệm mới với hàng loạt cải tiến, sửa lỗi và hỗ trợ công cụ sáng tạo cho Starfield!",
    img: "assets/images/starfield.jpg",
    date: "2025-05-06",
    filterClass: ["release"]
},
{
  id: 18,
  title: "Dustborn – Sức mạnh của âm nhạc và ngôn từ",
  description: "Khám phá thế giới độc tài hậu tận thế với âm nhạc punk rock và câu chuyện của Simon Poole trong Dustborn.",
  img: "assets/images/newsdetailimg-18-1.jpg",
  date: "2024-08-20",
  filterClass: ["event"]
},
{
  id: 19,
  title: "Forza Horizon 5 – Lamborghini Revuelto & Chơi đa nền tảng!",
  description: "Khám phá xe Lamborghini Revuelto cùng chế độ nhiều người chơi liên nền tảng trong bản cập nhật Horizon Realms!",
  img: "assets/images/newsdetailimg-19-1.jpg",
  date: "2025-05-20",
  filterClass: ["release", "event"]
},
{
  id: 20,
  title: "Dying Light 2 - Hotfix 1.22.4: Sửa lỗi mùa xuân & tối ưu trải nghiệm",
  description: "Bản cập nhật 1.22.4 khắc phục hàng loạt lỗi liên quan đến HUD, Steam Deck, Tower Raid và hơn thế nữa.",
  img: "assets/images/dyinglight2.jpg",
  date: "2025-05-12",
  filterClass: ["update"]
},
{
  id: 21,
  title: "Red Dead Online: Tháng phần thưởng khủng cho mọi vai trò!",
  description: "Tăng gấp đôi RDO$, XP, trang phục miễn phí và khuyến mãi khủng dành cho Bounty Hunter, Trader, Collector, Naturalist và nhiều hơn!",
  img: "assets/images/rdr2.jpg",
  date: "2025-05-20",
  filterClass: ["event", "update"]
},
{
  id: 22,
  title: "Alan Wake II - Bản cập nhật PC tối tân cùng DLSS 4 và RTX Mega Geometry",
  description: "Alan Wake II trở thành tựa game đầu tiên hỗ trợ công nghệ NVIDIA RTX Mega Geometry, DLSS 4 và Ultra Ray Tracing!",
  img: "assets/images/alanwake2.jpg",
  date: "2025-01-30",
  filterClass: ["update", "tech"]
},
{
  id: 23,
  title: "Little Nightmares II – Hành trình ám ảnh và thành công vang dội",
  description: "Dòng game Little Nightmares đạt hơn 12 triệu bản bán ra, đánh dấu cột mốc ấn tượng cho một thương hiệu kinh dị độc đáo.",
  img: "assets/images/littlenightmares2.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 24,
  title: "Sea of Thieves - Cuộc thi Style of Thieves Mùa 15 trở lại!",
  description: "Mùa thời trang cướp biển chính thức khởi động từ 12 đến 15/5 với cơ hội nhận găng tay hiếm!",
  img: "assets/images/seaofthieves.jpg",
  date: "2025-05-20",
  filterClass: ["event"]
},
{
  id: 25,
  title: "Project Zomboid Build 42 Unstable chính thức ra mắt",
  description: "Trải nghiệm bản dựng 42 với những thay đổi lớn về săn bắn, chế tạo và thế giới mở!",
  img: "assets/images/projectzomboid.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 26,
  title: "No Man's Sky: Bản cập nhật RELICS – Khám phá thời tiền sử vũ trụ!",
  description: "Đào bới xương hóa thạch, xây dựng bảo tàng và đối đầu sinh vật cổ đại trong bản cập nhật kỳ quặc nhưng hấp dẫn nhất từ trước tới nay!",
  img: "assets/images/newsdetailimg-26-1.jpg",
  date: "2025-03-26",
  filterClass: ["release", "event"]
},
{
  id: 27,
  title: "Terraria x Don't Starve Together – Bản giao thoa bất ngờ!",
  description: "Khám phá bản cập nhật độc đáo đưa hai thế giới sinh tồn giao thoa trong bản patch 1.4.3!",
  img: "assets/images/newsdetailimg-27-2.jpg",
  date: "2025-05-20",
  filterClass: ["event"]
},
{
  id: 28,
  title: "Don't Starve Together – Cập nhật kỹ năng & skin Resurrected!",
  description: "Cây kỹ năng cho Walter, Wendy, Wortox ra mắt cùng hàng loạt vật phẩm và skin độc quyền.",
  img: "assets/images/newsdetailimg-28-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 29,
  title: "DOOM: The Dark Ages – Hồi sinh huyền thoại trong thời đại đen tối",
  description: "Bethesda chính thức công bố DOOM: The Dark Ages – phần tiền truyện đầy máu lửa của dòng game huyền thoại, ra mắt năm 2025!",
  img: "assets/images/doom-eternal.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 30,
  title: "VALORANT - Cập Nhật 10.09: Điều chỉnh Tejo, Breach & Siêu Tốc",
  description: "Tejo bị giảm sức mạnh, Breach bị chỉnh sửa hiệu ứng choáng và nhiều thay đổi khác trong bản 10.09!",
  img: "assets/images/newsdetailimg-30-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 31,
  title: "Sekiro: Shadows Die Twice – Bản cập nhật miễn phí với chế độ Gauntlet và trang phục mới",
  description: "Thử thách mới, trang phục độc đáo và chế độ chiến đấu khốc liệt trong bản cập nhật miễn phí của Sekiro đã ra mắt!",
  img: "assets/images/newsdetailimg-31-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 32,
  title: "The Outer Worlds – Cập nhật Avowed 1.4 & Lộ trình tương lai!",
  description: "Bản cập nhật 1.4 mang đến chế độ mới, cải tiến bản đồ và lộ trình phát triển hấp dẫn cho Avowed!",
  img: "assets/images/newsdetailimg-32-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 33,
  title: "Stellaris - First Contact & Galactic Paragons đã có mặt!",
  description: "Khám phá hai bản mở rộng ấn tượng và bản cập nhật 3.9 'Caelum' với nhiều thay đổi đột phá cho Stellaris: Console Edition!",
  img: "assets/images/newsdetailimg-33-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 34,
  title: "Tales of Arise – Beyond the Dawn: Hành trình sau chiến thắng",
  description: "Trở lại thế giới Tales of Arise trong bản mở rộng Beyond the Dawn với cốt truyện hậu kỳ và nhân vật mới đầy bí ẩn.",
  img: "assets/images/newsdetailimg-34-1.jpg",
  date: "2023-11-09",
  filterClass: ["release"]
},
{
  id: 35,
  title: "Valheim – Hé lộ kẻ thù bí ẩn & cải tiến chiến đấu!",
  description: "Deep North đang được phát triển mạnh mẽ, bản cập nhật nhỏ sẽ cải thiện chiến đấu và hé lộ những kẻ thù mới.",
  img: "assets/images/newsdetailimg-35-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 36,
  title: "The Long Dark – Tập 5: Tham vọng lớn nhất của Hinterland!",
  description: "Hinterland tiết lộ tiến độ phát triển Tập 5 và cải tiến đồ họa – Cột mốc quan trọng cho The Long Dark trong năm 2025.",
  img: "assets/images/the-long-dark.jpg",
  date: "2025-04-23",
  filterClass: ["release"]
},
{
  id: 37,
  title: "Dark Souls: Remastered - Bản vá 1.03 chính thức!",
  description: "Khám phá những chỉnh sửa và cải thiện trong bản cập nhật mới nhất dành cho Dark Souls: Remastered trên mọi nền tảng.",
  img: "assets/images/newsdetailimg-37-1.jpg",
  date: "2025-05-20",
  filterClass: ["release"]
},
{
  id: 38,
  title: "Assassin's Creed Odyssey - Cuộc thi chế độ ảnh & tuần chơi miễn phí!",
  description: "Tham gia cuộc thi #OdysseyPhotoMode và nhận cơ hội nhận thưởng Helix Credits cùng bản Gold của Valhalla!",
  img: "assets/images/assassins-creed-odyssey.jpg",
  date: "2025-05-20",
  filterClass: ["event"]
},
{
  id: 39,
  title: "Horizon Forbidden West PC – Tùy chỉnh tối ưu, hỗ trợ đa dạng cấu hình!",
  description: "Nixxes & Guerrilla tiết lộ chi tiết cấu hình PC và các tùy chỉnh hình ảnh hấp dẫn trước ngày phát hành 21/3!",
  img: "assets/images/newsdetailimg-39-1.jpg",
  date: "2025-03-10",
  filterClass: ["release"]
},
{
  id: 40,
  title: "Blue Prince – Bom tấn roguelike giải đố ám ảnh năm 2025",
  description: "Khám phá dinh thự Gneiss biến hóa không ngừng, nơi mỗi bước chân là một bí ẩn.",
  img: "assets/images/newsdetailimg-40-1.jpg",
  date: "2025-04-20",
  filterClass: ["release"]
},
{
  id: 41,
  title: "R.E.P.O – Từ thất bại đến hiện tượng co-op kinh dị 2025",
  description: "REPO game: Pha trộn khéo léo giữa kinh dị, co-op và vật lý thực tế, trở thành cú hit bất ngờ năm 2025.",
  img: "assets/images/newsdetailimg-41-1.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 42,
  title: "Helldivers 2 – Những chiến binh địa ngục trở lại!",
  description: "Khám phá chiến trường co-op hỗn loạn, đậm chất hài đen và bắn súng chiến thuật đầy lôi cuốn trong Helldivers 2!",
  img: "assets/images/newsdetailimg-42-1.jpg",
  date: "2024-03-12",
  filterClass: ["release"]
},
{
  id: 43,
  title: "Hades II – 5 điều bạn cần biết trước khi lao vào địa ngục!",
  description: "Từ hệ thống thu thập nguyên liệu đến phép thuật và Death Defiance – Hades II có gì mới?",
  img: "assets/images/newsdetailimg-43-1.jpg",
  date: "2025-05-21",
  filterClass: ["event"]
},
{
  id: 44,
  title: "Sons of The Forest – Cú hit sinh tồn chỉ sau 24 giờ!",
  description: "Phần tiếp theo của The Forest gây sốt với 2 triệu bản bán ra và hàng trăm ngàn người chơi cùng lúc.",
  img: "assets/images/newsdetailimg-44-1.jpg",
  date: "2023-03-02",
  filterClass: ["release"]
},
{
  id: 45,
  title: "It Takes Two – Hành trình hàn gắn tình cảm qua lối chơi co-op độc đáo",
  description: "Tựa game sáng tạo từ Hazelight Studios, đưa bạn vào cuộc phiêu lưu kỳ ảo về gia đình, tình yêu và sự kết nối.",
  img: "assets/images/newsdetailimg-45-1.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 46,
  title: "Stray – Hóa thân thành “hoàng thượng” trong thế giới hậu tận thế",
  description: "Stray gây sốt với lối chơi nhập vai mèo độc đáo, kết hợp giải đố và phiêu lưu trong thế giới robot!",
  img: "assets/images/stray.jpg",
  date: "2025-07-19",
  filterClass: ["release"]
},
{
  id: 47,
  title: "Ori and the Will of the Wisps – Tuyệt phẩm platformer trở lại",
  description: "Trở lại với Ori trong phần tiếp theo đầy cảm xúc, chiến đấu, khám phá và phiêu lưu ngoạn mục hơn bao giờ hết!",
  img: "assets/images/ori-will-of-the-wisps.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 48,
  title: "Stardew Valley – Tựa game nông trại chạm đến trái tim người chơi",
  description: "Trải nghiệm cuộc sống bình yên nơi thôn quê, xây dựng trang trại và khám phá bí ẩn của thung lũng Stardew!",
  img: "assets/images/newsdetailimg-48-1.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 49,
  title: "Hogwarts Legacy – Hành trình phù thủy kỳ ảo mở ra!",
  description: "Khám phá thế giới phù thủy tuyệt đẹp, lối chơi phép thuật và câu chuyện bí ẩn tại Hogwarts cuối thế kỷ 19!",
  img: "assets/images/newsdetailimg-49-1.jpg",
  date: "2023-02-14",
  filterClass: ["release"]
}
,
{
  id: 50,
  title: "Atomic Heart – FPS viễn tưởng kỳ lạ giữa lòng Liên Xô",
  description: "Đánh giá chi tiết siêu phẩm hành động đầu năm 2023: đồ họa đỉnh, bắn súng đã tay và xã hội không tưởng.",
  img: "assets/images/atomicheart.jpg",
  date: "2023-02-28",
  filterClass: ["release"]
},
{
  id: 51,
  title: "A Plague Tale: Requiem – Cuộc hành trình cảm xúc và đen tối",
  description: "Tiếp nối cuộc phiêu lưu của Amicia và Hugo chống lại đại dịch chuột ăn thịt người đầy ám ảnh.",
  img: "assets/images/plaguetale.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 52,
  title: "Palworld công bố bản cập nhật Tides of Terraria!",
  description: "Crossover giữa Palworld và Terraria mở ra thế giới sinh vật mới, đảo mới và những thách thức hấp dẫn!",
  img: "assets/images/newsdetailimg-52-1.jpg",
  date: "2025-05-14",
  filterClass: ["event"]
},
{
  id: 53,
  title: "Control – Siêu phẩm bắn súng kinh dị siêu nhiên không thể bỏ lỡ",
  description: "Tựa game pha trộn hành động – kinh dị – siêu nhiên đầy hấp dẫn từ nhà Remedy, đỉnh cao từ gameplay đến đồ họa.",
  img: "assets/images/control.jpg",
  date: "2021-07-26",
  filterClass: ["release"]
},
{
  id: 54,
  title: "Metro Exodus – Cuộc hành trình sống còn khỏi bóng tối",
  description: "Một thế giới hậu tận thế mở rộng đầy nguy hiểm, nhân văn và thử thách sinh tồn thực thụ.",
  img: "assets/images/newsdetailimg-54-1.jpg",
  date: "2025-05-21",
  filterClass: ["release"]
},
{
  id: 55,
  title: "Divinity: Original Sin – Bản nâng cấp Enhanced Edition đầy sức nặng",
  description: "Phiên bản cải tiến đưa CRPG huyền thoại trở lại với hơn 11.000 thay đổi và độ khó chiến lược hơn bao giờ hết!",
  img: "assets/images/newsdetailimg-55-1.jpg",
  date: "2015-12-08",
  filterClass: ["release"]
},
{
    id: 56,
    title: "MaetsVN mở bán Key game bản quyền - Giảm đến 50%",
    description: "GTA V, Red Dead Redemption 2, Resident Evil 4 và nhiều game hot đang giảm sâu tại MaetsVN!",
    img: "assets/images/re4.jpg",
    date: "2025-05-21",
    filterClass: ["event", "promotion"]
},
{
    id: 57,
    title: "Săn Deal Khủng tại MaetsVN – Rinh Game HOT, Giá Cực Hời!",
    description: "Chương trình khuyến mãi cuối tuần – Ưu đãi cho 100 đơn hàng đầu tiên mỗi ngày!",
    img: "assets/images/minecraft.jpg",
    date: "2025-05-19",
    filterClass: ["event", "promotion"]
},
{
    id: 58,
    title: "MaetsVN cập nhật tính năng giỏ hàng mới – Mua game dễ hơn bao giờ hết!",
    description: "Bạn có thể thêm nhiều key game cùng lúc và thanh toán siêu nhanh trên MaetsVN.",
    img: "assets/images/tingiohang.jpg",
    date: "2025-05-20",
    filterClass: ["event", "promotion"]
},
{
    id: 59,
    title: "Tặng tài khoản MaetsVN Premium miễn phí 3 ngày",
    description: "Đăng ký tài khoản tại MaetsVN và trải nghiệm ưu đãi độc quyền: nhận game sớm, giảm giá riêng!",
    img: "assets/images/hotline-miami.jpg",
    date: "2025-05-22",
    filterClass: ["event", "promotion"]
},
{
    id: 60,
    title: "Top 5 tựa game bản quyền bán chạy nhất tại MaetsVN tuần qua",
    description: "Bạn có đoán được những cái tên nào đang thống trị bảng xếp hạng bán chạy không?",
    img: "assets/images/hogwartslegacy.jpg",
    date: "2025-05-23",
    filterClass: ["event", "promotion"]
}
];

function renderNews() {
  const container = document.getElementById("news-list");
  if (!container) return;
  container.classList.remove("show");

  setTimeout(() => {
    let filteredNews = currentFilter === "all"
      ? [...news]
      : news.filter(n => Array.isArray(n.filterClass) && n.filterClass.includes(currentFilter));

    if (searchKeyword.trim()) {
      filteredNews = filteredNews.filter(n => n.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
    currentPage = Math.min(currentPage, totalPages || 1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    container.innerHTML = "";

    if (pageNews.length === 0) {
      container.innerHTML = '<p class="text-center text-muted">Không tìm thấy tin tức.</p>';
    }

    pageNews.forEach(n => {
      const col = document.createElement("div");
      col.className = `col-lg-4 col-md-6 mb-4 news-item ${n.filterClass.join(" ")}`;
      col.innerHTML = `
        <div class="card h-100 shadow-sm rounded-4 overflow-hidden">
          <img src="${n.img}" alt="${n.title}" class="card-img-top rounded-top-4" style="cursor: pointer;" />
          <div class="card-body d-flex flex-column">
            <div class="text-muted mb-2">${new Date(n.date).toLocaleDateString()}</div>
            <h5 class="card-title">${n.title}</h5>
            <p class="card-text flex-grow-1">${n.description}</p>
            <a href="news-detail.html?id=${n.id}" class="btn btn-outline-primary mt-auto rounded-pill">Xem chi tiết</a>
          </div>
        </div>
      `;
      col.querySelector(".card-img-top").addEventListener("click", () => {
        window.location.href = `news-detail.html?id=${n.id}`;
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

  pagination.appendChild(createPageButton('<<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage = 1;
    renderNews();
  }));
  pagination.appendChild(createPageButton('<', currentPage === 1, false, e => {
    e.preventDefault();
    currentPage--;
    renderNews();
  }));

  const maxVisible = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(startPage + maxVisible - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pagination.appendChild(createPageButton(i, false, currentPage === i, e => {
      e.preventDefault();
      currentPage = i;
      renderNews();
    }));
  }

  pagination.appendChild(createPageButton('>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage++;
    renderNews();
  }));
  pagination.appendChild(createPageButton('>>', currentPage === totalPages, false, e => {
    e.preventDefault();
    currentPage = totalPages;
    renderNews();
  }));
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchKeyword = e.target.value;
      currentPage = 1;
      renderNews();
    });
  }
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
        renderNews();
      }
    });
  });
}

window.onload = () => {
  setupSearch();
  setupFilterButtons();
  renderNews();
};
