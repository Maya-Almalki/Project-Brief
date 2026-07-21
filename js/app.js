const STORAGE_KEY = 'project-brief-state-v1';

const projectFieldMap = {
  'الهويات البصرية': [
    { name: 'currentLogo', label: 'هل لديك شعار حالياً؟', type: 'select', options: ['نعم', 'لا', 'غير متأكد'] },
    { name: 'brandPersonality', label: 'شخصية العلامة التجارية', type: 'text' },
    { name: 'competitors', label: 'المنافسون الرئيسيون', type: 'text' },
    { name: 'targetAudience', label: 'الجمهور المستهدف', type: 'text' },
    { name: 'needLogo', label: 'هل تحتاج إلى شعار جديد؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBrandGuidelines', label: 'هل تحتاج إلى دليل هوية؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needStationery', label: 'هل تحتاج إلى أدوات مكتبية؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needSocialTemplates', label: 'هل تحتاج إلى قوالب للتواصل الاجتماعي؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'الحملة الإعلانية': [
    { name: 'campaignPlatform', label: 'المنصة الإعلانية', type: 'select', options: ['جوجل', 'ميتا', 'تيك توك', 'سناب شات'] },
    { name: 'campaignGoal', label: 'هدف الحملة', type: 'text' },
    { name: 'campaignDuration', label: 'مدة الحملة', type: 'text' },
    { name: 'advertisingBudget', label: 'ميزانية الإعلان', type: 'text' },
    { name: 'targetAudience', label: 'الجمهور المستهدف', type: 'text' },
    { name: 'previousCampaigns', label: 'الحملات السابقة', type: 'text' }
  ],
  'تصميم الموقع': [
    { name: 'existingWebsite', label: 'هل يوجد موقع حالي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'websiteUrl', label: 'رابط الموقع الحالي', type: 'text' },
    { name: 'numberOfPages', label: 'عدد الصفحات المتوقع', type: 'text' },
    { name: 'needCms', label: 'هل تحتاج إلى نظام إدارة محتوى؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needEcommerce', label: 'هل تحتاج إلى متجر إلكتروني؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needSeo', label: 'هل تحتاج إلى تحسين محركات البحث؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBookingSystem', label: 'هل تحتاج إلى نظام حجز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBlog', label: 'هل تحتاج إلى مدونة؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'التطبيق المحمول': [
    { name: 'platforms', label: 'المنصات المطلوبة', type: 'text' },
    { name: 'loginRequired', label: 'هل يتطلب تسجيل دخول؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'notifications', label: 'هل تحتاج إلى إشعارات؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'paymentGateway', label: 'هل تحتاج إلى بوابة دفع؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'adminDashboard', label: 'هل تحتاج لوحة تحكم للمسؤول؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'apiIntegration', label: 'هل تحتاج إلى تكامل مع API؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'وسائل التواصل': [
    { name: 'platforms', label: 'المنصات المستهدفة', type: 'text' },
    { name: 'postsPerMonth', label: 'عدد المنشورات في الشهر', type: 'text' },
    { name: 'needCopywriting', label: 'هل تحتاج إلى كتابة محتوى؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needPhotography', label: 'هل تحتاج إلى تصوير فوتوغرافي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needReels', label: 'هل تحتاج إلى ريلز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needPaidAds', label: 'هل تحتاج إلى إعلانات مدفوعة؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'إنتاج الفيديو': [
    { name: 'videoType', label: 'نوع الفيديو', type: 'text' },
    { name: 'duration', label: 'مدة الفيديو', type: 'text' },
    { name: 'scriptReady', label: 'هل السيناريو جاهز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'voiceOver', label: 'هل تحتاج إلى تعليق صوتي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'location', label: 'الموقع المطلوب للتصوير', type: 'text' },
    { name: 'motionGraphics', label: 'هل تحتاج إلى موشن جرافيك؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'droneShots', label: 'هل تحتاج إلى تصوير بالدرون؟', type: 'select', options: ['نعم', 'لا'] }
  ]
};

const state = {
  currentStep: 1,
  formData: {},
  theme: 'light'
};

const fieldLabelMap = {
  clientName: 'اسم العميل',
  companyName: 'اسم الشركة',
  email: 'البريد الإلكتروني',
  phone: 'رقم الهاتف',
  website: 'الموقع الإلكتروني',
  industry: 'الصناعة',
  projectName: 'اسم المشروع',
  projectType: 'نوع المشروع',
  budget: 'الميزانية',
  timelinePerson: 'المسؤول عن المشروع',
  timelineDate: 'تاريخ بدء المشروع',
  deadline: 'تاريخ التسليم النهائي',
  projectDescription: 'وصف المشروع',
  objectives: 'الأهداف',
  businessChallenges: 'التحديات التجارية',
  successMetrics: 'مقاييس النجاح',
  preferredStyle: 'الأسلوب المفضل',
  references: 'المراجع',
  additionalNotes: 'ملاحظات إضافية',
  fileUpload: 'رفع ملف',
  currentLogo: 'هل لديك شعار حالياً؟',
  brandPersonality: 'شخصية العلامة التجارية',
  competitors: 'المنافسون الرئيسيون',
  targetAudience: 'الجمهور المستهدف',
  needLogo: 'هل تحتاج إلى شعار جديد؟',
  needBrandGuidelines: 'هل تحتاج إلى دليل هوية؟',
  needStationery: 'هل تحتاج إلى أدوات مكتبية؟',
  needSocialTemplates: 'هل تحتاج إلى قوالب للتواصل الاجتماعي؟',
  campaignPlatform: 'المنصة الإعلانية',
  campaignGoal: 'هدف الحملة',
  campaignDuration: 'مدة الحملة',
  advertisingBudget: 'ميزانية الإعلان',
  previousCampaigns: 'الحملات السابقة',
  existingWebsite: 'هل يوجد موقع حالي؟',
  websiteUrl: 'رابط الموقع الحالي',
  numberOfPages: 'عدد الصفحات المتوقع',
  needCms: 'هل تحتاج إلى نظام إدارة محتوى؟',
  needEcommerce: 'هل تحتاج إلى متجر إلكتروني؟',
  needSeo: 'هل تحتاج إلى تحسين محركات البحث؟',
  needBookingSystem: 'هل تحتاج إلى نظام حجز؟',
  needBlog: 'هل تحتاج إلى مدونة؟',
  platforms: 'المنصات',
  loginRequired: 'هل يتطلب تسجيل دخول؟',
  notifications: 'هل تحتاج إلى إشعارات؟',
  paymentGateway: 'هل تحتاج إلى بوابة دفع؟',
  adminDashboard: 'هل تحتاج لوحة تحكم للمسؤول؟',
  apiIntegration: 'هل تحتاج إلى تكامل مع API؟',
  platformsSocial: 'المنصات المستهدفة',
  postsPerMonth: 'عدد المنشورات في الشهر',
  needCopywriting: 'هل تحتاج إلى كتابة محتوى؟',
  needPhotography: 'هل تحتاج إلى تصوير فوتوغرافي؟',
  needReels: 'هل تحتاج إلى ريلز؟',
  needPaidAds: 'هل تحتاج إلى إعلانات مدفوعة؟',
  videoType: 'نوع الفيديو',
  duration: 'مدة الفيديو',
  scriptReady: 'هل السيناريو جاهز؟',
  voiceOver: 'هل تحتاج إلى تعليق صوتي؟',
  location: 'الموقع المطلوب للتصوير',
  motionGraphics: 'هل تحتاج إلى موشن جرافيك؟',
  droneShots: 'هل تحتاج إلى تصوير بالدرون؟'
};

const form = document.getElementById('briefFormElement');
const progressFill = document.getElementById('progressFill');
const saveStatus = document.getElementById('saveStatus');
const stepItems = Array.from(document.querySelectorAll('.step-item'));
const panels = Array.from(document.querySelectorAll('.step-panel'));
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const resetButton = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const reviewContent = document.getElementById('reviewContent');
const dynamicQuestions = document.getElementById('dynamicQuestions');
const uploadStatus = document.getElementById('uploadStatus');
const projectTypeSelect = document.getElementById('projectType');
const loaderOverlay = document.getElementById('loaderOverlay');
const formActions = document.querySelector('.form-actions');

function init() {
  bindEvents();
  loadState();
  renderDynamicQuestions();
  hydrateForm();
  updateFloatingLabels();
  updateCharacterCounters();
  renderReview();
  renderStep();
}

function bindEvents() {
  nextButton.addEventListener('click', handleNext);
  prevButton.addEventListener('click', handlePrev);
  resetButton.addEventListener('click', handleReset);
  themeToggle.addEventListener('click', toggleTheme);
  projectTypeSelect.addEventListener('change', renderDynamicQuestions);
  document.getElementById('startOverBtn').addEventListener('click', startOver);
  document.getElementById('exportBtn').addEventListener('click', exportProfessionalDocument);
  document.getElementById('fileUpload').addEventListener('change', handleFileUpload);

  form.addEventListener('input', handleFormInput);
  form.addEventListener('change', handleFormInput);

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', toggleFaq);
  });

  document.querySelectorAll('.step-item').forEach((button) => {
    button.addEventListener('click', () => {
      const targetStep = Number(button.dataset.step);
      if (targetStep < state.currentStep) {
        state.currentStep = targetStep;
        renderStep();
      }
    });
  });
}

function handleFormInput(event) {
  const { target } = event;
  const rawValue = target.type === 'checkbox' ? (target.checked ? 'Yes' : 'No') : target.value;
  const value = typeof rawValue === 'string' ? rawValue.trim() : rawValue;
  state.formData[target.name] = value;
  saveState();
  updateSaveStatus('تم حفظ البيانات تلقائيًا');
  updateFloatingLabel(target);
  if (target.name === 'projectType') {
    renderDynamicQuestions();
    hydrateForm();
  }
  updateCharacterCounters();
  renderReview();
}

function handleReset() {
  startOver();
}

function handleNext() {
  if (state.currentStep === 5) {
    if (!validateStep(5)) {
      return;
    }
    submitBrief();
    return;
  }

  if (!validateStep(state.currentStep)) {
    return;
  }

  state.currentStep += 1;
  renderStep();
  saveState();
}

function handlePrev() {
  if (state.currentStep > 1) {
    state.currentStep -= 1;
    renderStep();
    saveState();
  }
}

function renderStep() {
  panels.forEach((panel) => {
    panel.classList.toggle('active', Number(panel.dataset.step) === state.currentStep);
  });

  stepItems.forEach((item) => {
    const isActive = Number(item.dataset.step) === state.currentStep;
    const isComplete = Number(item.dataset.step) < state.currentStep;
    item.classList.toggle('active', isActive);
    item.classList.toggle('complete', isComplete);
  });

  const progressWidth = `${(state.currentStep / 6) * 100}%`;
  progressFill.style.width = progressWidth;

  prevButton.disabled = state.currentStep === 1 || state.currentStep === 6;
  nextButton.innerHTML = state.currentStep === 5 ? '<i class="fa-solid fa-paper-plane"></i> إرسال' : state.currentStep === 6 ? 'تم' : 'التالي';

  if (state.currentStep === 6) {
    nextButton.disabled = true;
    form.querySelector('.form-actions').style.display = 'none';
  } else {
    nextButton.disabled = false;
    form.querySelector('.form-actions').style.display = 'flex';
  }

  if (state.currentStep === 5) {
    renderReview();
  }
}

function validateStep(step) {
  const panel = document.querySelector(`.step-panel[data-step="${step}"]`);
  const fields = Array.from(panel.querySelectorAll('input, select, textarea'));
  let isValid = true;
  let firstInvalid = null;

  fields.forEach((field) => {
    clearFieldError(field);
    const value = field.value ? field.value.trim() : '';
    let fieldIsValid = true;

    if (field.hasAttribute('required') && !value) {
      showFieldError(field, 'هذا الحقل مطلوب.');
      fieldIsValid = false;
    }

    if (fieldIsValid && field.name === 'email' && value && !isValidEmail(value)) {
      showFieldError(field, 'أدخل بريدًا إلكترونيًا صحيحًا.');
      fieldIsValid = false;
    }

    if (fieldIsValid && field.name === 'phone' && value && !/^[+]?\d{7,15}$/.test(value.replace(/\s|[-()]/g, ''))) {
      showFieldError(field, 'أدخل رقم هاتف صحيح.');
      fieldIsValid = false;
    }

    if (fieldIsValid && field.name === 'website' && value && !/^https:\/\//i.test(value)) {
      showFieldError(field, 'أدخل رابطًا كاملاً يبدأ بـ https://');
      fieldIsValid = false;
    }

    if (!fieldIsValid) {
      isValid = false;
      if (!firstInvalid) {
        firstInvalid = field;
      }
    }
  });

  if (!isValid && firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus({ preventScroll: true });
  }

  return isValid;
}

function showFieldError(field, message) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.add('error');
  const existingError = wrapper.querySelector('.error-text');
  if (existingError) {
    existingError.textContent = message;
    return;
  }
  const error = document.createElement('span');
  error.className = 'error-text';
  error.textContent = message;
  wrapper.appendChild(error);
}

function clearFieldError(field) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.remove('error');
  const error = wrapper.querySelector('.error-text');
  if (error) {
    error.remove();
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderDynamicQuestions() {
  const projectType = projectTypeSelect.value || 'الهويات البصرية';
  const fields = projectFieldMap[projectType] || projectFieldMap['الهويات البصرية'];
  dynamicQuestions.innerHTML = '';

  const fragment = document.createDocumentFragment();
  fields.forEach((field) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field-group';

    if (field.type === 'select') {
      const select = document.createElement('select');
      select.name = field.name;
      select.id = field.name;
      select.required = true;
      select.innerHTML = field.options
        .map((option) => `<option value="${option}">${option}</option>`)
        .join('');
      wrapper.appendChild(select);
      const label = document.createElement('label');
      label.htmlFor = field.name;
      label.textContent = field.label;
      wrapper.appendChild(label);
    } else {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = field.name;
      input.id = field.name;
      input.required = true;
      wrapper.appendChild(input);
      const label = document.createElement('label');
      label.htmlFor = field.name;
      label.textContent = field.label;
      wrapper.appendChild(label);
    }

    fragment.appendChild(wrapper);
  });

  dynamicQuestions.appendChild(fragment);
  hydrateForm();
  updateFloatingLabels();
}

function updateFloatingLabels() {
  document.querySelectorAll('.field-group input, .field-group select, .field-group textarea').forEach((field) => {
    updateFloatingLabel(field);
  });
}

function updateFloatingLabel(field) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.toggle('has-value', Boolean(field.value && field.value.trim()));
}

function hydrateForm() {
  const formElements = form.elements;
  Object.entries(state.formData).forEach(([name, value]) => {
    const field = formElements[name];
    if (!field) {
      return;
    }
    if (field.type === 'checkbox') {
      field.checked = Boolean(value);
    } else if (field.type === 'file') {
      return;
    } else {
      field.value = value;
    }
  });

  if (state.formData.projectType) {
    projectTypeSelect.value = state.formData.projectType;
  }

  updateFloatingLabels();
  updateCharacterCounters();
}

function updateCharacterCounters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const target = document.getElementById(counter.dataset.counter);
    if (!target) {
      return;
    }
    const max = Number(counter.dataset.max || 0);
    const count = target.value.length;
    counter.textContent = `${count}/${max}`;
  });
}

