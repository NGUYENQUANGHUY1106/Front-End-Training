// props : đạo cụ
/**
 * - React elements
  -> Sử dụng props giống như với attribute của thẻ HTML
  -> 2 props class, for => className, htmlFor
  -> Phải tuân theo quy ước có sẵn

- React components
  -> Sử dụng props giống như đối số cho Component
  -> Tự do đặt tên props
        + Đặt theo camelCase
        + Có thể bao gồm dấu gạch ngang

- Chú ý:
  -> Prop "key" là prop đặc biệt
  -> Props cơ bản là đối số của Component
  -> Props có thể là bất cứ kiểu dữ liệu gì
  -> Sử dụng destructuring
 */
// React Element tương tự như những thẻ bên HTML
// React Component  được gọi như là các funtion được tạo

//BTVN

const course = [
  {
    id: 15,
    title: "HTML CSS Pro",
    slug: "htmlcss",
    description:
      "Khóa học HTML CSS Pro phù hợp cho cả người mới bắt đầu, lên tới 8 dự án trên Figma, 300+ bài tập và flashcards, tặng 3+ games, tặng 20+ Figma để thực hành, cộng đồng học viên Pro nhiệt tình hỗ trợ nhau, mua một lần học mãi mãi.",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
    price: 1299000,
    old_price: 2500000,
    is_pro: true,
    is_published: true,
    students_count: 0,
    videos_count: 590,
    duration: 420602,
    duration_text: "116h50p",
    user_progress: 0,
    last_completed_at: null,
    published_at: "2022-08-18T17:00:00.000000Z",
  },
  {
    id: 19,
    title: "JavaScript Pro",
    slug: "javascript",
    description:
      "Khóa học JavaScript Pro này là nền tảng vững chắc để học tiếp React, Vue.js, Node.js, v.v. Mục tiêu là giúp bạn có thể làm chủ JavaScript thông qua việc am hiểu cơ chế hoạt động của ngôn ngữ.",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
    price: 1399000,
    old_price: 3299000,
    is_pro: true,
    is_published: true,
    students_count: 0,
    videos_count: 235,
    duration: 164433,
    duration_text: "45h40p",
    user_progress: 0,
    last_completed_at: null,
    published_at: "2024-08-08T17:00:00.000000Z",
  },
  {
    id: 27,
    title: "Ngôn ngữ Sass",
    slug: "sass",
    description:
      "Đây là một khóa học nhỏ được tách ra từ 2 chương học trong khóa HTML CSS Pro. Kiến thức về Sass trong khóa này bạn có thể áp dụng ngay vào các dự án của bạn.",
    image_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png",
    icon_url:
      "https://files.fullstack.edu.vn/f8-prod/courses/27/64e0daf212fad.png",
    price: 299000,
    old_price: 400000,
    is_pro: true,
    is_published: true,
    students_count: 0,
    videos_count: 27,
    duration: 22690,
    duration_text: "6h18p",
    user_progress: 0,
    last_completed_at: null,
    published_at: "2023-08-19T15:06:00.000000Z",
  },
];

function CoursesItem({
  title,
  description,
  image_url,
  price,
  timeVideo,
  quantity,
  onClick
}) {
  return (
    <React.Fragment>
      <h2 onClick={() =>onClick(title)}>{title}</h2>
      <img src={image_url} alt={title} width="200" />
      <p>{description}</p>
      <p>Giá: {price}</p>
      <p>Thời gian: {timeVideo}</p>
      <p>Số lượng học viên: {quantity}</p>
    </React.Fragment>
  );
}
// container
function App() {
  const handleOnclick = (title) =>
  {
      console.log(title);
  }
  return course.map((c) => (
    <CoursesItem
      key={c.id}
      title={c.title}
      description={c.description}
      image_url={c.image_url}
      price={c.price}
      timeVideo={c.duration_text}
      quantity={c.duration}
      onClick = {handleOnclick}
    />
  ));
}

console.log(App());

ReactDOM.render(<App />, document.getElementById("root"));
