# food-delivery-app

## 🍕 Food Delivery App — تطبيق توصيل الطعام

مشروع **React** لتطبيق توصيل الطعام باستخدام **React** و **Bootstrap** (واجهة **NomNom Express**).

---

### المميزات

- ✅ عرض قائمة الطعام مع الصور والوصف والسعر
- ✅ فلترة الطعام حسب النوع (بيتزا، برجر، معكرونة، سلطات، سندويشات، إفطار، مشروبات، قهوة وشاي، حلويات، وجبات سريعة)
- ✅ سلة الطلب مع إضافة/إزالة العناصر وتعديل الكمية
- ✅ واجهة مستخدم تفاعلية باستخدام Bootstrap
- ✅ صفحة Checkout لعرض إجمالي السعر ومعلومات التوصيل
- ✅ حفظ السلة في **LocalStorage** عند إعادة تحميل الصفحة
- ✅ قسم **Featured Items** في الصفحة الرئيسية

---

### التثبيت والتشغيل

```bash
npm install
npm start
```

يفتح المشروع على: **http://localhost:3000**

لبناء نسخة الإنتاج:

```bash
npm run build
```

---

### هيكل المشروع

```
src/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── MenuCard.js
│   ├── SidebarFoodCard.js
│   ├── Cart.js
│   └── Filter.js
├── pages/
│   ├── Home.js
│   ├── Menu.js
│   └── Checkout.js
├── context/
│   └── CartContext.js
├── data/
│   └── menuData.js
├── App.js
└── index.js
```

---

### التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| React 18 | واجهة المستخدم |
| React Router v6 | التنقل بين الصفحات |
| Bootstrap 5 | التنسيق والتصميم المتجاوب |
| Context API | إدارة حالة السلة |

---

## English

**Food delivery** web app built with **React** and **Bootstrap**. Browse the menu, filter by category, add items to cart, and complete a mock checkout with delivery details. Cart state persists in **localStorage**.

**Stack:** React 18, React Router v6, Bootstrap 5, Context API.

```bash
npm install
npm start
```

---

### ملاحظة عن رسائل GitHub

إذا ظهرت لك **تنبيهات أمنية (Dependabot / vulnerabilities)** على المستودع، فهي غالبًا مرتبطة بـ `react-scripts` والاعتماديات العميقة وليست بالضرورة خطأ في كودك. يمكن تجاهلها للتعلم أو تشغيل `npm audit fix` بحذر (قد يغيّر إصدارات الحزم).

If you see **security alerts** on the repo, they often come from Create React App’s dependency tree; your app may still run fine locally.