function renderReview() {
  const sections = [
    {
      title: 'معلومات العميل',
      fields: ['clientName', 'companyName', 'email', 'phone', 'website', 'industry'],
      step: 1
    },
    {
      title: 'تفاصيل المشروع',
      fields: ['projectName', 'projectType', 'budget', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives'],
      step: 2
    },
    {
      title: 'الأسئلة الديناميكية',
      fields: Object.keys(state.formData).filter((name) => !['clientName', 'companyName', 'email', 'phone', 'website', 'industry', 'projectName', 'projectType', 'budget', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives', 'businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'].includes(name)),
      step: 3
    },
    {
      title: 'الأسئلة العامة',
      fields: ['businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'],
      step: 4
    }
  ];

  reviewContent.innerHTML = '';
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const card = document.createElement('article');
    card.className = 'review-card';

    const header = document.createElement('div');
    header.className = 'review-card-header';
    header.innerHTML = `<h4>${section.title}</h4><button type="button" class="edit-link" data-edit-step="${section.step}">تعديل</button>`;
    card.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'review-grid';

    section.fields.forEach((name) => {
      const value = state.formData[name] || '—';
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `<strong>${formatLabel(name)}</strong><span>${escapeHtml(String(value))}</span>`;
      grid.appendChild(item);
    });

    card.appendChild(grid);
    fragment.appendChild(card);
  });

  reviewContent.appendChild(fragment);

  reviewContent.querySelectorAll('[data-edit-step]').forEach((button) => {
    button.addEventListener('click', () => {
      const step = Number(button.dataset.editStep);
      state.currentStep = step;
      renderStep();
    });
  });
}

function formatLabel(name) {
  return fieldLabelMap[name] || name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .replace(/([a-z])([A-Z])/g, '$1 $2');
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleFileUpload(event) {
  const [file] = event.target.files;
  state.formData.fileUpload = file ? file.name : '';
  uploadStatus.textContent = file ? `تم إرفاق: ${file.name}` : 'أرفق ملفات الإلهام أو المستندات أو أصول العلامة التجارية.';
  saveState();
  renderReview();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  themeToggle.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    currentStep: state.currentStep,
    formData: state.formData,
    theme: state.theme
  }));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.currentStep = parsed.currentStep || 1;
    state.formData = parsed.formData || {};
    state.theme = parsed.theme || 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    themeToggle.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    updateSaveStatus('تم استرجاع البيانات المحفوظة');
  } catch (error) {
    console.error('تعذر تحميل الحالة المحفوظة', error);
  }
}

