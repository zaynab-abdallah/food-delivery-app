# 🍕 Food Delivery App - تطبيق توصيل الطعام

مشروع React لتطبيق توصيل الطعام باستخدام React و Bootstrap.

## المميزات

- ✅ عرض قائمة الطعام مع الصور والوصف والسعر
- ✅ فلترة الطعام حسب النوع (بيتزا، برجر، مشروبات، حلويات، وجبات سريعة)
- ✅ سلة الطلب مع إضافة/إزالة العناصر وتعديل الكمية
- ✅ واجهة مستخدم تفاعلية باستخدام Bootstrap
- ✅ صفحة Checkout لعرض إجمالي السعر ومعلومات الطلب
- ✅ حفظ السلة في LocalStorage عند إعادة تحميل الصفحة

## التثبيت والتشغيل

```bash
# تثبيت الحزم
npm install

# تشغيل المشروع
npm start
```

المشروع سيعمل على: http://localhost:3000

## هيكل المشروع

```
src/
├── components/      # المكونات
│   ├── Header.js
│   ├── Footer.js
│   ├── MenuCard.js
│   ├── Cart.js
│   └── Filter.js
├── pages/           # الصفحات
│   ├── Home.js
│   ├── Menu.js
│   └── Checkout.js
├── context/         # إدارة الحالة
│   └── CartContext.js
├── data/            # بيانات الطعام
│   └── menuData.js
├── App.js
└── index.js
```

## التقنيات المستخدمة

- React 18
- React Router v6
- Bootstrap 5
- Context API لإدارة حالة السلة
