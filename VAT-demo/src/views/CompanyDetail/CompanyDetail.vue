<template>
  <div class="company-detail">

    <aside class="company-detail__col company-detail__col--info">
      <CompanyInfoCard :company="company" />
      <RiskScoreCard :scores="riskScores" />
    </aside>

    <main class="company-detail__col company-detail__col--main">
      <SummaryCard :text="summaryText" />
      <BusinessRulesCard :violations="ruleViolations" />
      <GraphAnalysisCard :signals="graphSignals" :graph-score="riskScores.graph" />
      <FeatureIndicatorsCard :groups="featureGroups" />
    </main>
  </div>
</template>

<script setup>
import CompanyInfoCard from './sub-component/CompanyInforCard.vue';
import RiskScoreCard from './sub-component/RiskScoreCard.vue';
import SummaryCard from './sub-component/SummaryCard.vue';
import BusinessRulesCard from './sub-component/BusinessRuleCard.vue';
import GraphAnalysisCard from './sub-component/GraphAnalysisCard.vue';
import FeatureIndicatorsCard from './sub-component/FeatureIndiatorsCard.vue';

// mock data
const company = {
  name: 'CÔNG TY TNHH MTV Thương Mại Dịch Vụ Phạm Đức',
  taxCode: '5861277570',
  province: 'Bình Phước',
  industryCode: 'G03',
  industryName: 'Bán lẻ',
  status: 'Ngừng hoạt động',
  foundedAt: '2024-08-23',
  legalRep: 'Trần Ngọc Nam',
  phone: '985295141',
  declarationMethod: 'Khấu trừ',
  vatType: 'Thuế GTGT',
};

const riskScores = { model: 914, anomaly: 942, graph: 550 };

const summaryText = `CÔNG TY TNHH MTV Thương Mại Dịch Vụ Phạm Đức (MST: 5861277570) được đánh giá là có nguy cơ gian lận hóa đơn cao. Bằng chứng: hóa đơn lớn nhất 19.8 tỷ đồng, trung bình 604 triệu đồng (945 hóa đơn), chênh lệch gấp 33 lần — bất thường; mức tăng doanh thu 30 ngày so với bình quân năm ở mức thấp: gấp 0.7 lần; số hóa đơn phát hành trong 30 ngày ở mức rất cao: 78 hóa đơn; doanh thu hóa đơn 30 ngày ở mức rất cao: 67.6 tỷ đồng.`;

const ruleViolations = [
  {
    id: 1,
    title: 'Thao túng hóa đơn',
    description:
      'Phát hiện hành vi thao túng vòng đời hóa đơn qua tỷ lệ điều chỉnh/thay thế cao, thay thế nhanh hóa đơn giá trị lớn sau phát hành. Đây là các dấu hiệu đặc trưng của doanh nghiệp phát hành hóa đơn không phản ánh giao dịch thực tế.',
    subRules: [
      {
        code: 'RULE 4',
        name: 'Tỷ lệ thay thế/điều chỉnh 30 ngày vượt ngưỡng',
        desc: 'Tỷ lệ hóa đơn điều chỉnh/thay thế trong 30 ngày vượt ngưỡng top 5% peer.',
        legal: 'QĐ 78/QĐ-TCT Nhóm II tiêu chí 5.9',
      },
      {
        code: 'RULE 5',
        name: 'Quy mô lớn, tỷ lệ thay thế cao',
        desc: 'Người bán phát hành số lượng hóa đơn lớn trong năm nhưng tỷ lệ xóa/thay thế cả năm rất cao.',
        legal: 'QĐ 78/QĐ-TCT Nhóm II tiêu chí 5.8, 5.9, 5.10',
      },
      {
        code: 'RULE 6',
        name: 'Thay thế nhanh hóa đơn giá trị lớn',
        desc: 'Hóa đơn giá trị lớn so với peer bị thay thế trong vòng 7 ngày sau phát hành.',
        legal: 'NĐ 123/2020 Điều 19, TT 78/2021 Điều 7',
      },
    ],
  },
  {
    id: 2,
    title: 'Doanh thu/VAT bất thường',
    description:
      'Doanh thu tăng đột biến trong ngắn hạn nhưng tỷ lệ VAT thấp bất thường so với mức tăng doanh thu, tập trung doanh thu vào 1-2 khách hàng duy nhất.',
    subRules: [],
  },
  {
    id: 3,
    title: 'Liên kết định danh (người bán)',
    description:
      'Số lượng doanh nghiệp khác nhau đang dùng chung một tài khoản ngân hàng với người bán này ở mức cao bất thường.',
    subRules: [],
  },
];

const graphSignals = [
  {
    id: 1,
    title: 'Dấu hiệu công ty ma',
    badgeText: 'Ngừng hoạt động · 2024-08-23 → 2024-11-30',
    description:
      'Doanh nghiệp ngừng hoạt động chỉ sau vài tháng thành lập, thời gian tồn tại ngắn kèm khối lượng giao dịch lớn — trùng khớp mẫu hình công ty vỏ bọc phổ biến trong chuỗi gian lận hóa đơn.',
  },
];

const featureGroups = [
  {
    id: 1,
    title: 'Mô hình máy học',
    hint: 'Các đặc trưng có ảnh hưởng lớn nhất đến điểm rủi ro, xếp theo mức độ tác động giảm dần.',
    items: [
      { name: 'Tỷ lệ hóa đơn phát sinh nghiệp vụ điều chỉnh (tăng/giảm) trong 30 ngày', value: '0.5823' },
      { name: 'Tổng bán', value: '746.409.526.593' },
      { name: 'Tổng số lượng hóa đơn phát hành trong vòng 365 ngày qua', value: '1.260' },
      { name: 'Chỉ số biến động tỷ lệ thuế VAT ngầm định, so sánh mức đóng thuế VAT trung bình ngắn hạn (30 ngày) với dài hạn (1 năm)', value: '0.9105' },
      { name: 'Số lượng doanh nghiệp khác nhau đang dùng chung một tài khoản ngân hàng với người bán này', value: '5' },
    ],
  },
  {
    id: 2,
    title: 'Phát hiện bất thường',
    items: [],
  },
];
</script>

<style scoped>
.company-detail {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  height: 100%;
  min-height: 0;
}

.company-detail__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
  padding-right: var(--space-1);
}

.company-detail__col--info {
  flex: 0 0 380px;
}

.company-detail__col--main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
}
</style>