function updateSaveStatus(message) {
  if (saveStatus) {
    saveStatus.textContent = message;
  }
}

function submitBrief() {
  showLoader();
  saveState();
  window.setTimeout(() => {
    hideLoader();
    state.currentStep = 6;
    renderStep();
    const successCheck = document.getElementById('successCheck');
    successCheck.classList.remove('animate');
    void successCheck.offsetWidth;
    successCheck.classList.add('animate');
  }, 900);
}

function showLoader() {
  loaderOverlay.classList.add('active');
}

function hideLoader() {
  loaderOverlay.classList.remove('active');
}

function startOver() {
  if (!window.confirm('هل تريد إعادة تعيين النموذج ومسح البيانات المحفوظة؟')) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state.currentStep = 1;
  state.formData = {};
  state.theme = 'light';
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  form.reset();
  projectTypeSelect.value = 'الهويات البصرية';
  uploadStatus.textContent = 'أرفق ملفات الإلهام أو المستندات أو أصول العلامة التجارية.';
  renderDynamicQuestions();
  hydrateForm();
  renderReview();
  updateSaveStatus('تمت إعادة تعيين النموذج');
  renderStep();
}

function exportProfessionalDocument() {
  const sections = [
    {
      title: 'معلومات العميل',
      fields: ['clientName', 'companyName', 'email', 'phone', 'website', 'industry']
    },
    {
      title: 'تفاصيل المشروع',
      fields: ['projectName', 'projectType', 'budget', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives']
    },
    {
      title: 'الأسئلة الديناميكية',
      fields: Object.keys(state.formData).filter((name) => !['clientName', 'companyName', 'email', 'phone', 'website', 'industry', 'projectName', 'projectType', 'budget', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives', 'businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'].includes(name))
    },
    {
      title: 'الأسئلة العامة',
      fields: ['businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload']
    }
  ];

  const rows = sections
    .map((section) => {
      const items = section.fields
        .map((name) => {
          const value = state.formData[name] || '—';
          return `<div class="item"><strong>${escapeHtml(formatLabel(name))}</strong><span>${escapeHtml(String(value))}</span></div>`;
        })
        .join('');

      return `<section><h2>${escapeHtml(section.title)}</h2><div class="grid">${items}</div></section>`;
    })
    .join('');

  const content = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>قالب موجز المشروع</title>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; background: #f6f8fc; color: #14213d; padding: 24px; }
      .page { max-width: 900px; margin: 0 auto; background: white; border-radius: 24px; box-shadow: 0 18px 45px rgba(20, 33, 61, 0.12); overflow: hidden; }
      .header { background: linear-gradient(135deg, #4f46e5, #06b6d4); color: white; padding: 30px 34px; }
      .header h1 { margin: 0 0 8px; font-size: 28px; }
      .header p { margin: 0; opacity: 0.95; }
      .body { padding: 26px 34px 34px; }
      section { margin-bottom: 22px; border: 1px solid #e5e7eb; border-radius: 16px; padding: 16px 18px; background: #fbfdff; }
      h2 { margin: 0 0 12px; font-size: 18px; color: #4f46e5; }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
      .item { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; }
      .item strong { display: block; font-size: 12px; color: #64748b; margin-bottom: 6px; text-transform: uppercase; }
      .item span { display: block; color: #0f172a; white-space: pre-wrap; }
      @media (max-width: 720px) { .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="header">
        <h1>قالب موجز المشروع</h1>
        <p>تم إنشاؤه بتاريخ ${new Date().toLocaleString('ar-EG')}</p>
      </div>
      <div class="body">${rows}</div>
    </div>
  </body>
</html>`;

  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'project-brief-template.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function toggleFaq(event) {
  const item = event.currentTarget.closest('.faq-item');
  item.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', init);
